
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-cream/95 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className={cn(
            "font-serif text-2xl md:text-3xl font-bold transition-all duration-300",
            isScrolled ? "text-heritage-burgundy" : "text-heritage-burgundy"
          )}>
            Rajvant Palace
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["History", "Tour", "Facilities", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-heritage-burgundy link-underline",
                isScrolled ? "text-heritage-charcoal" : "text-heritage-charcoal"
              )}
            >
              {item}
            </Link>
          ))}
          
          <Link 
            to="/book"
            className="bg-heritage-burgundy/95 hover:bg-heritage-burgundy text-cream px-5 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            Book Now
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-heritage-burgundy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {["History", "Tour", "Facilities", "Contact"].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="block py-2 text-heritage-charcoal hover:text-heritage-burgundy transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            <Link 
              to="/book"
              className="block py-2 mt-4 bg-heritage-burgundy text-cream px-4 rounded-md text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
