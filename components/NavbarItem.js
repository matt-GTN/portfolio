// components/NavbarItem.jsx
"use client";

import { motion } from "motion/react"; // Changed from "motion/react" for consistency with Navbar
import { Briefcase, Mail, User, Zap, Dices, Sparkles } from 'lucide-react';

const lucideIconMap = { Briefcase, Mail, User, Zap, Dices, Sparkles };

const NavbarItem = ({
  text,
  iconName,
  onClick,
  iconSize = 20,
  textSizeClass = "text-sm",
  iconColor = "#1F2937", // Default: gray-800
  textColor = "#374151", // Default: gray-700
  isInline = false, // New prop to determine layout
}) => {
  const IconComponent = lucideIconMap[iconName];

  if (isInline) {
    // Inline layout for pill-style navbar
    return (
      <div className="flex items-center gap-2 pointer-events-none">
        {IconComponent && <IconComponent size={iconSize} color={iconColor} />}
        <span className={textSizeClass} style={{ color: textColor }}>
          {text}
        </span>
      </div>
    );
  }

  // Original layout (kept for backward compatibility)
  return (
    <motion.div
      onClick={onClick}
      className="flex flex-col items-center gap-2 px-4 py-2 rounded-4xl cursor-pointer 
                 bg-white/10 backdrop-blur-xs shadow-md shadow-black/30 border border-black/0
                 justify-center min-h-20 min-w-36 z-10"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {IconComponent && <IconComponent size={iconSize} color={iconColor} />}
      <span className={textSizeClass} style={{ color: textColor }}>
        {text}
      </span>
    </motion.div>
  );
};

export default NavbarItem;