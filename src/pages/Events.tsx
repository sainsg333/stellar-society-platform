
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Download, Filter, Search, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import EventCard from '../components/EventCard';

type EventType = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  participants: number;
  category?: string;
  pdfLink?: string;
};

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Mock data for events - in a real app this would come from an API
  const allEvents: EventType[] = [
    {
      id: '1',
      title: 'Web Development Bootcamp',
      date: 'June 15, 2023',
      description: 'A comprehensive bootcamp covering modern web development technologies including React, Node.js, and more.',
      imageUrl: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3',
      participants: 120,
      category: 'Workshop',
      pdfLink: '#',
    },
    {
      id: '2',
      title: 'AI & Machine Learning Workshop',
      date: 'July 3, 2023',
      description: 'Explore the fundamentals of AI and machine learning with hands-on exercises and real-world applications.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3',
      participants: 85,
      category: 'Workshop',
    },
    {
      id: '3',
      title: 'Cybersecurity Hackathon',
      date: 'July 22, 2023',
      description: 'Test your cybersecurity skills in a competitive environment while learning about the latest security threats.',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3',
      participants: 64,
      category: 'Hackathon',
      pdfLink: '#',
    },
    {
      id: '4',
      title: 'Mobile App Development Seminar',
      date: 'August 5, 2023',
      description: 'Learn about the latest trends in mobile app development and how to build cross-platform applications.',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3',
      participants: 92,
      category: 'Seminar',
      pdfLink: '#',
    },
    {
      id: '5',
      title: 'Competitive Programming Contest',
      date: 'August 18, 2023',
      description: 'Sharpen your algorithmic skills in this fast-paced programming competition with exciting prizes.',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3',
      participants: 78,
      category: 'Competition',
    },
    {
      id: '6',
      title: 'Data Science Summit',
      date: 'September 10, 2023',
      description: 'Join industry experts for a deep dive into data science, analytics, and visualization techniques.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      participants: 110,
      category: 'Summit',
      pdfLink: '#',
    },
  ];
  
  // Event categories for filtering
  const categories = Array.from(new Set(allEvents.map(event => event.category))).filter(Boolean) as string[];
  
  // Filter events based on search and category
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple text-xs font-medium mb-4">
              <Calendar className="h-3 w-3 mr-1" /> EXPLORE OUR EVENTS
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              CSI GMRIT Events
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Discover workshops, hackathons, competitions, and more organized by the CSI GMRIT Chapter.
              Expand your knowledge and network with like-minded tech enthusiasts.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 focus:border-cosmic-purple/30"
              />
            </div>
            
            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="appearance-none pl-10 pr-8 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 focus:border-cosmic-purple/30"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-3 py-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
          
          {/* Events count */}
          <div className="flex items-center mb-6 text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            <span>Showing {filteredEvents.length} events</span>
          </div>
          
          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredEvents.map((event) => (
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
          ) : (
            <div className="py-16 text-center">
              <div className="inline-block p-6 rounded-full bg-muted mb-4">
                <Calendar className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
                className="px-4 py-2 rounded-md bg-cosmic-purple text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Download Calendar */}
          <div className="mt-16 text-center">
            <div className="glass-effect inline-block px-8 py-6 rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Never miss an event! Download our event calendar and subscribe for updates.
              </p>
              <button className="px-5 py-2.5 rounded-full bg-cosmic-purple text-white shadow-sm hover:shadow-cosmic hover:bg-cosmic-purple/90 transition-all inline-flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download Calendar
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
