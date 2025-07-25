// src/app/page.js
"use client";
import React from 'react';
import VantaBackground from '@/components/VantaBackground'; // Updated import name
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 relative overflow-hidden">

      <VantaBackground
        effectType="BIRDS" // Change this to "DOTS", "GLOBE", "BIRDS", etc.
        options={{
          backgroundColor: 0x0, // Fond noir
          color: 0xff3f81,       // Couleur principale des lignes/points (un rose vif)
          color2: 0xff334b,      // Deuxième couleur pour le dégradé (un rouge-orange)
          // Autres options génériques (ou spécifiques si vous en avez besoin)
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          mouseDamping: 0.2,
        }}
      >
        {/* This div holds content ON TOP of the Vanta background */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          <Navbar />

          {/* Main content for the hero section */}
          <div className="flex flex-grow items-center justify-center p-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
              Welcome to My Portfolio
            </h1>
          </div>
        </div>
      </VantaBackground>

      {/* This div holds content that appears AFTER the 100vh Vanta section */}
      <div className="w-full relative z-10">
        {/* Placeholder content below the Vanta section */}
        <div className="p-8 text-center text-black" style={{ backgroundColor: 'rgba(255,255,255,0.9)', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="text-3xl font-bold">Scroll down for more!</h2>
        </div>

        {/* Footer appears after the 100vh Vanta section and any other content you place here */}
        <Footer />
      </div>
    </main>
  );
}