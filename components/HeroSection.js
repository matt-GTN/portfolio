// components/HeroSection.jsx
"use client";
import { motion } from "motion/react"; // Utilisez framer-motion pour les animations d'entrée
import Image from "next/image"; // Pour l'avatar
// Importez ou créez ici votre composant pour le champ de recherche
import AskMeAnything from './AskMeAnything'; // À créer
import FluidBackground from './VantaBackground'; // Assurez-vous que ce composant est créé pour le fond fluide

const HeroSection = () => {
    // Variants pour les animations de texte
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Variants pour l'avatar
    const avatarVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
    };

 // Vous pouvez passer une configuration personnalisée au fond fluide
    const fluidConfig = {
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 8000,
      DENSITY_DISSIPATION: 1.2, // Pour que les couleurs s'estompent plus vite
      VELOCITY_DISSIPATION: 0.9, // Le mouvement ralenti plus vite
      CURL: 5,
      // Vous pouvez essayer d'ajuster BACK_COLOR si TRANSPARENT: false
      // BACK_COLOR: { r: 0.1, g: 0.05, b: 0.15 },
      TRANSPARENT: true, // Laissez à true pour voir le background de votre page
      COLOR_UPDATE_SPEED: 0.5, // Changement de couleur plus lent
    };

    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center p-8 overflow-hidden bg-[#1A202C]"> {/* Ajoutez une couleur de fond pour voir le fluide */}
            {/* Le fond fluide doit être le premier élément enfant du conteneur pour être en arrière-plan */}
            <FluidBackground config={fluidConfig} /> {/* Passez la config en prop */}

            {/* Le reste de votre contenu doit être au-dessus du fluide */}
            <div className="relative z-10"> {/* Assurez-vous que ce div a un z-index */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gray-200 mb-2"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    Hey, I'm Mathis 👋
                </motion.h2>
                <motion.h1
                    className="text-6xl md:text-8xl font-extrabold text-white mb-8 drop-shadow-lg"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.2, ...textVariants.visible.transition }}
                >
                    AI Portfolio
                </motion.h1>

                <motion.div
                    className="relative w-64 h-64 md:w-80 md:h-80 my-8"
                    initial="hidden"
                    animate="visible"
                    variants={avatarVariants}
                >
                    <Image
                        src="/avatar.png"
                        alt="Mathis 3D Avatar"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </motion.div>

                <AskMeAnything />
            </div>
        </section>
    );
};

export default HeroSection;