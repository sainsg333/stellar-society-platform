
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-12 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Organization Info */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue flex items-center justify-center">
                <span className="font-heading text-white text-xl font-bold">CS</span>
              </div>
              <span className="font-heading text-xl font-semibold">
                CSI<span className="text-cosmic-purple">GMRIT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Computer Society of India, GMRIT Chapter - Fostering innovation in computing technology and education.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cosmic-purple/10 hover:text-cosmic-purple transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cosmic-purple/10 hover:text-cosmic-purple transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cosmic-purple/10 hover:text-cosmic-purple transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-cosmic-purple/10 hover:text-cosmic-purple transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-medium text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                Home
              </Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                Events
              </Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                Our Team
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                Contact
              </Link>
              <Link to="/login" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                Login
              </Link>
              <Link to="/signup" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-medium text-lg">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:csi@gmrit.edu.in" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                <Mail className="h-4 w-4" />
                <span>csi@gmrit.edu.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>GMR Institute of Technology, Rajam, Andhra Pradesh, India - 532127</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Computer Society of India, GMRIT Chapter. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-cosmic-purple transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-cosmic-purple transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
