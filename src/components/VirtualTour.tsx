
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
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wider text-sm fade-in-scroll">Immersive Experience</h6>
          <h2 className="text-heritage-navy font-serif mb-4 fade-in-scroll">Explore Every Corner of the Palace</h2>
          <p className="text-heritage-charcoal/80 fade-in-scroll">
            Take a virtual journey through the hallways, chambers, and gardens of Rajpipla Palace from the comfort of your home
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tour Preview */}
          <div className="rounded-lg overflow-hidden shadow-xl fade-in-scroll">
            <div className="relative pb-[75%] bg-heritage-navy/10">
              <img 
                src="https://images.unsplash.com/photo-1595877244574-e90ce41ce089?q=80&w=2574" 
                alt="Virtual tour of Rajpipla Palace" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link to="/tour" className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-6 rounded-full transition-all duration-300 hover:scale-110">
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
              className="inline-flex items-center text-heritage-burgundy hover:text-heritage-gold transition-colors fade-in-scroll"
            >
              Start the virtual tour <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
