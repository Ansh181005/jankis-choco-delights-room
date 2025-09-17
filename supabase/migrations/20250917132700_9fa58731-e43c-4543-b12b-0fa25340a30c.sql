-- Fix critical security issues (updated to handle existing data)

-- 1. Fix existing data that violates constraints
UPDATE public.contacts 
SET message = 'Thank you for your interest in our chocolates. Looking forward to hearing from you!'
WHERE char_length(message) < 10;

-- 2. Fix the buggy conversation_participants RLS policy
DROP POLICY IF EXISTS "Users can see conversation participants they are part of" ON public.conversation_participants;

CREATE POLICY "Users can see conversation participants they are part of"
ON public.conversation_participants
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 
    FROM public.conversation_participants cp 
    WHERE cp.conversation_id = conversation_participants.conversation_id 
    AND cp.user_id = auth.uid()
  )
);

-- 3. Add database constraints for security and data integrity
ALTER TABLE public.contacts 
ADD CONSTRAINT check_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100);

ALTER TABLE public.contacts 
ADD CONSTRAINT check_email_format CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');

ALTER TABLE public.contacts 
ADD CONSTRAINT check_message_length CHECK (char_length(message) >= 10 AND char_length(message) <= 2000);

ALTER TABLE public.contacts 
ADD CONSTRAINT check_phone_format CHECK (phone IS NULL OR phone ~* '^[+]?[0-9\s\-\(\)]{10,20}$');

-- 4. Add trigger to automatically assign first admin role
CREATE OR REPLACE FUNCTION public.assign_first_admin()
RETURNS TRIGGER AS $$
BEGIN
  -- If this is the first user and no admins exist, make them admin
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) 
    VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created_assign_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.assign_first_admin();

-- 5. Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- 6. Create function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'username',
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created_create_profile
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();