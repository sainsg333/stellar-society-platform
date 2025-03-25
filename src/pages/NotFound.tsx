
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="inline-block relative">
              <div className="h-32 w-32 rounded-full bg-cosmic-purple/10 flex items-center justify-center mx-auto">
                <span className="text-6xl font-heading font-bold text-cosmic-purple">404</span>
                <div className="absolute w-full h-full rounded-full border-2 border-cosmic-purple/30 animate-pulse-subtle" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-heading font-bold mb-3">Lost in Space</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been moved, deleted, or possibly never existed.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-cosmic-purple text-white shadow-sm hover:shadow-cosmic hover:bg-cosmic-purple/90 transition-all"
          >
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
