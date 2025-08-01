// app/page.jsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import VantaBackground from '@/components/VantaBackground';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DetailCard from "@/components/DetailCard"; // We'll use the dynamic DetailCard
import Typewriter from "@/components/Typewriter"; // Import the Typewriter component
import UnblurReveal from "@/components/UnblurReveal";
import { Type } from "lucide-react";

// Define the content for each card that can be opened
const cardContent = {
  Me: {
    title: "About Me",
    description: "I am a passionate developer with a love for creating beautiful and functional user interfaces. My journey in tech started with a simple 'Hello World' and has grown into a full-fledged career.",
  },
  Projects: {
    title: "My Projects",
    description: "Here you can see a collection of my work, ranging from small personal projects to large-scale enterprise applications. Each project was a unique challenge and a great learning experience.",
  },
  Skills: {
    title: "Core Skills",
    description: "My toolbox includes React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. I am always eager to learn new technologies and improve my existing skills.",
  },
  Fun: {
    title: "Fun Stuff",
    description: "When I'm not coding, I enjoy playing video games, exploring new music, and spending time with friends. I believe that a balanced life fuels creativity and innovation.",
  },
  Contact: {
    title: "Get In Touch",
    description: "Feel free to reach out via email or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.",
  },
};

const roles = [
    "Data Scientist",
    "Team Player", 
    "Agentic AI Developer",
    "Learning Enthusiast",
    "Web Developer",
];


export default function Home() {
  // State to manage which card is currently open. `null` = navbar is visible.
  const [activeCard, setActiveCard] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveCard(itemName);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  return (
    <main className="min-h-screen bg-base-200 relative overflow-hidden">
      {/* 
        The Navbar is now controlled by state. 
        We pass it the click handler and a boolean to tell it if a card is active.
      */}
      <Navbar onItemClick={handleItemClick} isCardActive={!!activeCard} />
      
      {/* AnimatePresence will manage the mounting/unmounting of the DetailCard */}
      <AnimatePresence>
        {activeCard && (
          <DetailCard
            title={cardContent[activeCard].title}
            description={cardContent[activeCard].description}
            onClose={handleCloseCard}
          />
        )}
      </AnimatePresence>
      
      {/* Your VantaBackground and other content remain as the base layer */}
      <VantaBackground
        effectType="BIRDS"
        options={{
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xffffff,
          color1: 0x10027a,
          color2: 0xff0086,
          colorMode: "varianceGradient",
          birdSize: 1.00,
          wingSpan: 20.00,
          speedLimit: 5.00,
          separation: 15.00,
          alignment: 25.00,
          cohesion: 50.00,
          quantity: 4.00,  
          // ... your other vanta options
        }}
      >
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* A container to manage the text block's alignment and max-width */}
          <div className="p-8 text-left max-w-4xl w-full mt-20">
          
            {/* The static text, now a <p> tag for better semantics */}
            <p className="text-xl text-gray-800 drop-shadow-sm">
              Hey, I'm Mathis 👋, I'm a
            </p>

            {/* A single H1 wrapper for the main, dynamic title.
                We set the font size and weight here. */}
            <h1 className="text-4xl md:text-7xl font-medium mt-2">
              <Typewriter 
                words={roles} 
                // The className now ONLY handles the gradient, not font size.
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              />
            </h1>
          </div>
        </div>
      </VantaBackground>
      {/* ========== END: CORRECTED VANTA BACKGROUND SECTION ========== */}
    </main>
  );
}