// components/NavbarItem.jsx
"use client";

import { motion } from "motion/react";

// Le composant NavbarItem recevra le texte, une icône (optionnel) et une fonction onClick
const NavbarItem = ({ text, icon, onClick }) => {
  return (
    <motion.div
      // Styles pour chaque élément/bouton individuel
      className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap
                 bg-white/20 backdrop-blur-md shadow-md shadow-black/10 border border-white/30
                 transition-colors duration-200 hover:text-gray-800 text-neutral-content" // Ajout de transition de couleur pour un meilleur feedback
      
      // Animations Framer Motion
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }} // Grossit de 5% au survol (plus visible pour un petit élément)
      whileTap={{ scale: 0.95 }}   // Réduit de 5% au clic/tap
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      onClick={onClick} // Gère le clic sur l'élément
    >
      {icon && <span className="text-xl">{icon}</span>} {/* Affiche l'icône si fournie */}
      <span className="text-lg font-semibold">{text}</span> {/* Affiche le texte */}
    </motion.div>
  );
};

export default NavbarItem;