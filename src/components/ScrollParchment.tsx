
import React from 'react';

interface ScrollParchmentProps {
  children: React.ReactNode;
}

const ScrollParchment: React.FC<ScrollParchmentProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto animate-unfurl">
      {/* Decorative top scroll */}
      <div className="h-16 md:h-24 bg-cream-parchment/40 rounded-t-xl relative overflow-hidden backdrop-blur-sm
                     border-x border-t border-amber-gold/40 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-gold/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-r border-b border-amber-gold/30 rounded-br-3xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-l border-b border-amber-gold/30 rounded-bl-3xl"></div>
      </div>
      
      {/* Content area */}
      <div className="bg-cream-parchment/30 backdrop-blur-md border-x border-amber-gold/40 relative">
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-amber-gold/10 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-amber-gold/10 to-transparent"></div>
        <div className="py-8 px-6 md:px-12 scroll-content">
          {children}
        </div>
      </div>
      
      {/* Decorative bottom scroll */}
      <div className="h-16 md:h-24 bg-cream-parchment/40 rounded-b-xl relative overflow-hidden backdrop-blur-sm
                     border-x border-b border-amber-gold/40">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-r border-t border-amber-gold/30 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-amber-gold/30 rounded-tl-3xl"></div>
      </div>
      
      {/* Gold scroll handles */}
      <div className="absolute -left-3 top-1/3 bottom-1/3 w-6 bg-gradient-to-r from-amber-gold/50 to-amber-gold/20 rounded-l-full"></div>
      <div className="absolute -right-3 top-1/3 bottom-1/3 w-6 bg-gradient-to-l from-amber-gold/50 to-amber-gold/20 rounded-r-full"></div>
    </div>
  );
};

export default ScrollParchment;
