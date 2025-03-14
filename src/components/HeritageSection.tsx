
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Book, FileText, Crown } from "lucide-react";
import { setupScrollReveal } from "@/lib/animations";

export const HeritageSection = () => {
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] rounded-full bg-heritage-gold/5 blur-3xl z-0"></div>
      <div className="absolute -left-64 -bottom-64 w-[40rem] h-[40rem] rounded-full bg-heritage-burgundy/5 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h6 className="text-heritage-burgundy font-medium mb-3 uppercase tracking-wider text-sm fade-in-scroll">Our Legacy</h6>
          <h2 className="text-heritage-navy font-serif mb-4 fade-in-scroll">Discover the Royal Heritage</h2>
          <p className="text-heritage-charcoal/80 fade-in-scroll">
            The Rajvant Palace Resort is part of the 7-acre Vijayraj palace complex, showcasing a blend of European architectural styles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Clock,
              title: "Historical Timeline",
              description: "Built for Maharajah Vijay Singhji in 1915, the palace has a rich historical legacy",
              link: "/history"
            },
            {
              icon: Crown,
              title: "Royal Museum",
              description: "Explore rooms dedicated to trophies, stuffed animals, mirrors, portraits, textiles, and more",
              link: "/museum"
            },
            {
              icon: FileText,
              title: "Architecture",
              description: "Admire the Romanesque dome, classical columns, Greek capitals, Venetian doors, and Gothic arches",
              link: "/architecture"
            },
            {
              icon: Book,
              title: "Facilities",
              description: "Enjoy 24-hour service, swimming pool, indoor & outdoor games, and luxury amenities",
              link: "/facilities"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-heritage-cream fade-in-scroll"
            >
              <div className="mb-4 bg-heritage-cream/50 inline-flex p-3 rounded-lg text-heritage-burgundy">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-heritage-navy mb-2">{item.title}</h4>
              <p className="text-heritage-charcoal/70 mb-4 text-sm">{item.description}</p>
              <Link 
                to={item.link} 
                className="text-sm text-heritage-burgundy hover:text-heritage-gold transition-colors inline-flex items-center font-medium"
              >
                Explore more
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 fade-in-scroll">
            <h3 className="text-heritage-navy font-serif">A Marvel of European Architecture</h3>
            <p className="text-heritage-charcoal/80">
              The palace resembles a typical European mansion, with its Romanesque dome, classical columns, Greek capitals, and Venetian doors, Gothic arches. The interiors are appointed in original period furniture.
            </p>
            <p className="text-heritage-charcoal/80">
              A few rooms of the palace are set aside for a museum of trophies, stuffed animals, mirrors, portraits, textiles, glass and ceramics, offering visitors a glimpse into royal history.
            </p>
            <Link 
              to="/heritage" 
              className="inline-block mt-4 bg-heritage-burgundy hover:bg-heritage-burgundy/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Explore the Heritage
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 fade-in-scroll">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-63f72b3caf7b11edbd950a58a9feac02.jpg" 
                  alt="Palace architecture detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-96">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-e07cf1c249fa11e9b0760242ac110004.jpg" 
                  alt="Palace interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-96">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-0216c704-ed02-469a-ba61-1f5f39519bfb.jpg" 
                  alt="Palace corridor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
                <img 
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411111128521825-251b856caf7a11edb62d0a58a9feac02.jpg" 
                  alt="Palace artwork" 
                  className="w-full h-full object-cover"
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
