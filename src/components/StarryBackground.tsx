
import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const stars: {x: number, y: number, size: number, opacity: number, speed: number}[] = [];
    const COUNT = 100;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize stars
    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.05 + 0.02
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach((star, i) => {
        // Update star position
        star.y += star.speed;
        
        // Reset if star moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Randomize opacity for twinkle effect
        const flickerAmount = Math.random() * 0.15;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity - flickerAmount})`;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasSize();
    initStars();
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      setCanvasSize();
      initStars();
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <div className="starry-background">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
    </div>
  );
};

export default StarryBackground;
