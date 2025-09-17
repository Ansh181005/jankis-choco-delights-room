-- Fix remaining security issues

-- 1. The 'first' table appears to be a test table with RLS enabled but no policies
-- Since it has no clear purpose, we'll disable RLS or add a restrictive policy
-- Let's add a restrictive policy that blocks all access for security
CREATE POLICY "Block all access to first table"
ON public.first
FOR ALL
TO authenticated
USING (false)
WITH CHECK (false);

-- Alternative: If this table is not needed, you can drop it entirely:
-- DROP TABLE public.first;