// components/NavbarItem.jsx
"use client";

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

    // Inline layout for pill-style navbar
    return (
      <div className="flex items-center gap-2 pointer-events-none">
        {IconComponent && <IconComponent size={iconSize} color={iconColor} />}
        <span className={textSizeClass} style={{ color: textColor }}>
          {text}
        </span>
      </div>
    );
};

export default NavbarItem;