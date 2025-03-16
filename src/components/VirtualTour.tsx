
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-heritage-gold">
          <g fill="currentColor">
            <path d="M50,0 C60,30 70,40 100,50 C70,60 60,70 50,100 C40,70 30,60 0,50 C30,40 40,30 50,0 Z" />
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4 items-center">
            <div className="h-px w-12 bg-heritage-gold"></div>
            <div className="px-4">
              <svg width="40" height="40" viewBox="0 0 100 100" className="text-heritage-gold">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="h-px w-12 bg-heritage-gold"></div>
          </div>
          
          <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wider text-sm fade-in-scroll">Immersive Experience</h6>
          <h2 className="text-heritage-navy font-serif mb-4 fade-in-scroll">Journey Through Royal Chambers</h2>
          <p className="text-heritage-charcoal/80 fade-in-scroll">
            Take a virtual journey through the hallways, chambers, and gardens of Rajvant Palace as experienced by the royal family
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Tour Features - Left Side */}
          <div className="lg:col-span-2 space-y-10">
            <div className="fade-in-scroll glass-panel p-6 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-full text-heritage-burgundy">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-2">Royal Walkthrough</h4>
                  <p className="text-heritage-charcoal/80">
                    Follow the footsteps of the Maharajah as you explore each room and discover the stories behind the royal artifacts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-scroll glass-panel p-6 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-full text-heritage-burgundy">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-2">Heritage Hotspots</h4>
                  <p className="text-heritage-charcoal/80">
                    Discover interactive points that reveal the historical significance and cultural heritage of each carefully preserved area.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-scroll glass-panel p-6 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4 bg-heritage-gold/20 p-3 rounded-full text-heritage-burgundy">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-heritage-navy font-medium mb-2">Cultural Immersion</h4>
                  <p className="text-heritage-charcoal/80">
                    Experience the sounds, stories, and ambiance of royal Indian heritage through our multimedia guided experience.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/tour" 
              className="inline-flex items-center text-heritage-burgundy hover:text-heritage-gold transition-colors fade-in-scroll group font-medium"
            >
              Begin your royal journey <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Tour Preview - Center and Right */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-xl fade-in-scroll indian-border p-1">
            <div className="relative pb-[75%] bg-heritage-navy/10 overflow-hidden rounded-md">
              <img 
                src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-e453b951-0348-458c-b3cc-962f759375d5.jpg" 
                alt="Virtual tour of Rajvant Palace" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link to="/tour" className="bg-heritage-gold/40 backdrop-blur-sm hover:bg-heritage-gold/70 text-white p-5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                  <Eye className="h-8 w-8 group-hover:text-heritage-navy transition-colors" />
                </Link>
              </div>
              
              {/* Tour hotspots - subtle pulsing dots */}
              <div className="absolute top-[30%] left-[25%] animate-pulse">
                <div className="bg-heritage-gold/80 text-white p-1 rounded-full ring-2 ring-heritage-gold/30 ring-offset-2 ring-offset-transparent">
                  <MapPin className="h-3 w-3" />
                </div>
              </div>
              <div className="absolute top-[60%] right-[30%] animate-pulse delay-300">
                <div className="bg-heritage-gold/80 text-white p-1 rounded-full ring-2 ring-heritage-gold/30 ring-offset-2 ring-offset-transparent">
                  <MapPin className="h-3 w-3" />
                </div>
              </div>
              <div className="absolute bottom-[20%] left-[50%] animate-pulse delay-700">
                <div className="bg-heritage-gold/80 text-white p-1 rounded-full ring-2 ring-heritage-gold/30 ring-offset-2 ring-offset-transparent">
                  <MapPin className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
