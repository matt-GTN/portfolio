"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = ({ className = "", isCardActive = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  const handleLanguageChange = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLanguageChange();
    }
  };

  return (
    <motion.div
      className={`fixed bottom-8 left-8 z-50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isCardActive && isMobile ? 0 : 1, 
        y: isCardActive && isMobile ? 40 : 0 
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.label 
        className="swap swap-rotate btn btn-circle btn-ghost bg-white/20 backdrop-blur-xs border border-white/10 shadow-lg hover:bg-white/30 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={hoverTransition}
      >
        {/* Hidden checkbox that controls the swap state */}
        <input 
          type="checkbox" 
          checked={language === 'en'}
          onChange={handleLanguageChange}
          onKeyDown={handleKeyDown}
          className="sr-only"
          aria-label={language === 'fr' ? "Changer la langue en anglais" : "Switch language to French"}
        />
        
        {/* French flag - visible when language is 'fr' (checkbox unchecked) */}
        <div className="swap-off text-2xl">
          <img src="https://flagcdn.com/fr.svg" width="24" alt="France flag"></img>
        </div>
        
        {/* English flag - visible when language is 'en' (checkbox checked) */}
        <div className="swap-on text-2xl">
          <img src="https://flagcdn.com/us.svg" width="24" alt="France flag"></img>
        </div>
      </motion.label>
    </motion.div>
  );
};

export default LanguageToggle;