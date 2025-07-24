// components/Navbar.jsx (ou là où se trouve votre Navbar)
"use client";

// Importez NavbarItem et motion
import { motion } from "motion/react";
import NavbarItem from './NavbarItem'; // Assurez-vous que le chemin est correct

export default function Navbar() {
    const handleItemClick = (itemName) => {
        console.log(`${itemName} a été cliqué !`);
        // Ici, vous pouvez ajouter la logique de navigation (e.g., router.push('/projects'))
    };

    return (
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-3 flex gap-4 items-center"
      >
        {/* Utilisez plusieurs instances de NavbarItem */}
        <NavbarItem text="Home" icon="" onClick={() => handleItemClick('Home')} />
        <NavbarItem text="Projects" icon="" onClick={() => handleItemClick('Projects')} />
        <NavbarItem text="Skills" icon="" onClick={() => handleItemClick('Skills')} />
        <NavbarItem text="Contact" icon="" onClick={() => handleItemClick('Contact')} />
        {/* Vous pouvez ajouter d'autres items ici */}
      </div>
  );
}