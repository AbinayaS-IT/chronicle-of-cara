
import React, { useEffect, useRef } from 'react';

const FloatingSparks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create 20 spark elements
    const createSparks = () => {
      // Clear existing sparks
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        
        // Random positioning
        const left = Math.random() * 100;
        const bottom = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 60 + 30;
        const delay = Math.random() * 10;
        
        spark.style.cssText = `
          position: absolute;
          left: ${left}%;
          bottom: ${bottom}%;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(242, 209, 107, ${Math.random() * 0.3 + 0.2});
          box-shadow: 0 0 ${size * 1.5}px ${size * 0.5}px rgba(242, 209, 107, 0.3);
          animation: float ${duration}s ease-in-out ${delay}s infinite;
          opacity: ${Math.random() * 0.5 + 0.3};
          z-index: 1;
          pointer-events: none;
        `;
        
        container.appendChild(spark);
      }
    };

    createSparks();
    
    // Recreate sparks on window resize
    window.addEventListener('resize', createSparks);
    
    return () => {
      window.removeEventListener('resize', createSparks);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>;
};

export default FloatingSparks;
