
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
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-56acba50-5092-4a37-a4ce-68c5422db30d.jpg')`,
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.7)'
          }}
        />
        {/* Indian pattern overlay */}
        <div className="absolute inset-0 bg-paisley-pattern opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in max-w-5xl">
          <div className="mb-6">
            <div className="inline-block">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-heritage-gold">
                <path fill="currentColor" d="M40,0L80,40H0L40,0z" />
                <path fill="currentColor" d="M120,0L80,40h40V0z" />
                <path fill="currentColor" d="M0,0h40L0,40V0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-white font-serif mb-4 font-bold leading-tight">
            Experience the Royal Legacy <br />of Rajvant Palace Resort
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Step into a world of regal splendor and timeless elegance in this European-inspired 
            mansion built for Maharajah Vijay Singhji in 1915
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
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-xl"
            >
              Book Your Visit
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={scrollToNext}
            className="text-white/80 hover:text-white transition-colors duration-300 flex flex-col items-center"
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
