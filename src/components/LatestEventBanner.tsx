
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EventType {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  participants: number;
  category?: string;
  pdfLink?: string;
  featured?: boolean;
}

const LatestEventBanner: React.FC = () => {
  // Mock data for latest events - in a real app this would come from an API
  const latestEvents: EventType[] = [
    {
      id: '7',
      title: 'Generative AI and Future of Tech',
      date: 'May 20, 2023',
      description: 'Join us for a deep dive into Generative AI and its potential to revolutionize various industries. Learn about the latest advancements in AI models like GPT-4, DALL-E, and more.',
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      participants: 150,
      category: 'Workshop',
      featured: true,
      pdfLink: '#',
    },
    {
      id: '8',
      title: 'Blockchain Technology Masterclass',
      date: 'May 25, 2023',
      description: 'An in-depth exploration of blockchain technology, cryptocurrencies, and smart contracts. Perfect for beginners and intermediate developers interested in Web3.',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      participants: 120,
      category: 'Masterclass',
      featured: true,
    },
    {
      id: '9',
      title: 'Cloud Computing Summit',
      date: 'June 5, 2023',
      description: 'Explore the latest trends in cloud computing with experts from leading tech companies. This event covers AWS, Azure, Google Cloud, and more.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      participants: 200,
      category: 'Summit',
      featured: true,
      pdfLink: '#',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-cosmic-purple/5 via-cosmic-blue/5 to-cosmic-purple/5">
      <div className="container mx-auto">
        <div className="flex items-center mb-2">
          <Calendar className="h-5 w-5 text-cosmic-purple mr-2" />
          <h2 className="text-sm font-medium text-cosmic-purple">FEATURED EVENTS</h2>
        </div>
        <h3 className="text-3xl font-heading font-semibold mb-10">Latest Happenings</h3>

        <Carousel className="w-full">
          <CarouselContent>
            {latestEvents.map((event) => (
              <CarouselItem key={event.id} className="md:basis-2/3 lg:basis-1/2">
                <div className="glass-card rounded-2xl overflow-hidden h-full">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Event Image */}
                    <div className="w-full md:w-1/2 relative h-60 md:h-auto">
                      <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 z-20 flex items-center px-3 py-1 rounded-full bg-cosmic-purple/90 backdrop-blur-sm text-white text-xs font-medium">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    
                    {/* Event Details */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-cosmic-purple/10 text-cosmic-purple text-xs rounded-full">
                            {event.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{event.participants} participants</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-medium mb-3">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                      </div>
                      
                      <Link
                        to={`/events/${event.id}`}
                        className="inline-flex items-center px-4 py-2 mt-2 rounded-full bg-cosmic-purple text-white text-sm hover:bg-cosmic-purple/90 transition-colors self-start"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="left-0 bg-background/80 backdrop-blur-sm border-cosmic-purple/20 hover:bg-cosmic-purple hover:text-white" />
            <CarouselNext className="right-0 bg-background/80 backdrop-blur-sm border-cosmic-purple/20 hover:bg-cosmic-purple hover:text-white" />
          </div>
        </Carousel>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="rounded-full border-cosmic-purple/40 hover:bg-cosmic-purple/10 hover:text-cosmic-purple"
            asChild
          >
            <Link to="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestEventBanner;
