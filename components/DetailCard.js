// components/DetailCard.jsx
"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

// MODIFIED: Accepts a `children` prop for flexible content.
const DetailCard = ({ title, children, onClose }) => {
  return (
    <motion.div
      key="detail-card"
      className="fixed m-auto flex flex-col justify-start items-stretch 
                 max-w-3xl p-8 z-40 rounded-4xl
                 bg-white/20 backdrop-blur-lg shadow-xl shadow-black/30 
                 border border-white/30 text-black lg:right-6 lg:top-8 lg:bottom-8 lg:left-auto inset-4 lg overflow-y-auto"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <motion.button
        className="absolute top-4 right-4 text-black/70 z-10" // Added z-index to ensure it's on top
        onClick={onClose}
        whileHover={{ scale: 1.2, rotate: 90 }}
      >
        <X size={24} />
      </motion.button>
      
      {/* The title remains at the top of the scrollable area. */}
      <h2 className="lg:text-4xl text-lg font-bold mb-8">{title}</h2>
      
      {/* MODIFIED: Renders the children passed to the component. */}
      <div className="text-lg text-black/80">
        {children}
      </div>
    </motion.div>
  );
};

export default DetailCard;