
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniverseBackground from '../components/UniverseBackground';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error
    setError(null);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    // Simulate signup
    try {
      setIsLoading(true);
      
      // In a real application, you would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo, just console log
      console.log('Signup attempt with:', { name: formData.name, email: formData.email });
      
      // Redirect would happen here after successful signup
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <UniverseBackground />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="glass-effect w-full max-w-md rounded-2xl overflow-hidden shadow-cosmic">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-heading font-bold">Create an Account</h1>
              <p className="text-muted-foreground text-sm mt-2">
                Join the CSI GMRIT community
              </p>
            </div>
            
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 focus:border-cosmic-purple/30"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 focus:border-cosmic-purple/30"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 focus:border-cosmic-purple/30"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters long
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 focus:border-cosmic-purple/30"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-4 py-2 rounded-lg bg-cosmic-purple text-white flex items-center justify-center transition-all ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-cosmic-purple/90 shadow-sm hover:shadow-cosmic'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Create Account
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-cosmic-purple font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
