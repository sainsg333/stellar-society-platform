
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileSpreadsheet, Upload, ChevronLeft, Check, AlertCircle, Users, File } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ExcelUpload: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [previewData, setPreviewData] = useState<any[] | null>(null);
  
  // Mock events for selection
  const events = [
    { id: '1', name: 'Web Development Bootcamp', date: 'June 15, 2023' },
    { id: '2', name: 'AI & Machine Learning Workshop', date: 'July 3, 2023' },
    { id: '3', name: 'Cybersecurity Hackathon', date: 'July 22, 2023' },
    { id: '4', name: 'Mobile App Development Seminar', date: 'August 5, 2023' },
  ];
  
  // Mock data for preview table
  const mockExcelData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', studentId: 'CS210001', score: 85, performance: 'Excellent' },
    { id: 2, name: 'Emma Wilson', email: 'emma.w@example.com', studentId: 'CS210042', score: 92, performance: 'Outstanding' },
    { id: 3, name: 'Michael Brown', email: 'michael.b@example.com', studentId: 'CS210078', score: 78, performance: 'Good' },
    { id: 4, name: 'Sophia Garcia', email: 'sophia.g@example.com', studentId: 'CS210109', score: 65, performance: 'Satisfactory' },
    { id: 5, name: 'Daniel Lee', email: 'daniel.l@example.com', studentId: 'CS210231', score: 90, performance: 'Excellent' },
  ];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      
      // Mock file processing
      // In a real app, this would parse the Excel file
      setPreviewData(mockExcelData);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedEvent) {
      toast({
        title: "Event Required",
        description: "Please select an event for this data.",
        variant: "destructive"
      });
      return;
    }
    
    if (!fileName) {
      toast({
        title: "File Required",
        description: "Please upload an Excel file.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    setUploadProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    
    // Simulate upload delay
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Upload Successful",
          description: `Data from ${fileName} has been processed for ${events.find(e => e.id === selectedEvent)?.name}.`,
        });
        
        // Reset form after success
        setFileName(null);
        setPreviewData(null);
        setSelectedEvent('');
        setUploadProgress(0);
      }, 500);
    }, 3000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container max-w-5xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link to="/admin">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple text-xs font-medium mb-4">
              <FileSpreadsheet className="h-3 w-3 mr-1" /> ADMIN TOOLS
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Excel Data Upload
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Upload student performance data via Excel spreadsheets. 
              This will update student dashboards with their event scores and achievements.
            </p>
          </div>
          
          {/* Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Upload Details */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Upload Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="event" className="block text-sm font-medium">
                        Select Event
                      </label>
                      <Select 
                        value={selectedEvent} 
                        onValueChange={setSelectedEvent}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an event" />
                        </SelectTrigger>
                        <SelectContent>
                          {events.map(event => (
                            <SelectItem key={event.id} value={event.id}>
                              {event.name} ({event.date})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground mt-1">
                        The data will be associated with this event
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="excelFile" className="block text-sm font-medium">
                        Excel File
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex items-center border rounded-md px-3 py-2 bg-muted/20">
                            <FileSpreadsheet className="h-4 w-4 text-muted-foreground mr-2" />
                            <span className="text-sm truncate">
                              {fileName || "No file selected"}
                            </span>
                          </div>
                        </div>
                        <Input 
                          id="excelFile" 
                          type="file" 
                          accept=".xlsx,.xls,.csv"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => document.getElementById('excelFile')?.click()}
                        >
                          Browse
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Accepted formats: .xlsx, .xls, .csv
                      </p>
                    </div>
                  </div>
                  
                  {/* Template Instructions */}
                  <div className="bg-muted/20 rounded-lg p-4 border border-border">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">Excel Template Instructions</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Please ensure your Excel file follows the required format with the following columns:
                        </p>
                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                          <li>Student Name</li>
                          <li>Email Address</li>
                          <li>Student ID</li>
                          <li>Score/Points</li>
                          <li>Performance Rating</li>
                        </ul>
                        <div className="mt-3">
                          <Button variant="outline" size="sm">
                            <File className="h-3.5 w-3.5 mr-1.5" />
                            Download Template
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Data Preview */}
                {previewData && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Data Preview</h2>
                      <Badge variant="outline" className="flex items-center">
                        <Users className="h-3.5 w-3.5 mr-1.5" />
                        {previewData.length} Records
                      </Badge>
                    </div>
                    
                    <div className="rounded-md border overflow-hidden">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Student ID</TableHead>
                              <TableHead>Score</TableHead>
                              <TableHead>Performance</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {previewData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.studentId}</TableCell>
                                <TableCell>{row.score}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className={`
                                    ${row.performance === 'Outstanding' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                                      row.performance === 'Excellent' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 
                                      row.performance === 'Good' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' : 
                                      'bg-gray-100 text-gray-800 hover:bg-gray-100'}
                                  `}>
                                    {row.performance}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Upload Progress */}
                {isSubmitting && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !fileName} 
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : uploadProgress === 100 ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Upload Complete
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Data
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExcelUpload;
