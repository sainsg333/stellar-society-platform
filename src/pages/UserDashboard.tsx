
import React from 'react';
import { CalendarDays, Award, Clock, Trophy, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock user data - in a real app, this would come from an API/backend
const userData = {
  name: "Jane Doe",
  role: "Student",
  eventsAttended: 12,
  upcomingEvents: 3,
  totalPoints: 450,
  badges: ["Web Dev Champion", "Hackathon Finalist", "AI Explorer"],
  recentActivities: [
    { id: 1, event: "Web Development Bootcamp", date: "June 15, 2023", points: 50, performance: "Excellent" },
    { id: 2, event: "AI Workshop", date: "July 3, 2023", points: 35, performance: "Good" },
    { id: 3, event: "Cybersecurity Hackathon", date: "July 22, 2023", points: 75, performance: "Outstanding" },
    { id: 4, event: "Mobile App Development", date: "August 5, 2023", points: 40, performance: "Good" },
  ],
  skillProgress: [
    { skill: "Web Development", progress: 85 },
    { skill: "Data Science", progress: 60 },
    { skill: "Cybersecurity", progress: 75 },
    { skill: "Mobile Development", progress: 45 },
  ]
};

const UserDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Student Dashboard
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Track your performance, events, and achievements in the CSI GMRIT Chapter.
            </p>
          </div>
          
          {/* User Info */}
          <div className="mb-10">
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-cosmic-purple/30 flex items-center justify-center text-4xl font-bold">
                  {userData.name.charAt(0)}
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  <p className="text-muted-foreground">{userData.role}</p>
                </div>
                <div className="ml-auto flex flex-wrap gap-2 mt-4 md:mt-0">
                  {userData.badges.map((badge, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-purple text-xs font-medium rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <CalendarDays className="w-4 h-4 mr-2 text-cosmic-purple" />
                  Events Attended
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userData.eventsAttended}</div>
                <p className="text-xs text-muted-foreground">Total events attended</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-cosmic-purple" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userData.upcomingEvents}</div>
                <p className="text-xs text-muted-foreground">Events you're registered for</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-cosmic-purple" />
                  Total Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userData.totalPoints}</div>
                <p className="text-xs text-muted-foreground">Points earned from events</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2 text-cosmic-purple" />
                  Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userData.badges.length}</div>
                <p className="text-xs text-muted-foreground">Achievement badges earned</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activities */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Event</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Points</th>
                      <th className="text-left p-4 font-medium">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.recentActivities.map((activity) => (
                      <tr key={activity.id} className="border-b last:border-b-0 hover:bg-muted/50">
                        <td className="p-4">{activity.event}</td>
                        <td className="p-4">{activity.date}</td>
                        <td className="p-4">{activity.points}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            activity.performance === 'Outstanding' 
                              ? 'bg-green-100 text-green-800' 
                              : activity.performance === 'Excellent'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {activity.performance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Skills Progress */}
          <div>
            <h3 className="text-xl font-bold mb-4">Skills Progress</h3>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="grid grid-cols-1 gap-6">
                {userData.skillProgress.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.skill}</span>
                      <span className="text-sm font-medium">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;
