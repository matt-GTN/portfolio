// app/page.jsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { User, Briefcase, Zap, Sparkles, Mail } from 'lucide-react';
import VantaBackground from '@/components/vanta/VantaBackground';
import Navbar from "@/components/Navbar";
import DetailCard from "@/components/DetailCard";
import Typewriter from "@/components/Typewriter";
import GitHubButton from "@/components/GitHubButton";
import CallToActionButton from "@/components/CallToActionButton";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

// NEW: Import the content components from the content folder
import MeContent from "@/components/content/MeContent";
import SkillsContent from "@/components/content/SkillsContent";
import ProjectsContent from "@/components/content/ProjectsContent";
import BeyondCodeContent from "@/components/content/BeyondCodeContent";
import ContactContent from "@/components/content/ContactContent";

// MODIFIED: The content for each card now uses a 'content' property with icons.
const getCardContent = (t) => ({
  Me: {
    title: (
      <div className="flex items-center gap-3">
        <User size={32} color="#3b82f6" />
        {t('navigation.me')}
      </div>
    ),
    content: <MeContent />,
  },
  Projects: {
    title: (
      <div className="flex items-center gap-3">
        <Briefcase size={32} color="#8b5cf6" />
        {t('content.projects.title')}
      </div>
    ),
    content: <ProjectsContent />,
  },
  Skills: {
    title: (
      <div className="flex items-center gap-3">
        <Zap size={32} color="#f59e0b" />
        {t('content.skills.title')}
      </div>
    ),
    content: <SkillsContent />,
  },
  BeyondCode: {
    title: (
      <div className="flex items-center gap-3">
        <Sparkles size={32} color="#03d11eff" />
        {t('content.beyondCode.title')}
      </div>
    ),
    content: <BeyondCodeContent />,
  },
  Contact: {
    title: (
      <div className="flex items-center gap-3">
        <Mail size={32} color="#ed5cebff" />
        {t('content.contact.title')}
      </div>
    ),
    content: <ContactContent />,
  },
});

const getRoles = (t) => t('homepage.roles');


export default function Home() {
  const { t } = useLanguage();
  const cardContent = getCardContent(t);
  const roles = getRoles(t);
  const [activeCard, setActiveCard] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveCard(itemName);
  };

  const handleCloseCard = () => {
    setActiveCard(null);
  };

  return (
    <main className="h-screen bg-white relative overflow-hidden">
      <GitHubButton username="matt-GTN" repository="portfolio" isCardActive={!!activeCard} />
      <LanguageToggle />
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

      {/* Vanta background - absolute positioned from middle to right edge */}
      <div className="lg:block fixed top-0 right-0 w-1/2 h-full z-0">
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

        {/* Blur overlay on all 4 sides */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top blur */}
          <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
          {/* Bottom blur */}
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          {/* Left blur */}
          <div className="absolute top-0 bottom-0 left-0 w-60 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          {/* Right blur */}
          <div className="absolute top-0 bottom-0 right-0 w-60 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

          {/* Corner blurs for smoother transitions */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white via-white/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white via-white/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white via-white/60 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white via-white/60 to-transparent"></div>
        </div>
      </div>

      {/* Main content area - full width with proper z-index */}
      <div className="relative z-20 min-h-screen">
        <div className="p-8 text-left max-w-4xl w-full mt-20">
          <p className="text-xl text-gray-800 drop-shadow-sm">
            {t('homepage.greeting')}
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
    </main>
  );
}