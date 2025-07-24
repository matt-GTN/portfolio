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
        className="fixed left-1/2 bottom-30 -translate-x-1/2 z-50 p-3 flex gap-4 items-center"
      >
        {/* Utilisez plusieurs instances de NavbarItem */}
        <NavbarItem text="Me" icon="" href="#me" /> {/* Ajoutez des icônes pour chaque item */}
        <NavbarItem text="Projects" icon="" href="#projects" />
        <NavbarItem text="Skills" icon="" href="#skills" />
        <NavbarItem text="Contact" icon="" href="#contact" />
      </div>

  );
}