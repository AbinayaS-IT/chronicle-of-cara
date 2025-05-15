
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
      <motion.h1 
        className="fantasy-title mb-6"
        variants={lineVariants}
      >
        Cara's Chronicle
      </motion.h1>
      
      <motion.p 
        className="fantasy-subtitle max-w-2xl mx-auto mb-8"
        variants={lineVariants}
      >
        Welcome, dreamer, to your chronicle of wonders
      </motion.p>
      
      <motion.div 
        className="w-24 h-1 mx-auto bg-fantasy-gold/50 rounded-full mb-8"
        variants={lineVariants}
      />
      
      <motion.p 
        className="text-fantasy-pearl/80 max-w-xl mx-auto leading-relaxed"
        variants={lineVariants}
      >
        Here, amidst the glow of starlit pages and whispers of ancient ink, 
        your journey awaits. Let your imagination flow freely across these enchanted realms.
      </motion.p>
    </motion.div>
  );
};

export default WelcomeMessage;
