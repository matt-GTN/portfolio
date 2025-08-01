// components/DetailCard.jsx
"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const DetailCard = ({ title, description, onClose }) => {
  return (
    <motion.div
      key="detail-card"
      className="fixed inset-0 m-auto flex flex-col justify-center items-center 
                 max-w-2xl h-[28rem] p-8 z-40 rounded-3xl
                 bg-white/5 backdrop-blur-xl shadow-black/40 
                 border border-black/20 text-black"
      initial={{ scale: 0.4, opacity: 0, y: 100 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.4, opacity: 0, y: 100 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <motion.button
        className="absolute top-4 right-4 text-black/70 hover:text-white"
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