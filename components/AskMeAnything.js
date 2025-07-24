// components/AskMeAnything.jsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const AskMeAnything = () => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Recherche lancée :", query);
        // Logique pour interroger votre "AI Portfolio" ici
        // Ex: Appeler une API, filtrer des projets, etc.
        setQuery(""); // Réinitialiser le champ
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="relative w-full max-w-xl mx-auto mt-12 mb-20 flex items-center justify-between
                       bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-grow bg-transparent px-6 py-3 text-lg text-white placeholder-gray-300
                           outline-none focus:ring-0 focus:border-transparent rounded-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <motion.button
                type="submit"
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 active:bg-blue-700
                           text-white rounded-full p-3 mr-2 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                {/* Icône flèche droite */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </motion.button>
        </motion.form>
    );
};

export default AskMeAnything;