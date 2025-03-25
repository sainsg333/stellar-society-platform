
import React from 'react';
import { Calendar, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  participants: number;
  pdfLink?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  description,
  imageUrl,
  participants,
  pdfLink,
}) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all hover:translate-y-[-5px]">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent z-10 opacity-60" />
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 z-20 flex items-center px-3 py-1 rounded-full bg-cosmic-purple/90 backdrop-blur-sm text-white text-xs font-medium">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{date}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{participants} participants</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {pdfLink && (
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-cosmic-purple/10 hover:text-cosmic-purple transition-colors"
                aria-label="Download PDF"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            
            <Link
              to={`/events/${id}`}
              className="px-3 py-1 rounded-full text-xs bg-cosmic-purple/10 text-cosmic-purple hover:bg-cosmic-purple/20 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
