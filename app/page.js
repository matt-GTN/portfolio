"use client";
import React from 'react';
import VantaBackground from '@/components/VantaBackground';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 relative overflow-hidden">
      {/* Navbar moved outside of VantaBackground and made fixed */}
      <Navbar className="fixed top-0 left-0 right-0 z-50" />

      <VantaBackground
        effectType="GLOBE"
        options={{
          backgroundColor: 0xFFFDF0,
          color: 0xff3f81,
          color2: 0xff334b,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          mouseDamping: 0.2,
          size: 2
        }}
      >
        {/* This div holds content ON TOP of the Vanta background */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center pt-16"> {/* Added padding-top to account for navbar height */}
          {/* Main content for the hero section */}
          <div className="flex flex-grow items-center justify-center p-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
            </h1>
          </div>
        </div>
      </VantaBackground>

      {/* This div holds content that appears AFTER the 100vh Vanta section */}
      <div className="w-full relative z-1"> {/* Added padding-top to account for navbar height */}
        {/* Footer appears after the 100vh Vanta section and any other content you place here */}
        <Footer />
      </div>
    </main>
  );
}
