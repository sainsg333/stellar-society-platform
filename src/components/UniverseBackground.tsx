
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleDelay: number;
}

const UniverseBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const generateStars = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const starCount = Math.floor((containerWidth * containerHeight) / 10000); // Adjust density
      
      starsRef.current = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.9,
        speed: 0.005 + Math.random() * 0.01,
        twinkleSpeed: 0.003 + Math.random() * 0.01,
        twinkleDelay: Math.random() * 100,
      }));
    };
    
    const createStarElements = () => {
      // Clear existing stars
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Create new stars
      starsRef.current.forEach(star => {
        const starElement = document.createElement('div');
        starElement.className = 'star';
        starElement.style.width = `${star.size}px`;
        starElement.style.height = `${star.size}px`;
        starElement.style.left = `${star.x}px`;
        starElement.style.top = `${star.y}px`;
        starElement.style.opacity = `${star.opacity}`;
        starElement.style.animation = `twinkle ${3 + Math.random() * 4}s ease-in-out ${star.twinkleDelay}s infinite`;
        container.appendChild(starElement);
      });
    };
    
    const handleResize = () => {
      generateStars();
      createStarElements();
    };
    
    // Initial creation
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="stars-container">
      {/* Stars will be added here dynamically */}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/30 via-cosmic-purple/20 to-cosmic-blue/30 z-[-1]" />
    </div>
  );
};

export default UniverseBackground;
