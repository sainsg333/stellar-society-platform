import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import UniverseBackground from '../components/UniverseBackground';
import EventCard from '../components/EventCard';
import LatestEventBanner from '../components/LatestEventBanner';
import { ChevronRight, Rocket, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: '1',
      title: 'Web Development Bootcamp',
      date: 'June 15, 2023',
      description: 'A comprehensive bootcamp covering modern web development technologies including React, Node.js, and more.',
      imageUrl: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3',
      participants: 120,
      pdfLink: '#',
    },
    {
      id: '2',
      title: 'AI & Machine Learning Workshop',
      date: 'July 3, 2023',
      description: 'Explore the fundamentals of AI and machine learning with hands-on exercises and real-world applications.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3',
      participants: 85,
    },
    {
      id: '3',
      title: 'Cybersecurity Hackathon',
      date: 'July 22, 2023',
      description: 'Test your cybersecurity skills in a competitive environment while learning about the latest security threats.',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3',
      participants: 64,
      pdfLink: '#',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <HeroSection />
        
        {/* Latest Event Banner */}
        <LatestEventBanner />
        
        {/* Upcoming Events Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-10">
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-cosmic-purple mr-2" />
                  <h2 className="text-sm font-medium text-cosmic-purple">UPCOMING EVENTS</h2>
                </div>
                <h3 className="text-3xl font-heading font-semibold">Don't Miss Out</h3>
              </div>
              
              <Link
                to="/events"
                className="hidden md:flex items-center text-sm font-medium text-cosmic-purple hover:underline"
              >
                View All Events
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  imageUrl={event.imageUrl}
                  participants={event.participants}
                  pdfLink={event.pdfLink}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <Link
                to="/events"
                className="inline-flex items-center text-sm font-medium text-cosmic-purple hover:underline"
              >
                View All Events
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/20 via-cosmic-blue/20 to-cosmic-purple/20 -z-10" />
          
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple text-xs font-medium mb-4">
              <Rocket className="h-3 w-3 mr-1" /> JOIN OUR COMMUNITY
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Launch Your Tech Journey?
            </h2>
            
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
              Become a member of CSI GMRIT Chapter and gain access to exclusive events, 
              workshops, networking opportunities, and resources to accelerate your growth.
            </p>
            
            <Link
              to="/signup"
              className="px-8 py-3 rounded-full bg-cosmic-purple text-white shadow-lg hover:shadow-cosmic-hover hover:bg-cosmic-purple/90 transition-all inline-flex items-center"
            >
              Sign Up Now
              <Star className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
