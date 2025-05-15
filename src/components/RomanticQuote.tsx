
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface RomanticQuoteProps {
  text: string;
  className?: string;
}

const RomanticQuote: React.FC<RomanticQuoteProps> = ({ text, className = "" }) => {
  return (
    <motion.div 
      className={`romantic-quote ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: Math.random() * 0.5 }}
    >
      <div className="relative p-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-cream-parchment/30 backdrop-blur-sm rounded-lg border border-amber-gold/30"></div>
        <Quote size={16} className="text-amber-gold/60 absolute top-2 left-2" />
        <p className="font-parisienne text-base md:text-lg text-rich-burgundy pt-5 px-2 relative z-10">
          {text}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-gold/40 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default RomanticQuote;
