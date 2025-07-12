
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Flower, PenTool, Star } from 'lucide-react';

interface RomanticIllustrationProps {
  type: 'rose' | 'quill' | 'book' | 'star';
  className?: string;
}

const RomanticIllustration: React.FC<RomanticIllustrationProps> = ({ type, className = "" }) => {
  // Get the appropriate icon based on type
  const getIcon = () => {
    switch (type) {
      case 'rose': return <Flower size={24} />;
      case 'quill': return <PenTool size={24} />;  // Changed from Quill to PenTool
      case 'book': return <Book size={24} />;
      case 'star': return <Star size={24} />;
      default: return <Star size={24} />;
    }
  };

  return (
    <motion.div 
      className={`absolute pointer-events-auto romantic-illustration ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ 
        scale: [0.95, 1, 0.95], 
        opacity: [0.8, 1, 0.8] 
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
      }}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-amber-gold/10 rounded-full blur-sm"></div>
        <span className="text-amber-gold">{getIcon()}</span>
      </div>
    </motion.div>
  );
};

export default RomanticIllustration;
