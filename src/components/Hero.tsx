
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleParallax = () => {
      const scrollPos = window.scrollY;
      const elem = heroRef.current;
      if (elem) {
        elem.style.transform = `translateY(${scrollPos * 0.4}px)`;
        elem.style.opacity = `${1 - scrollPos / 700}`;
      }
    };
    
    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-cream">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ 
            backgroundImage: `url('https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-56acba50-5092-4a37-a4ce-68c5422db30d.jpg')`,
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.9)'
          }}
        />
        {/* Overlay pattern */}
        <div className="absolute inset-0 indian-pattern opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in glass-panel p-10 rounded-xl max-w-4xl mx-auto border border-heritage-burgundy/20">
          {/* Ornate divider */}
          <div className="mb-6 flex justify-center items-center">
            <div className="h-px w-16 bg-heritage-burgundy/60"></div>
            <span className="mx-4 text-heritage-burgundy text-2xl">❧</span>
            <div className="h-px w-16 bg-heritage-burgundy/60"></div>
          </div>
          
          <h1 className="text-heritage-burgundy font-serif mb-6 font-bold leading-tight">
            The Royal Legacy of <span className="text-heritage-burgundy italic">Rajvant Palace</span>
          </h1>
          
          <p className="text-heritage-charcoal text-lg md:text-xl max-w-2xl mx-auto mb-10 font-serif">
            Step into a world of regal splendor and timeless elegance in this magnificent 
            palace built for Maharajah Vijay Singhji in 1915
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/tour" 
              className="royal-button flex items-center group"
            >
              Virtual Tour <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/book" 
              className="bg-cream text-heritage-burgundy border border-heritage-burgundy px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-heritage-burgundy/10"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={scrollToNext}
            className="text-heritage-charcoal hover:text-heritage-burgundy transition-colors duration-300 flex flex-col items-center glass-panel px-4 py-2 rounded-full"
          >
            <span className="text-sm mb-2 font-serif">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
