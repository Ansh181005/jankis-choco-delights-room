
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-chocolate-50 via-white to-gold-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-chocolate-800 to-chocolate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-shadow">
            Contact Us
          </h1>
          <p className="text-xl text-chocolate-100 max-w-2xl mx-auto">
            Get in touch with us for orders, inquiries, or just to share your chocolate love!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-chocolate-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-chocolate-700 text-lg leading-relaxed mb-8">
                  We'd love to hear from you! Whether you have questions about our chocolates, 
                  want to place a custom order, or just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-chocolate-900 mb-2">Phone</h3>
                    <p className="text-chocolate-600">+91 98765 43210</p>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-chocolate-900 mb-2">Email</h3>
                    <p className="text-chocolate-600">info@jankischocoroom.com</p>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-chocolate-900 mb-2">Location</h3>
                    <p className="text-chocolate-600">Sweet Street, Chocolate City</p>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-chocolate-900 mb-2">Hours</h3>
                    <p className="text-chocolate-600">Mon-Sun: 9AM-9PM</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-scale-in shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-chocolate-900 text-center">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-chocolate-50 border-chocolate-200 focus:border-gold-500"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-chocolate-50 border-chocolate-200 focus:border-gold-500"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-chocolate-50 border-chocolate-200 focus:border-gold-500"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-chocolate-50 border-chocolate-200 focus:border-gold-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-chocolate-800 hover:bg-chocolate-700 text-white py-3 text-lg hover-scale transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-gold-100 to-chocolate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-chocolate-900 mb-4">
            Special Offers & Orders
          </h2>
          <p className="text-chocolate-700 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for bulk orders, custom chocolates for special occasions, 
            or corporate gifts. We offer special discounts for large quantities!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <h3 className="font-semibold text-chocolate-900 mb-2">Bulk Orders</h3>
              <p className="text-chocolate-600">Special pricing for orders above 5kg</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <h3 className="font-semibold text-chocolate-900 mb-2">Custom Packaging</h3>
              <p className="text-chocolate-600">Perfect for gifts and special occasions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <h3 className="font-semibold text-chocolate-900 mb-2">Corporate Gifts</h3>
              <p className="text-chocolate-600">Branded chocolates for your business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
