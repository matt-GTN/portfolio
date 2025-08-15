// app/page.jsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { User, Briefcase, Zap, Sparkles, Mail } from 'lucide-react';
import VantaBackground from '@/components/vanta/VantaBackground';
import Navbar from "@/components/Navbar";
import DetailCard from "@/components/DetailCard";
import Typewriter from "@/components/Typewriter";
import GitHubButton from "@/components/GitHubButton";
import CallToActionButton from "@/components/CallToActionButton";

// NEW: Import the content components from the content folder
import MeContent from "@/components/content/MeContent";
import SkillsContent from "@/components/content/SkillsContent";
import ProjectsContent from "@/components/content/ProjectsContent";
import BeyondCodeContent from "@/components/content/BeyondCodeContent";
import ContactContent from "@/components/content/ContactContent";

// MODIFIED: The content for each card now uses a 'content' property with icons.
const cardContent = {
  Me: {
    title: (
      <div className="flex items-center gap-3">
        <User size={32} color="#3b82f6" />
        About Me
      </div>
    ),
    content: <MeContent />,
  },
  Projects: {
    title: (
      <div className="flex items-center gap-3">
        <Briefcase size={32} color="#8b5cf6" />
        My Projects
      </div>
    ),
    content: <ProjectsContent />,
  },
  Skills: {
    title: (
      <div className="flex items-center gap-3">
        <Zap size={32} color="#f59e0b" />
        Skills & Expertise
      </div>
    ),
    content: <SkillsContent />,
  },
  BeyondCode: {
    title: (
      <div className="flex items-center gap-3">
        <Sparkles size={32} color="#03d11eff" />
        Beyond Code
      </div>
    ),
    content: <BeyondCodeContent />,
  },
  Contact: {
    title: (
      <div className="flex items-center gap-3">
        <Mail size={32} color="#ed5cebff" />
        Get In Touch
      </div>
    ),
    content: <ContactContent />,
  },
};

const roles = [
  "Data Scientist",
  "Team Player",
  "Agent Builder",
  "Learning Enthusiast",
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
      <GitHubButton username="matt-GTN" repository="portfolio" isCardActive={!!activeCard} />
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

            <h1 className="text-8xl font-medium mt-2 min-w-xl whitespace-nowrap">
              <Typewriter
                words={roles}
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              />
            </h1>

            {/* Call to Action Button under typewriter */}
            <div className="mt-8">
              <CallToActionButton 
                onContactClick={handleItemClick}
              />
            </div>
          </div>
        </div>
      </VantaBackground>
    </main>
  );
}