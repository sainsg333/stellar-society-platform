
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Image, FilePlus, Upload, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const EventUpload: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: '',
    description: '',
    maxParticipants: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfName(e.target.files[0].name);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would upload to a server
    console.log('Form data:', formData);
    console.log('Image and PDF would be uploaded to a storage service');
    
    // Simulate upload delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Event Created Successfully",
        description: "The new event has been published.",
      });
      
      // Reset form
      setFormData({
        title: '',
        date: '',
        category: '',
        description: '',
        maxParticipants: ''
      });
      setImagePreview(null);
      setPdfName(null);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
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
              <Calendar className="h-3 w-3 mr-1" /> ADMIN CONTROLS
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Upload New Event
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Create a new event for CSI GMRIT with all necessary details, 
              images, and resources for participants.
            </p>
          </div>
          
          {/* Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Event Details */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Event Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Event Title</Label>
                      <Input 
                        id="title" 
                        name="title" 
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g., Web Development Workshop"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Event Date</Label>
                      <Input 
                        id="date" 
                        name="date" 
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Event Category</Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Workshop">Workshop</SelectItem>
                          <SelectItem value="Hackathon">Hackathon</SelectItem>
                          <SelectItem value="Seminar">Seminar</SelectItem>
                          <SelectItem value="Competition">Competition</SelectItem>
                          <SelectItem value="Summit">Summit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="maxParticipants">Maximum Participants</Label>
                      <Input 
                        id="maxParticipants" 
                        name="maxParticipants"
                        type="number"
                        value={formData.maxParticipants}
                        onChange={handleInputChange}
                        placeholder="e.g., 100"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Event Description</Label>
                    <Textarea 
                      id="description" 
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Provide a detailed description of the event..."
                      rows={5}
                      required
                    />
                  </div>
                </div>
                
                {/* Media Upload */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Media & Resources</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image Upload */}
                    <div className="space-y-4">
                      <Label htmlFor="eventImage">Event Banner Image</Label>
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-6 bg-muted/30">
                        {imagePreview ? (
                          <div className="relative w-full">
                            <img 
                              src={imagePreview} 
                              alt="Event preview" 
                              className="h-40 w-full object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2"
                              onClick={() => setImagePreview(null)}
                            >
                              Change Image
                            </Button>
                          </div>
                        ) : (
                          <>
                            <Image className="h-10 w-10 text-muted-foreground mb-3" />
                            <p className="text-sm text-muted-foreground text-center mb-3">
                              Drag and drop or click to upload event banner
                            </p>
                            <Input 
                              id="eventImage" 
                              type="file" 
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                            <Button 
                              type="button" 
                              variant="outline"
                              onClick={() => document.getElementById('eventImage')?.click()}
                            >
                              Select Image
                            </Button>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Recommended size: 1200 x 600 pixels. Max file size: 5MB
                      </p>
                    </div>
                    
                    {/* PDF Upload */}
                    <div className="space-y-4">
                      <Label htmlFor="eventPdf">Event PDF Resources</Label>
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-6 bg-muted/30">
                        {pdfName ? (
                          <div className="w-full">
                            <div className="flex items-center p-3 bg-cosmic-purple/10 rounded-lg">
                              <FilePlus className="h-5 w-5 text-cosmic-purple mr-2" />
                              <span className="text-sm font-medium truncate flex-1">{pdfName}</span>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-3"
                              onClick={() => setPdfName(null)}
                            >
                              Change PDF
                            </Button>
                          </div>
                        ) : (
                          <>
                            <FilePlus className="h-10 w-10 text-muted-foreground mb-3" />
                            <p className="text-sm text-muted-foreground text-center mb-3">
                              Upload event details, schedule, or resources as PDF
                            </p>
                            <Input 
                              id="eventPdf" 
                              type="file" 
                              accept=".pdf"
                              onChange={handlePdfChange}
                              className="hidden"
                            />
                            <Button 
                              type="button" 
                              variant="outline"
                              onClick={() => document.getElementById('eventPdf')?.click()}
                            >
                              Select PDF
                            </Button>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Max file size: 10MB. This will be available for participants to download.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? (
                      <>Uploading...</>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Publish Event
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

export default EventUpload;
