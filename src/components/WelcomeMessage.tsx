
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // The welcome message animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };
  
  const lineVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div 
      className="text-center mb-12 px-4"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={messageVariants}
    >
      <div className="romantic-ribbon">
        <motion.h1 
          className="ribbon-text"
          variants={lineVariants}
          style={{animationDelay: "0.5s"}}
        >
          Cara's Chronicle
        </motion.h1>
        
        <motion.p 
          className="font-parisienne text-xl md:text-2xl mt-2 text-pearl-silver/80"
          variants={lineVariants}
          style={{animationDelay: "0.8s"}}
        >
          Where Dreams Whisper Love
        </motion.p>
      </div>
      
      <motion.div 
        className="w-32 h-1 mx-auto bg-amber-gold/50 rounded-full mb-8"
        variants={lineVariants}
      />
      
      <motion.p 
        className="text-pearl-silver/80 max-w-xl mx-auto leading-relaxed font-serif text-lg"
        variants={lineVariants}
      >
        Here, amidst the glow of moonlit gardens and whispers of gentle breezes, 
        your heart's journey awaits. Let your dreams flow freely across these enchanted realms.
      </motion.p>
    </motion.div>
  );
};

export default WelcomeMessage;
