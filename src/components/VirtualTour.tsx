
import { useEffect, useRef } from "react";
import { ArrowRight, Compass, MapPin, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { setupScrollReveal } from "@/lib/animations";

export const VirtualTour = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-heritage-cream/30 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-paisley-pattern"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-heritage-gold/10 rotate-45 -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-heritage-saffron/10 rotate-45 translate-x-16 translate-y-16"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-0.5 w-20 bg-heritage-gold"></div>
          </div>
          <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wider text-sm fade-in-scroll">Immersive Experience</h6>
          <h2 className="text-heritage-navy font-serif mb-4 fade-in-scroll">Explore Every Corner of the Palace</h2>
          <p className="text-heritage-charcoal/80 fade-in-scroll">
            Take a virtual journey through the hallways, chambers, and gardens of Rajvant Palace from the comfort of your home
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tour Preview */}
          <div className="rounded-lg overflow-hidden shadow-xl fade-in-scroll indian-border p-1">
            <div className="relative pb-[75%] bg-heritage-navy/10 overflow-hidden rounded-md">
              <img 
                src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-e453b951-0348-458c-b3cc-962f759375d5.jpg" 
                alt="Virtual tour of Rajvant Palace" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link to="/tour" className="bg-heritage-gold/30 backdrop-blur-md hover:bg-heritage-gold/60 text-white p-6 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                  <Eye className="h-8 w-8" />
                </Link>
              </div>
              
              {/* Tour hotspots */}
              <div className="absolute top-[30%] left-[25%] animate-pulse">
                <div className="bg-heritage-gold text-white p-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute top-[60%] right-[30%] animate-pulse delay-300">
                <div className="bg-heritage-gold text-white p-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute bottom-[20%] left-[50%] animate-pulse delay-700">
                <div className="bg-heritage-gold text-white p-1 rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-10">
            <div className="fade-in-scroll">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-lg text-heritage-gold">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-2">360° Panoramic Views</h4>
                  <p className="text-heritage-charcoal/80">
                    Immerse yourself in stunning 360-degree views of every room, allowing you to look in any direction as if you were actually there.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-scroll">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-lg text-heritage-gold">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-2">Interactive Hotspots</h4>
                  <p className="text-heritage-charcoal/80">
                    Discover interactive points throughout the tour that reveal historical facts, stories, and details about art and architecture.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-scroll">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-lg text-heritage-gold">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-2">Guided Experience</h4>
                  <p className="text-heritage-charcoal/80">
                    Follow predefined paths through the palace or explore freely at your own pace, with expert narration available throughout.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/tour" 
              className="inline-flex items-center text-heritage-burgundy hover:text-heritage-gold transition-colors fade-in-scroll group"
            >
              Start the virtual tour <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
