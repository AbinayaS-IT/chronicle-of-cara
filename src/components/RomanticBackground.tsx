import React, { useEffect, useRef } from 'react';

const RomanticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const stars: {x: number, y: number, size: number, opacity: number, speed: number}[] = [];
    const fireflies: {x: number, y: number, size: number, opacity: number, speed: number, phase: number}[] = [];
    const STAR_COUNT = 100;
    const FIREFLY_COUNT = 30;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize stars and fireflies
    const initialize = () => {
      stars.length = 0;
      fireflies.length = 0;
      
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.03 + 0.01
        });
      }
      
      for (let i = 0; i < FIREFLY_COUNT; i++) {
        fireflies.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.7) + canvas.height * 0.3, // Bottom 70%
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.3 + 0.3,
          speed: Math.random() * 0.5 + 0.3,
          phase: Math.random() * Math.PI * 2
        });
      }
    };
    
    // Draw lake ripple
    const drawRipples = (time: number) => {
      // Lake is in the bottom part of the screen
      const lakeTop = canvas.height * 0.65;
      
      // Draw lake background
      const lakeGradient = ctx.createLinearGradient(0, lakeTop, 0, canvas.height);
      lakeGradient.addColorStop(0, 'rgba(50, 60, 100, 0.4)');
      lakeGradient.addColorStop(1, 'rgba(20, 30, 70, 0.6)');
      
      ctx.fillStyle = lakeGradient;
      ctx.fillRect(0, lakeTop, canvas.width, canvas.height - lakeTop);
      
      // Draw ripples
      for (let i = 0; i < 5; i++) {
        const rippleSize = (i + 1) * 50 + Math.sin(time * 0.001 + i) * 10;
        const x = canvas.width * 0.5 + Math.sin(time * 0.0005 + i * 0.5) * 100;
        const y = lakeTop + canvas.height * 0.2;
        
        ctx.beginPath();
        ctx.arc(x, y, rippleSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 230, 255, ${0.15 - i * 0.025})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };
    
    // Draw wisteria
    const drawWisteria = () => {
      // Draw a few hanging wisteria branches
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (i * 0.2 + 0.05);
        const length = Math.random() * 150 + 100;
        
        // Draw stem
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, length);
        ctx.strokeStyle = 'rgba(100, 80, 120, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw clusters
        for (let j = 30; j < length; j += 20) {
          const clusterWidth = Math.min(j * 0.3, 40);
          ctx.beginPath();
          ctx.arc(x, j, clusterWidth, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(201, 160, 220, 0.25)';
          ctx.fill();
        }
      }
    };
    
    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw mountains (misty, rose-hued)
      const mountainGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.65);
      mountainGradient.addColorStop(0, '#432C51'); // Velvet purple at top
      mountainGradient.addColorStop(0.5, '#623456'); // Mid tone
      mountainGradient.addColorStop(1, '#D93861'); // Deep blush at horizon
      
      ctx.fillStyle = mountainGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.65);
      
      // Draw mountains
      const mountainY = canvas.height * 0.65;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, mountainY);
        
        for (let x = 0; x <= canvas.width; x += 50) {
          const height = Math.sin(x * (0.002 + i * 0.001) + i) * (70 - i * 20) + (50 - i * 15);
          ctx.lineTo(x, mountainY - height);
        }
        
        ctx.lineTo(canvas.width, mountainY);
        ctx.closePath();
        
        const alpha = 0.15 - i * 0.05;
        ctx.fillStyle = `rgba(150, 100, 140, ${alpha})`;
        ctx.fill();
      }
      
      // Draw lake ripples
      drawRipples(time);
      
      // Draw wisteria
      drawWisteria();
      
      // Draw stars
      stars.forEach((star) => {
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
      
      // Draw fireflies
      fireflies.forEach((firefly, i) => {
        // Update firefly position - make them move in a sin wave pattern
        firefly.x += Math.sin(time * 0.001 + firefly.phase) * firefly.speed;
        firefly.y += (Math.cos(time * 0.002 + firefly.phase) * firefly.speed) * 0.3;
        
        // Keep within bounds
        if (firefly.x < 0) firefly.x = canvas.width;
        if (firefly.x > canvas.width) firefly.x = 0;
        if (firefly.y < canvas.height * 0.3) firefly.y = canvas.height * 0.3;
        if (firefly.y > canvas.height) firefly.y = canvas.height * 0.3;
        
        // Pulsing glow effect
        const glow = Math.sin(time * 0.005 + firefly.phase) * 0.5 + 0.5;
        const size = firefly.size * (0.6 + glow * 0.4);
        
        // Draw firefly glow
        const gradient = ctx.createRadialGradient(
          firefly.x, firefly.y, 0, 
          firefly.x, firefly.y, size * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 150, ${firefly.opacity * glow})`);
        gradient.addColorStop(1, 'rgba(255, 255, 150, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw firefly core
        ctx.fillStyle = `rgba(255, 255, 200, ${0.7 * glow})`;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasSize();
    initialize();
    animate(0);
    
    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      initialize();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
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

export default RomanticBackground;
