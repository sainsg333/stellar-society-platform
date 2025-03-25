
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, FileUp, FileSpreadsheet, Calendar, BarChart3, 
  PlusCircle, Search, Download
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Mock coordinator data
const coordinatorData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@gmail.com",
    role: "Student Coordinator",
    eventsOrganized: 5,
    participation: 120,
    lastEvent: "Web Development Bootcamp",
    lastEventDate: "June 15, 2023"
  },
  {
    id: 2,
    name: "Emily Johnson",
    email: "emily.j@gmail.com",
    role: "Student Coordinator",
    eventsOrganized: 3,
    participation: 85,
    lastEvent: "AI Workshop",
    lastEventDate: "July 3, 2023"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.b@gmail.com",
    role: "Student Coordinator",
    eventsOrganized: 2,
    participation: 64,
    lastEvent: "Cybersecurity Hackathon",
    lastEventDate: "July 22, 2023"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.w@gmail.com",
    role: "Student Coordinator",
    eventsOrganized: 4,
    participation: 92,
    lastEvent: "Mobile App Development",
    lastEventDate: "August 5, 2023"
  }
];

// Mock event statistics
const eventStats = {
  totalEvents: 14,
  upcomingEvents: 3,
  totalParticipants: 850,
  averageAttendance: 60
};

const AdminDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter coordinators based on search term
  const filteredCoordinators = coordinatorData.filter(coordinator => 
    coordinator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coordinator.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coordinator.lastEvent.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Manage events, coordinators, and user data
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link to="/admin/event-upload">
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload Event
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/admin/excel-upload">
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    Upload Excel
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/events">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Events
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{eventStats.totalEvents}</div>
                <p className="text-xs text-muted-foreground">Events organized to date</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{eventStats.upcomingEvents}</div>
                <p className="text-xs text-muted-foreground">Scheduled in the next month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{eventStats.totalParticipants}</div>
                <p className="text-xs text-muted-foreground">Across all events</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Avg. Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{eventStats.averageAttendance}</div>
                <p className="text-xs text-muted-foreground">Per event</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Student Coordinators Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Student Coordinators</h2>
              <div className="flex items-center mt-4 md:mt-0">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <Input
                  type="text"
                  placeholder="Search coordinators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-60"
                />
              </div>
            </div>
            
            <div className="rounded-xl shadow-sm overflow-hidden bg-card">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Events Organized</TableHead>
                      <TableHead className="hidden md:table-cell">Participation</TableHead>
                      <TableHead className="hidden md:table-cell">Last Event</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCoordinators.map((coordinator) => (
                      <TableRow key={coordinator.id}>
                        <TableCell>
                          <div className="font-medium">{coordinator.name}</div>
                          <div className="text-sm text-muted-foreground">{coordinator.email}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{coordinator.eventsOrganized}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {coordinator.participation} attendees
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div>{coordinator.lastEvent}</div>
                          <div className="text-sm text-muted-foreground">{coordinator.lastEventDate}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <BarChart3 className="h-4 w-4" />
                            <span className="sr-only">View details</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4 text-cosmic-purple" />
                    Create New Event
                  </CardTitle>
                  <CardDescription>
                    Add details for an upcoming event
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/admin/event-upload">
                      Create Event
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileSpreadsheet className="mr-2 h-4 w-4 text-cosmic-purple" />
                    Upload Performance Data
                  </CardTitle>
                  <CardDescription>
                    Update student performances via Excel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/admin/excel-upload">
                      Upload Excel
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Download className="mr-2 h-4 w-4 text-cosmic-purple" />
                    Export Reports
                  </CardTitle>
                  <CardDescription>
                    Generate reports on events and performances
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Export Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
