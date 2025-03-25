
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  
  // Check if user is authenticated - this is a placeholder
  const isAuthenticated = false;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Detect system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue flex items-center justify-center">
              <span className="font-heading text-white text-xl font-bold">CS</span>
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">
              CSI<span className="text-cosmic-purple">GMRIT</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-foreground hover:text-cosmic-purple transition-colors font-medium text-sm 
                  ${location.pathname === link.path 
                    ? 'text-cosmic-purple after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-cosmic-purple after:-bottom-1 after:left-0' 
                    : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-cosmic-blue" />
              ) : (
                <Moon className="h-5 w-5 text-cosmic-purple" />
              )}
            </button>
            
            {/* Auth buttons */}
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-cosmic-purple/10 hover:bg-cosmic-purple/20 text-cosmic-purple transition-colors"
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="px-5 py-2 rounded-full bg-cosmic-purple text-white hover:bg-cosmic-purple/90 transition-all shadow-sm"
              >
                <span className="text-sm font-medium">Login</span>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-cosmic-blue" />
              ) : (
                <Moon className="h-5 w-5 text-cosmic-purple" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-t border-border bg-background/95 backdrop-blur-lg md:hidden animate-slide-in">
          <div className="container mx-auto py-4 px-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-foreground hover:text-cosmic-purple transition-colors ${
                    location.pathname === link.path ? 'text-cosmic-purple font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile auth button */}
              {isAuthenticated ? (
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-2 py-2 text-cosmic-purple"
                >
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="py-2 px-4 my-2 rounded-full bg-cosmic-purple text-white text-center shadow-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
