
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
            Delve into the rich history and cultural significance of the palace and its inhabitants through the centuries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Clock,
              title: "Historical Timeline",
              description: "Explore the chronological journey of Rajpipla Palace from its inception to present day",
              link: "/history"
            },
            {
              icon: Crown,
              title: "Royal Lineage",
              description: "Learn about the royal families and rulers who have called this palace home",
              link: "/lineage"
            },
            {
              icon: FileText,
              title: "Architecture",
              description: "Discover the unique architectural features and influences that shaped the palace",
              link: "/architecture"
            },
            {
              icon: Book,
              title: "Cultural Significance",
              description: "Understand the palace's importance in regional art, culture, and traditions",
              link: "/culture"
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
            <h3 className="text-heritage-navy font-serif">A Marvel of Royal Architecture</h3>
            <p className="text-heritage-charcoal/80">
              The palace showcases a unique blend of architectural styles, combining European neo-classical influences with traditional Indian design elements. Its majestic façade, intricate carvings, and sprawling grounds stand as a testament to the artistic excellence of the era.
            </p>
            <p className="text-heritage-charcoal/80">
              Each room tells a story of opulence and craftsmanship, from the grand durbar hall adorned with chandeliers and ornate frescoes to the private chambers featuring delicate inlay work and period furniture.
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
                  src="https://images.unsplash.com/photo-1609188944035-ae2b8828f4a0?q=80&w=2670" 
                  alt="Palace architecture detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2670" 
                  alt="Palace interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1505069446780-4ef442b5207f?q=80&w=2574" 
                  alt="Palace corridor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670" 
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
