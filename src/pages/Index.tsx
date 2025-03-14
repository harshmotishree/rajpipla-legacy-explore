
import { useEffect } from "react";
import Hero from "@/components/Hero";
import VirtualTour from "@/components/VirtualTour";
import HeritageSection from "@/components/HeritageSection";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Rajvant Palace Resort - Royal Heritage Experience";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VirtualTour />
      <HeritageSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
