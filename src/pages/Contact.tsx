
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend API
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple text-xs font-medium mb-4">
              <MessageSquare className="h-3 w-3 mr-1" /> GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Have questions about CSI GMRIT or want to get involved?
              Reach out to us and we'll be happy to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="glass-effect p-6 rounded-xl flex items-start">
                <div className="bg-cosmic-purple/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-cosmic-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Our friendly team is here to help.
                  </p>
                  <a href="mailto:csigmrit@gmail.com" className="text-cosmic-purple hover:underline text-sm font-medium">
                    csigmrit@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="glass-effect p-6 rounded-xl flex items-start">
                <div className="bg-cosmic-purple/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-cosmic-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <a href="tel:+91-9876543210" className="text-cosmic-purple hover:underline text-sm font-medium">
                    +91 987 654 3210
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="glass-effect p-6 rounded-xl flex items-start">
                <div className="bg-cosmic-purple/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-cosmic-purple" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Come say hello at our office.
                  </p>
                  <address className="text-sm not-italic">
                    CSI GMRIT Chapter,<br />
                    GMR Institute of Technology,<br />
                    Rajam, Andhra Pradesh
                  </address>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card shadow-sm rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Let us know how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="font-bold mb-2">How can I join CSI GMRIT?</h3>
                <p className="text-muted-foreground">
                  Students can join by filling out the membership form available at our office 
                  or registering online through our website during the membership drive.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="font-bold mb-2">What are the benefits of joining CSI?</h3>
                <p className="text-muted-foreground">
                  Members get access to workshops, seminars, technical events, 
                  industry connections, placement assistance, and skill development opportunities.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="font-bold mb-2">How can I participate in CSI events?</h3>
                <p className="text-muted-foreground">
                  All events are announced on our website, social media channels, and notice boards. 
                  Members receive direct notifications, while non-members can register for open events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
