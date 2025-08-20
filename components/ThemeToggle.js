"use client";

import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';

const ThemeToggle = ({ isCardActive = false }) => {
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
  
  const { theme, toggleTheme, isInitialized } = useTheme();

  // Don't render until theme is initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <motion.div
      className={`fixed ${isMobile ? 'bottom-20 left-8' : 'bottom-8 left-24'} z-50`}
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
      <motion.button
        onClick={toggleTheme}
        className={`
          p-3 rounded-full backdrop-blur-xs border shadow-lg cursor-pointer
          transition-all duration-300 w-12 h-12 flex items-center justify-center
          ${isDark 
            ? 'bg-gray-800/20 border-gray-600/20 text-white-600 hover:bg-gray-700/30' 
            : 'bg-white/20 border-white/10 text-yellow-400 hover:bg-white/30'
          }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
