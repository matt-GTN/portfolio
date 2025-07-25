// components/Navbar.jsx
"use client";

import NavbarItem from './NavbarItem'; // Assurez-vous que le chemin est correct

export default function Navbar() {
    return (
      <div
        className="fixed left-1/2 bottom-30 -translate-x-1/2 z-50 p-3 flex gap-4 items-center"
      >
        {/* Default sizes (iconSize=32, textSizeClass="text-lg") */}
        <NavbarItem text="Me" iconName="User" href="#me" 
          iconColorClass="text-cyan-500"
          iconSize={24} // Larger icon
          textSizeClass="text-md"
        />

        {/* Custom sizes for "Projects" */}
        <NavbarItem text="Projects" iconName="Briefcase" href="#projects"
          iconColorClass="text-orange-500"
          iconSize={24} // Larger icon
          textSizeClass="text-md" // Larger text
        />

        {/* Custom sizes for "Skills" */}
        <NavbarItem text="Skills" iconName="Zap" href="#skills"
          iconColorClass="text-green-500"
          iconSize={24} // Smaller icon
          textSizeClass="text-md" // Smaller text
        />

        {/* Another default item */}
        <NavbarItem text="Contact" iconName="Mail" href="#contact"
          iconColorClass="text-purple-500"
          iconSize={24} // Larger icon
          textSizeClass="text-md" />
      </div>
  );
}