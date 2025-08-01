// app/page.jsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import VantaBackground from '@/components/VantaBackground';
import Navbar from "@/components/Navbar";
import DetailCard from "@/components/DetailCard"; 
import Typewriter from "@/components/Typewriter";

// NEW: Import the content for the skills card
import SkillsContent from "@/components/SkillsContent";

// MODIFIED: The content for each card now uses a 'content' property.
const cardContent = {
  Me: {
    title: "About Me",
    content: "I am a passionate developer with a love for creating beautiful and functional user interfaces. My journey in tech started with a simple 'Hello World' and has grown into a full-fledged career.",
  },
  Projects: {
    title: "My Projects",
    content: "Here you can see a collection of my work, ranging from small personal projects to large-scale enterprise applications. Each project was a unique challenge and a great learning experience.",
  },
  Skills: {
    title: "Skills & Expertise",
    // MODIFIED: The content is now our new component
    content: <SkillsContent />,
  },
  Fun: {
    title: "Fun Stuff",
    content: "When I'm not coding, I enjoy playing video games, exploring new music, and spending time with friends. I believe that a balanced life fuels creativity and innovation.",
  },
  Contact: {
    title: "Get In Touch",
    content: "Feel free to reach out via email or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.",
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
  const [activeCard, setActiveCard] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveCard(itemName);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  return (
    <main className="min-h-screen bg-base-200 relative overflow-hidden">
      <Navbar onItemClick={handleItemClick} isCardActive={!!activeCard} />
      
      <AnimatePresence>
        {activeCard && (
          // MODIFIED: DetailCard now accepts the content as a child element.
          <DetailCard
            title={cardContent[activeCard].title}
            onClose={handleCloseCard}
          >
            {cardContent[activeCard].content}
          </DetailCard>
        )}
      </AnimatePresence>
      
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
        }}
      >
        <div className="relative z-10 w-full h-full flex flex-col">
          <div className="p-8 text-left max-w-4xl w-full mt-20">
          
            <p className="text-xl text-gray-800 drop-shadow-sm">
              Hey, I'm Mathis 👋, I'm a
            </p>

            <h1 className="text-7xl font-medium mt-2">
              <Typewriter 
                words={roles} 
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              />
            </h1>
          </div>
        </div>
      </VantaBackground>
    </main>
  );
}