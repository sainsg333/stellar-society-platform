
import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';

type MemberType = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  department?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  bio?: string;
};

const Team: React.FC = () => {
  // Mock data for team members
  const facultyCoordinators: MemberType[] = [
    {
      id: 'f1',
      name: 'Dr. Arun Kumar',
      role: 'Faculty Coordinator',
      department: 'Computer Science',
      imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3',
      email: 'arun.kumar@example.com',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Dr. Arun Kumar has over 15 years of experience in teaching and research in computer science.'
    },
    {
      id: 'f2',
      name: 'Dr. Priya Sharma',
      role: 'Faculty Co-Coordinator',
      department: 'Information Technology',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3',
      email: 'priya.sharma@example.com',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Dr. Priya Sharma specializes in data science and artificial intelligence with numerous publications.'
    },
  ];
  
  const studentCoordinators: MemberType[] = [
    {
      id: 's1',
      name: 'Rahul Gupta',
      role: 'Student Coordinator',
      department: 'Computer Science, 4th Year',
      imageUrl: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3',
      email: 'rahul.gupta@example.com',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      website: 'https://example.com',
      bio: 'Passionate about full-stack development and cloud computing.'
    },
    {
      id: 's2',
      name: 'Aishwarya Patel',
      role: 'Student Co-Coordinator',
      department: 'Information Technology, 4th Year',
      imageUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3',
      email: 'aishwarya.patel@example.com',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Interested in AI and machine learning. Has worked on several ML projects.'
    },
  ];
  
  const coreTeamMembers: MemberType[] = [
    {
      id: 'c1',
      name: 'Vikram Singh',
      role: 'Technical Lead',
      department: 'Computer Science, 3rd Year',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Full-stack developer with expertise in React and Node.js.'
    },
    {
      id: 'c2',
      name: 'Neha Reddy',
      role: 'Design Lead',
      department: 'Information Technology, 3rd Year',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'UI/UX designer with a passion for creating intuitive interfaces.'
    },
    {
      id: 'c3',
      name: 'Arjun Mehta',
      role: 'Event Coordinator',
      department: 'Computer Science, 3rd Year',
      imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Organized multiple technical events and workshops.'
    },
    {
      id: 'c4',
      name: 'Kritika Joshi',
      role: 'Content Lead',
      department: 'Information Technology, 2nd Year',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Creative writer and content creator for technical platforms.'
    },
    {
      id: 'c5',
      name: 'Siddharth Roy',
      role: 'Marketing Lead',
      department: 'Computer Science, 2nd Year',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Skilled in digital marketing and social media management.'
    },
    {
      id: 'c6',
      name: 'Kavya Sharma',
      role: 'Outreach Coordinator',
      department: 'Information Technology, 2nd Year',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/in/',
      bio: 'Focused on building partnerships with other technical communities.'
    },
  ];

  // Function to render a member card
  const MemberCard = ({ member, isLarge = false }: { member: MemberType, isLarge?: boolean }) => (
    <div className={`glass-effect rounded-xl overflow-hidden transition-all hover:shadow-cosmic ${isLarge ? 'md:col-span-2' : ''}`}>
      <div className={`flex flex-col ${isLarge ? 'md:flex-row' : ''}`}>
        <div className={`${isLarge ? 'md:w-1/3' : 'w-full'}`}>
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className={`w-full h-64 object-cover object-center ${isLarge ? 'md:h-full' : ''}`}
          />
        </div>
        
        <div className={`p-6 ${isLarge ? 'md:w-2/3' : 'w-full'}`}>
          <h3 className="text-xl font-heading font-bold">{member.name}</h3>
          <p className="text-cosmic-purple font-medium mb-1">{member.role}</p>
          {member.department && (
            <p className="text-sm text-muted-foreground mb-3">{member.department}</p>
          )}
          
          {member.bio && (
            <p className="text-sm mb-4">{member.bio}</p>
          )}
          
          <div className="flex space-x-3 mt-auto">
            {member.email && (
              <a 
                href={`mailto:${member.email}`} 
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            
            {member.github && (
              <a 
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label={`GitHub profile of ${member.name}`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            
            {member.linkedin && (
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            
            {member.website && (
              <a 
                href={member.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label={`Website of ${member.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Meet Our Team
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              The dedicated members who make CSI GMRIT Chapter a vibrant and innovative community.
            </p>
          </div>
          
          {/* Faculty Coordinators */}
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
              Faculty Coordinators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facultyCoordinators.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
          
          {/* Student Coordinators */}
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
              Student Coordinators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studentCoordinators.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
          
          {/* Core Team */}
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
              Core Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeamMembers.map((member, index) => (
                <MemberCard 
                  key={member.id} 
                  member={member} 
                  isLarge={index === 0 && coreTeamMembers.length % 3 === 1} 
                />
              ))}
            </div>
          </section>
          
          {/* Join the Team CTA */}
          <section className="mt-20 text-center">
            <div className="glass-effect inline-block px-8 py-6 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-heading font-semibold mb-3">Join Our Team</h3>
              <p className="text-muted-foreground mb-4">
                Interested in being part of CSI GMRIT Chapter? We're always looking for passionate individuals to join our team.
              </p>
              <button className="px-5 py-2.5 rounded-full bg-cosmic-purple text-white shadow-sm hover:shadow-cosmic hover:bg-cosmic-purple/90 transition-all">
                Apply Now
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
