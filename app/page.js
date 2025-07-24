// src/app/page.js
"use client";
import React from 'react';
import VantaRingsBackground from '@/components/VantaRingsBackground';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 relative overflow-hidden">

      {/* VantaRingsBackground will occupy 100vh with the animation */}
      <VantaRingsBackground
        options={{
          color: 0x3b004a, // Rings color
          backgroundColor: 0xffffff, // Background color within Vanta
          amplitudeFactor: 2.0,
          ringWidth: 1.8,
          shininess: 40.00,
        }}
      >
        {/* This div holds content ON TOP of the Vanta background */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          <Navbar />

          {/* Main content for the hero section */}


          {/* No Footer here, as per your requirement (footer after background) */}
        </div>
      </VantaRingsBackground>

      {/* This div holds content that appears AFTER the 100vh Vanta section */}
      <div className="w-full relative z-10">
        {/* Placeholder content below the Vanta section */}
        <div className="p-8 text-center text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="text-3xl font-bold">Scroll down for more!</h2>
        </div>

        {/* Footer appears after the 100vh Vanta section and any other content you place here */}
        <Footer />
      </div>
    </main>
  );
}