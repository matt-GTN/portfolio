// components/NavbarItem.jsx
"use client";

import { motion } from "motion/react"; // Changed from "motion/react" for consistency with Navbar
import { Briefcase, Mail, User, Zap, Dices } from 'lucide-react';

const lucideIconMap = { Briefcase, Mail, User, Zap, Dices };

const NavbarItem = ({
  text,
  iconName,
  onClick,
  iconSize = 24,
  textSizeClass = "text-md",
  // ADDED: Accept color props with sensible defaults
  iconColor = "#1F2937", // Default: gray-800
  textColor = "#374151", // Default: gray-700
}) => {
  const IconComponent = lucideIconMap[iconName];

  return (
    <motion.div
      onClick={onClick}
      className="flex flex-col items-center gap-2 px-4 py-2 rounded-2xl cursor-pointer 
                 bg-white/10 backdrop-blur-lg shadow-sm shadow-black/30 
                 border border-black/20
                 justify-center min-h-24 min-w-36 z-10" // REMOVED: text-black-500
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* CHANGED: Pass the iconColor prop to the icon component */}
      {IconComponent && <IconComponent size={iconSize} color={iconColor} />}
      
      {/* CHANGED: Apply the textColor prop via an inline style */}
      <span className={textSizeClass} style={{ color: textColor }}>
        {text}
      </span>
    </motion.div>
  );
};

export default NavbarItem;