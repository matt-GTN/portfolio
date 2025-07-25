// components/NavbarItem.jsx
"use client";

import { motion } from "motion/react";
import Link from 'next/link';

// Import the Lucide icons you plan to use in your Navbar
import { Home, Settings, Info, Briefcase, Mail, User, Zap } from 'lucide-react';

// Create a mapping object for easy lookup
const lucideIconMap = {
  Home: Home,
  Settings: Settings,
  Info: Info,
  Briefcase: Briefcase,
  Mail: Mail,
  User: User,
  Zap: Zap,
  // Add more icons here as you need them
};

// Add iconSize and textSizeClass as props with default values
const NavbarItem = ({
  text,
  iconName,
  href,
  iconSize = 32, // Default icon size in pixels
  textSizeClass = "text-lg",
  iconColorClass = "text-black"
}) => {
  const IconComponent = lucideIconMap[iconName];

  return (
    <Link href={href}>
      <motion.div
        className="flex flex-col items-center gap-2 px-4 py-2 rounded-4xl cursor-pointer whitespace-nowrap
                   bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 border border-white/30
                   justify-center transition-colors duration-200 hover:text-gray-800 min-h-32 min-w-32"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10
        }}
      >
        {/* Pass the iconSize prop to the Lucide icon */}
        {IconComponent && <IconComponent size={iconSize} className={iconColorClass} />}

        {/* Use the textSizeClass prop for the text span */}
        <span className={`${textSizeClass} `}>{text}</span>
      </motion.div>
    </Link>
  );
};

export default NavbarItem;