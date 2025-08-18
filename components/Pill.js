import { motion } from 'motion/react';
import InteractivePill from '@/components/InteractivePill';

import Flag from './Flag';

const Pill = ({ children, color, searchable = true, searchTerms, searchContext, className, size = 'default', flag }) => {
  const hoverTransition = {
    duration: 0.2,
    ease: "easeOut"
  };

  const sizeStyles = {
    default: 'text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1.5 rounded-full min-h-[32px]',
    badge: 'text-xs px-2.5 py-1 badge badge-lg font-bold'
  };

  return (
    <InteractivePill
      searchable={searchable}
      searchTerms={searchTerms}
      searchContext={searchContext}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
        className={`text-white transition-colors duration-300 flex items-center justify-center ${sizeStyles[size]} ${color} ${className}`}
      >
        {flag && <Flag countryCode={flag} className="mr-2" />}
        {children}
      </motion.div>
    </InteractivePill>
  );
};

export default Pill;
