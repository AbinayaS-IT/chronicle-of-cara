
import React, { useEffect, useState } from 'react';
import RomanticBackground from '@/components/RomanticBackground';
import ScrollParchment from '@/components/ScrollParchment';
import ModuleCard from '@/components/ModuleCard';
import WelcomeMessage from '@/components/WelcomeMessage';
import FallingRosePetals from '@/components/FallingRosePetals';
import { Book, CalendarDays, Award, PenTool, Moon, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const { toast } = useToast();
  
  // Sound effects
  useEffect(() => {
    // Show a welcome toast when the page loads
    setTimeout(() => {
      toast({
        title: "A Love Story Begins",
        description: "Your romantic journey awaits...",
        className: "bg-velvet-purple/90 border border-amber-gold/40 text-pearl-silver font-serif",
      });
    }, 2000);
  }, [toast]);

  // Handle audio toggle
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    
    // In a full implementation, we would initialize audio here
    toast({
      title: audioEnabled ? "Sounds Muted" : "Sounds Enchanted",
      description: audioEnabled ? "The melody falls silent." : "Romantic melodies now accompany your journey.",
      className: "bg-velvet-purple/90 border border-amber-gold/40 text-pearl-silver font-serif",
    });
  };

  // Module data
  const modules = [
    {
      title: "Writer's Studio",
      description: "Where your tales and stories come to life, guided by the magic of inspiration.",
      icon: PenTool,
      hoverText: "Craft your heart's tales",
      href: "/writers-studio"
    },
    {
      title: "Diary & Notes",
      description: "Capture your thoughts and memories within these enchanted pages.",
      icon: Moon,
      hoverText: "Preserve your memories",
      href: "/diary"
    },
    {
      title: "Daily Planner",
      description: "Chart the course of your days with the wisdom of the stars.",
      icon: CalendarDays,
      hoverText: "Chart your course",
      href: "/planner"
    },
    {
      title: "Health Tracker",
      description: "Tend to your wellbeing with potions and rituals for vitality.",
      icon: Heart,
      hoverText: "Brew your vitality",
      href: "/health"
    },
    {
      title: "Study Planner",
      description: "Uncover ancient knowledge and master the arcane arts of learning.",
      icon: Book,
      hoverText: "Master the arcane",
      href: "/study"
    },
    {
      title: "Goals & Achievements",
      description: "Record your triumphs and the quests that lie ahead in your journey.",
      icon: Award,
      hoverText: "Record your triumphs",
      href: "/achievements"
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background elements */}
      <RomanticBackground />
      <FallingRosePetals />
      
      {/* Main content */}
      <div className="container py-8 md:py-12 px-4 relative z-10">
        <ScrollParchment>
          {/* Welcome message */}
          <WelcomeMessage />
          
          {/* Module cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                hoverText={module.hoverText}
                delay={300 + index * 150}
              />
            ))}
          </div>
          
          {/* Footer */}
          <div className="text-center mt-12 text-pearl-silver/70 flex items-center justify-center gap-4">
            <button 
              onClick={toggleAudio}
              className="text-sm flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-velvet-purple/40 hover:bg-velvet-purple/60
                        border border-amber-gold/30 transition-all"
              aria-label={audioEnabled ? "Mute Sounds" : "Enable Sounds"}
            >
              <span className={`w-3 h-3 rounded-full ${audioEnabled ? 'bg-amber-gold' : 'bg-white/50'}`}></span>
              {audioEnabled ? 'Mute Melody' : 'Enable Melody'}
            </button>
          </div>
        </ScrollParchment>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwQzUwIDAgMTAwIDUwIDEwMCAxMDBINTBDNTAgNTAgNTAgMCAwIDBaIiBmaWxsPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDNTAgMCAwIDUwIDAgMTAwSDUwQzUwIDUwIDUwIDAgMTAwIDBaIiBmaWxsPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxMDBDNTAgMTAwIDEwMCA1MCAxMDAgMEg1MEM1MCA1MCA1MCAxMDAgMCAxMDBaIiBmaWxsPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDEwMEM1MCAxMDAgMCA1MCAwIDBINTBDNTAgNTAgNTAgMTAwIDEwMCAxMDBaIiBmaWxsPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKSIvPjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
};

export default Index;
