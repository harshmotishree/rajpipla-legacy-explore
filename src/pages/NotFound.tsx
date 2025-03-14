
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-heritage-cream/30 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="font-serif text-9xl font-bold text-heritage-gold">404</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-heritage-navy mb-4">Page Not Found</h1>
        <p className="text-heritage-charcoal mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <Link to="/" className="inline-flex items-center bg-heritage-burgundy hover:bg-heritage-burgundy/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
