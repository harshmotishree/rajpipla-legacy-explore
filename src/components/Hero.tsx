
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
    <section className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-56acba50-5092-4a37-a4ce-68c5422db30d.jpg')`,
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.8)'
          }}
        />
        {/* Royal gold overlay pattern */}
        <div className="absolute inset-0 mandala-pattern opacity-30"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-heritage-gold">
          <g fill="currentColor">
            <path d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-heritage-gold">
          <g fill="currentColor">
            <path d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z" />
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in glass-panel p-10 rounded-xl max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" className="text-heritage-gold">
              <path fill="currentColor" d="M60,0 L70,10 L90,15 L70,20 L60,40 L50,20 L30,15 L50,10 Z" />
              <path fill="currentColor" d="M20,10 L25,15 L35,18 L25,21 L20,30 L15,21 L5,18 L15,15 Z" />
              <path fill="currentColor" d="M100,10 L105,15 L115,18 L105,21 L100,30 L95,21 L85,18 L95,15 Z" />
            </svg>
          </div>
          
          <h1 className="text-heritage-navy font-serif mb-6 font-bold leading-tight">
            The Royal Legacy of <span className="text-heritage-burgundy">Rajvant Palace</span>
          </h1>
          
          <p className="text-heritage-navy/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
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
              className="bg-heritage-navy/90 hover:bg-heritage-navy text-white border border-heritage-gold/30 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={scrollToNext}
            className="text-white hover:text-heritage-gold transition-colors duration-300 flex flex-col items-center glass-panel px-4 py-2 rounded-full"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
