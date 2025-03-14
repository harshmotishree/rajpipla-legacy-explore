
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wider text-sm">Get in Touch</h6>
          <h2 className="text-heritage-navy font-serif mb-4">Contact Us</h2>
          <p className="text-heritage-charcoal/80">
            Have questions about the palace or planning a visit? We're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-heritage-cream/30 rounded-lg p-8">
            <h3 className="text-heritage-navy font-serif mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-lg text-heritage-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-1">Location</h4>
                  <p className="text-heritage-charcoal/80">
                    Rajpipla Palace, Narmada District<br />
                    Gujarat, India - 393145
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-lg text-heritage-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-1">Email</h4>
                  <p className="text-heritage-charcoal/80">
                    info@rajpipla-palace.com<br />
                    bookings@rajpipla-palace.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-lg text-heritage-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-1">Phone</h4>
                  <p className="text-heritage-charcoal/80">
                    +91 98765 43210<br />
                    +91 91234 56789
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-heritage-navy font-medium mb-4">Visiting Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-heritage-charcoal/80">Monday - Friday</span>
                  <span className="text-heritage-navy font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-heritage-charcoal/80">Saturday - Sunday</span>
                  <span className="text-heritage-navy font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-heritage-charcoal/80">Public Holidays</span>
                  <span className="text-heritage-navy font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
            <h3 className="text-heritage-navy font-serif mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-heritage-charcoal mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 focus:border-heritage-gold/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heritage-charcoal mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 focus:border-heritage-gold/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-heritage-charcoal mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 focus:border-heritage-gold/50"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-heritage-charcoal mb-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 focus:border-heritage-gold/50"
                  placeholder="Write your message here..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-navy font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
