
import React, { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  hoverText: string;
  delay: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  hoverText, 
  delay 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="love-letter-card romantic-gold-border relative group cursor-pointer"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="lace-border bg-lace-pattern bg-repeat-space" />
      
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-gold/20 to-pearl-silver/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      
      <div 
        className={`z-10 flex flex-col items-center w-full transition-all duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backfaceVisibility: 'hidden',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div className="romantic-icon relative">
          <div className="absolute inset-0 rounded-full bg-amber-gold/10 animate-pulse-glow"></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center w-full h-full relative">
                  <div className="absolute -inset-4 bg-amber-gold/5 rounded-full animate-pulse-glow"></div>
                  <Icon size={32} className="text-amber-gold drop-shadow-md" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="font-parisienne text-lg bg-velvet-purple/90 border border-amber-gold/50">
                {hoverText}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <h3 className="font-playfair text-2xl font-bold mb-2 text-rich-burgundy">{title}</h3>
        <p className="text-charcoal-black/90 text-center font-serif">{description}</p>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-gold/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-gold/40 to-transparent"></div>
      </div>
      
      {/* Card back */}
      <div 
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center w-full p-6 transition-all duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backfaceVisibility: 'hidden',
          transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)'
        }}
      >
        <p className="font-parisienne text-3xl text-deep-blush mb-4">{hoverText}</p>
        <p className="text-charcoal-black/90 text-center font-serif italic">
          Discover the magic within your {title.toLowerCase()}, where every moment becomes a cherished memory in your personal journey.
        </p>
        <div className="mt-4 text-amber-gold/70">
          <span className="text-sm">Click to return</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
