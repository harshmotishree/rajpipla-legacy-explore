
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-heritage-navy text-white">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl mb-4 text-heritage-gold">Rajpipla Palace</h3>
            <p className="text-white/70 mb-6">
              A cultural treasure preserving the legacy and splendor of India's royal heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-heritage-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-heritage-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-heritage-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:info@rajpipla-palace.com" className="text-white/70 hover:text-heritage-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["History", "Virtual Tour", "Book a Visit", "Heritage", "Gallery", "FAQ"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 hover:text-heritage-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Visit */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-white">Visiting Information</h4>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block text-white">Opening Hours</span>
                Monday - Sunday: 9:00 AM - 5:00 PM
              </li>
              <li className="text-white/70">
                <span className="block text-white">Location</span>
                Rajpipla Palace, Narmada District<br />
                Gujarat, India - 393145
              </li>
              <li className="text-white/70">
                <span className="block text-white">Contact</span>
                +91 98765 43210<br />
                info@rajpipla-palace.com
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-white">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates on events, exhibitions, and special tours.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold/50 focus:border-heritage-gold/50 placeholder-white/40 text-white"
              />
              <button 
                type="submit"
                className="w-full bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-navy font-medium py-2 px-4 rounded-md transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rajpipla Palace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
