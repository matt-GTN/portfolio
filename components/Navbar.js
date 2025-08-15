// components/Navbar.jsx
"use client";

import { motion } from "framer-motion";
import NavbarItem from './NavbarItem';

// CHANGED: The data now includes color properties for each item
const navItems = [
  { text: "Me", displayText: "Me", iconName: "User", iconColor: "#3b82f6", textColor: "#000000ff" }, // Blue
  { text: "Projects", displayText: "Projects", iconName: "Briefcase", iconColor: "#8b5cf6", textColor: "#000000ff" }, // Violet
  { text: "Skills", displayText: "Skills", iconName: "Zap", iconColor: "#f59e0b", textColor: "#000000ff" }, // Amber
  { text: "BeyondCode", displayText: "Beyond Code", iconName: "Sparkles", iconColor: "#03d11eff", textColor: "#000000ff" }, // Green
  { text: "Contact", displayText: "Contact", iconName: "Mail", iconColor: "#ed5cebff", textColor: "#000000ff" }, // Red
];

export default function Navbar({ onItemClick, isCardActive }) {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-3 flex gap-4 items-center"
      animate={{
        y: isCardActive ? "200%" : "0%",
        opacity: isCardActive ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {navItems.map((item) => (
        <NavbarItem
          key={item.text}
          text={item.displayText}
          iconName={item.iconName}
          // ADDED: Pass the color props from our data object down to the item
          iconColor={item.iconColor}
          textColor={item.textColor}
          onClick={() => onItemClick(item.text)}
        />
      ))}
    </motion.div>
  );
}