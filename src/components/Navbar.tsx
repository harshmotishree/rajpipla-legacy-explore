
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
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
          ? "bg-rekhta-paper/95 backdrop-blur-sm shadow-sm py-3" 
          : "bg-rekhta-paper py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className={cn(
            "font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-300",
            isScrolled ? "text-rekhta-darkbrown" : "text-rekhta-darkbrown"
          )}>
            राजवंत पैलेस
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["इतिहास", "दर्शन", "सुविधाएँ", "संपर्क"].map((item, index) => (
            <Link 
              key={item} 
              to={`/${["history", "tour", "facilities", "contact"][index]}`}
              className="rekhta-nav-link"
            >
              {item}
            </Link>
          ))}
          
          <div className="flex items-center pl-4 border-l border-rekhta-gold/20">
            <button className="p-2 text-rekhta-darkbrown hover:text-rekhta-gold transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
          </div>
          
          <Link 
            to="/book"
            className="bg-rekhta-gold hover:bg-rekhta-gold/90 text-white px-5 py-2 text-sm font-medium transition-all duration-300"
          >
            अभी बुक करें
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-rekhta-darkbrown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-rekhta-paper border-t border-rekhta-gold/20">
          <div className="container mx-auto px-6 py-4 space-y-3">
            {["इतिहास", "दर्शन", "सुविधाएँ", "संपर्क"].map((item, index) => (
              <Link 
                key={item} 
                to={`/${["history", "tour", "facilities", "contact"][index]}`}
                className="block py-2 text-rekhta-darkbrown hover:text-rekhta-gold transition-colors font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            <div className="py-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="खोज..." 
                  className="w-full bg-rekhta-cream/50 border border-rekhta-gold/20 p-2 focus:outline-none focus:border-rekhta-gold/50 text-rekhta-darkbrown"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-rekhta-brown/60" />
              </div>
            </div>
            
            <Link 
              to="/book"
              className="block py-2 mt-4 bg-rekhta-gold text-white px-4 text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              अभी बुक करें
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
