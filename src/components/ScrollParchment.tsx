
import React from 'react';

interface ScrollParchmentProps {
  children: React.ReactNode;
}

const ScrollParchment: React.FC<ScrollParchmentProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto animate-unfurl">
      {/* Decorative top scroll */}
      <div className="h-16 md:h-24 bg-fantasy-parchment/40 rounded-t-xl relative overflow-hidden backdrop-blur-sm
                     border-x border-t border-fantasy-gold/30 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-fantasy-gold/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-r border-b border-fantasy-gold/20 rounded-br-3xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-l border-b border-fantasy-gold/20 rounded-bl-3xl"></div>
      </div>
      
      {/* Content area */}
      <div className="bg-fantasy-parchment/30 backdrop-blur-md border-x border-fantasy-gold/30 relative">
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-fantasy-gold/5 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-fantasy-gold/5 to-transparent"></div>
        <div className="py-8 px-6 md:px-12 scroll-content">
          {children}
        </div>
      </div>
      
      {/* Decorative bottom scroll */}
      <div className="h-16 md:h-24 bg-fantasy-parchment/40 rounded-b-xl relative overflow-hidden backdrop-blur-sm
                     border-x border-b border-fantasy-gold/30">
        <div className="absolute inset-0 bg-gradient-to-t from-fantasy-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-r border-t border-fantasy-gold/20 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-fantasy-gold/20 rounded-tl-3xl"></div>
      </div>
      
      {/* Gold scroll handles */}
      <div className="absolute -left-3 top-1/3 bottom-1/3 w-6 bg-gradient-to-r from-fantasy-gold/40 to-fantasy-gold/10 rounded-l-full"></div>
      <div className="absolute -right-3 top-1/3 bottom-1/3 w-6 bg-gradient-to-l from-fantasy-gold/40 to-fantasy-gold/10 rounded-r-full"></div>
    </div>
  );
};

export default ScrollParchment;
