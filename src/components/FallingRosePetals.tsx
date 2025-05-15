
import React, { useEffect, useState } from 'react';

const FallingRosePetals: React.FC = () => {
  const [petals, setPetals] = useState<Array<{id: number, left: string, size: number, delay: number, duration: number}>>([]);
  
  useEffect(() => {
    // Create petals
    const petalCount = 20;
    const newPetals = [];
    
    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 10 + 10, // 10-20px
        delay: Math.random() * 10,
        duration: Math.random() * 5 + 8 // 8-13s
      });
    }
    
    setPetals(newPetals);
  }, []);
  
  return (
    <div className="falling-petals">
      {petals.map(petal => (
        <div 
          key={petal.id}
          className="absolute opacity-0"
          style={{
            left: petal.left,
            top: '-20px',
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            animation: `fall ${petal.duration}s linear ${petal.delay}s infinite`,
            background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' viewBox=\'0 0 30 36\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M15 3C20 8 25 18 15 33C5 18 10 8 15 3Z\' fill=\'%23F5C4D180\' /%3E%3C/svg%3E")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            transformOrigin: 'center',
          }}
        />
      ))}
    </div>
  );
};

export default FallingRosePetals;
