
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-heritage-charcoal text-cream">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl mb-4 text-heritage-burgundy/90">Rajvant Palace Resort</h3>
            <p className="text-cream/70 mb-6 font-serif">
              A cultural treasure preserving the legacy and splendor of India's royal heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/70 hover:text-heritage-burgundy/90 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/70 hover:text-heritage-burgundy/90 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/70 hover:text-heritage-burgundy/90 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:rajpipla@rajvantpalace.com" className="text-cream/70 hover:text-heritage-burgundy/90 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-2 font-serif">
              {["History", "Virtual Tour", "Book a Visit", "Facilities", "Gallery", "FAQ"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-cream/70 hover:text-heritage-burgundy/90 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Visit */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-cream">Contact Details</h4>
            <ul className="space-y-4 font-serif">
              <li className="text-cream/70">
                <span className="block text-cream">Address</span>
                Rajvant Palace Resort, <br />
                Vijay Palace, <br />
                Rajpipla - 393 145, <br />
                Dist. Narmada (Gujarat)
              </li>
              <li className="text-cream/70">
                <span className="block text-cream">Contact</span>
                Phone: (02640) 220345, 220973<br />
                Fax: (02640) 220071<br />
                Email: rajpipla@rajvantpalace.com
              </li>
            </ul>
          </div>
          
          {/* Facilities */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-cream">Resort Facilities</h4>
            <ul className="space-y-2 text-cream/70 font-serif">
              <li>24 hrs. hot & cold water</li>
              <li>24 hrs. Room Service</li>
              <li>Swimming Pool</li>
              <li>Indoor & Outdoor Games</li>
              <li>Laundry service</li>
              <li>Car Rentals</li>
              <li>Safe Parking</li>
              <li>BOB/Master/Visa Credit Cards accepted</li>
              <li className="text-heritage-burgundy/90 pt-2">Check Out time: 10:00 a.m.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm mb-4 md:mb-0 font-serif">
            &copy; {new Date().getFullYear()} Rajvant Palace Resort. All rights reserved.
          </p>
          <div className="flex space-x-6 font-serif">
            <Link to="/privacy-policy" className="text-cream/60 hover:text-cream text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-cream/60 hover:text-cream text-sm transition-colors">
              Terms of Service
            </Link>
            <p className="text-cream/60 text-sm">
              All Taxes Extra as Applicable. Tariff Subject to Change without prior notice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
