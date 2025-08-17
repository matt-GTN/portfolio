// components/CallToActionButton.js
"use client";

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CallToActionButton = ({
  onContactClick,
  className = ''
}) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30, // Delay to appear after typewriter
      }}
      className={className}
    >
      <motion.button
        onClick={() => onContactClick('Contact')}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg backdrop-blur-lg border border-white/10"
      >
        {/* Status indicator */}
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
        </div>

        {/* Icon */}
        <div className="flex-shrink-0">
          <MessageCircle size={20} />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold">{t('common.cta')}</span>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default CallToActionButton;