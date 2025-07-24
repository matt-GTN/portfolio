// components/NavbarItem.jsx
"use client";

import { motion } from "motion/react";

// components/NavbarItem.jsx (modification pour la navigation)
// ...
import Link from 'next/link'; // Importez Link

const NavbarItem = ({ text, icon, href }) => { // Changez onClick en href
  return (
    <Link href={href}> {/* Enveloppez motion.div dans Link */}
      <motion.div
        className="flex items-center gap-2 px-4 py-2 rounded-4xl cursor-pointer whitespace-nowrap
                   bg-white/10 backdrop-blur-sm shadow-lg shadow-black/10 border border-white/30
                   justify-center transition-colors duration-200 hover:text-gray-800 text-black-500 min-h-32 min-w-32"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        // onClick={onClick} // N'est plus nécessaire si vous utilisez Link
      >
        {icon && <span className="text-xl">{icon}</span>}
        <span className="text-lg font-semibold">{text}</span>
      </motion.div>
    </Link>
  );
};
export default NavbarItem;