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
        Beyond Coding
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
  "Agentic AI Builder",
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
    <main className="min-h-screen bg-white relative overflow-hidden">
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

      {/* Main layout with left content and right Vanta background */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left side - Content area (2/3 of screen on desktop, full width on mobile) */}
        <div className="w-full lg:w-2/3 relative z-10 flex flex-col">
          <div className="p-8 text-left max-w-4xl w-full mt-20">
            <p className="text-xl text-gray-800 drop-shadow-sm">
              Hey, I'm Mathis 👋, I'm a
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium mt-2 min-w-xl whitespace-nowrap">
              <Typewriter
                words={roles}
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              />
            </h1>

            {/* Call to Action Button under typewriter */}
            <div className="mt-16">
              <CallToActionButton 
                onContactClick={handleItemClick}
              />
            </div>
          </div>
        </div>

        {/* Right side - Vanta background (1/3 of screen on desktop, hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/3 relative">
          {/* Vanta background container */}
          <div className="absolute inset-0">
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
            />
          </div>
          
          {/* Blur overlay edges */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top blur */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
            {/* Bottom blur */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
            {/* Left blur */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            {/* Right blur */}
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            
            {/* Corner blurs for smoother transitions */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white via-white/60 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white via-white/60 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white via-white/60 to-transparent z-10"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white via-white/60 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </main>
  );
}