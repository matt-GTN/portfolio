// components/DetailCard.jsx
"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const DetailCard = ({ title, description, onClose }) => {
  return (
    <motion.div
      key="detail-card"
      className="fixed m-auto flex flex-col justify-left items-left 
                 max-w-md p-8 z-40 rounded-3xl
                 bg-white/10 backdrop-blur-xs shadow-md shadow-black/30 border border-black/20
                 border border-black/20 text-black right-8 top-4 bottom-8"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <motion.button
        className="absolute top-4 right-4 text-black/70"
        onClick={onClose}
        whileHover={{ scale: 1.2, rotate: 90 }}
      >
        <X size={28} />
      </motion.button>
      
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-black/80">{description}</p>
      </div>
    </motion.div>
  );
};

export default DetailCard;