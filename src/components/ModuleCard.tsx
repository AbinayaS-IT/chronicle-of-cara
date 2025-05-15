
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
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="fantasy-module-card fantasy-gold-border relative group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-fantasy-gold/30 to-fantasy-pearl/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      
      <div className="z-10 flex flex-col items-center w-full">
        <div className="w-16 h-16 mb-4 relative">
          <div className="absolute inset-0 rounded-full bg-fantasy-gold/10 animate-pulse-glow"></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center w-full h-full">
                  <Icon size={32} className="text-fantasy-gold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="font-cursive text-lg bg-fantasy-twilight/80 border border-fantasy-gold/50">
                {hoverText}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <h3 className="font-cursive text-2xl mb-2 text-fantasy-gold">{title}</h3>
        <p className="text-fantasy-pearl/90 text-center">{description}</p>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fantasy-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fantasy-gold/30 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
