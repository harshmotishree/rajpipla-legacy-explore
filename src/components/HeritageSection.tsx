
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Book, FileText, Crown, ArrowRight } from "lucide-react";
import { setupScrollReveal } from "@/lib/animations";

export const HeritageSection = () => {
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <section className="py-24 cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 indian-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="ornate-divider"></div>
          <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wide text-sm fade-in-scroll">Our Legacy</h6>
          <h2 className="text-heritage-charcoal font-serif mb-4 fade-in-scroll">Discover the Royal Heritage</h2>
          <p className="text-heritage-charcoal/80 fade-in-scroll font-serif">
            The Rajvant Palace showcases a blend of European architectural styles with distinctly Indian royal influences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Clock,
              title: "Historical Timeline",
              description: "Built for Maharajah Vijay Singhji in 1915, the palace has a rich historical legacy spanning generations",
              link: "/history"
            },
            {
              icon: Crown,
              title: "Royal Museum",
              description: "Explore rooms dedicated to royal artifacts, portraits, textiles, and precious heirlooms",
              link: "/museum"
            },
            {
              icon: FileText,
              title: "Architecture",
              description: "Admire the blend of Indian and European styles with intricate details and majestic spaces",
              link: "/architecture"
            },
            {
              icon: Book,
              title: "Royal Experience",
              description: "Enjoy royal hospitality with traditional ceremonies, cuisine, and cultural performances",
              link: "/facilities"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="royal-card fade-in-scroll"
            >
              <div className="mb-4 bg-heritage-burgundy/10 inline-flex p-3 rounded-lg text-heritage-burgundy">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-heritage-charcoal mb-2">{item.title}</h4>
              <p className="text-heritage-charcoal/70 mb-4 text-sm font-serif">{item.description}</p>
              <Link 
                to={item.link} 
                className="text-sm text-heritage-burgundy hover:text-heritage-burgundy/70 transition-colors inline-flex items-center font-medium group"
              >
                Explore more
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 glass-panel p-8 rounded-lg fade-in-scroll">
            <div className="h-0.5 w-16 bg-heritage-burgundy mb-4"></div>
            <h3 className="text-heritage-charcoal font-serif">A Treasure of Indian Royal Heritage</h3>
            <p className="text-heritage-charcoal/80 font-serif">
              The palace showcases the perfect blend of traditional Indian royal architecture and European influences. The intricate details of the façade and interiors are testament to the craftsmanship of the era.
            </p>
            <p className="text-heritage-charcoal/80 font-serif">
              Experience the royal lifestyle as the palace houses a museum of historical artifacts, including original furniture, artworks, and royal memorabilia that offer a glimpse into the opulent lifestyle of Indian royalty.
            </p>
            <Link 
              to="/heritage" 
              className="inline-block mt-4 bg-heritage-burgundy hover:bg-heritage-burgundy/90 text-cream px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Explore the Heritage
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 fade-in-scroll">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-sm h-48 md:h-64 indian-border p-0.5">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-63f72b3caf7b11edbd950a58a9feac02.jpg" 
                  alt="Palace architecture detail" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm h-48 md:h-96 indian-border p-0.5">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-e07cf1c249fa11e9b0760242ac110004.jpg" 
                  alt="Palace interior" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden shadow-sm h-48 md:h-96 indian-border p-0.5">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-0216c704-ed02-469a-ba61-1f5f39519bfb.jpg" 
                  alt="Palace corridor" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm h-48 md:h-64 indian-border p-0.5">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-251b856caf7a11edb62d0a58a9feac02.jpg" 
                  alt="Palace artwork" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
