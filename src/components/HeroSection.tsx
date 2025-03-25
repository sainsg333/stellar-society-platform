
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cosmic-purple/10 to-transparent" />
      
      {/* Hero content */}
      <div className="container mx-auto text-center z-10 animate-scale-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple text-xs font-medium mb-6">
          <Star className="h-3 w-3 mr-1" /> Computer Society of India GMRIT Chapter
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight">
          <span className="text-gradient">Exploring Infinite</span>
          <br />
          <span>Possibilities in Tech</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-8">
          Join the Computer Society of India at GMRIT and be part of a
          vibrant community dedicated to advancing technology and
          fostering innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <Link
            to="/events"
            className="px-8 py-3 rounded-full bg-cosmic-purple text-white shadow-lg hover:shadow-cosmic-hover hover:bg-cosmic-purple/90 transition-all"
          >
            Explore Events
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 rounded-full border border-border hover:bg-cosmic-purple/5 hover:border-cosmic-purple/30 hover:text-cosmic-purple transition-all flex items-center"
          >
            Join Our Community
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      {/* Feature cards */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-8 animate-float">
            <div className="h-12 w-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-cosmic-purple" />
            </div>
            <h3 className="text-xl font-medium mb-3">Events & Workshops</h3>
            <p className="text-muted-foreground">
              Participate in cutting-edge workshops, hackathons, and tech talks 
              designed to enhance your skills and knowledge.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-8 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-cosmic-blue" />
            </div>
            <h3 className="text-xl font-medium mb-3">Community Network</h3>
            <p className="text-muted-foreground">
              Connect with like-minded tech enthusiasts, industry professionals, 
              and build lasting relationships within the community.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card rounded-2xl p-8 animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 w-12 rounded-full bg-cosmic-accent/10 flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-cosmic-accent" />
            </div>
            <h3 className="text-xl font-medium mb-3">Learning Resources</h3>
            <p className="text-muted-foreground">
              Access exclusive learning materials, project opportunities, 
              and mentorship from experienced professionals and faculty.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-cosmic-blue/10 to-transparent" />
    </div>
  );
};

export default HeroSection;
