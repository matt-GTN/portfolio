// components/VantaBackground.jsx
"use client"; // Keep this as it's a client component for dynamic import

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the generic VantaClient component
const VantaClient = dynamic(
  () => import('./_VantaClient'), // Changed path to _VantaClient
  {
    ssr: false, // Critical: Do not render on the server
    loading: ({ options }) => (
      // Optional: Show a placeholder background while loading on client
      <div
        style={{
          width: '100%', // Use 100% to fill parent
          height: '100vh', // Use 100vh to define the section height
          backgroundColor: options?.backgroundColor ? `#${options.backgroundColor.toString(16).padStart(6, '0')}` : '#000000',
          position: 'absolute', // Position absolute within the parent div
          top: 0,
          left: 0,
          zIndex: 0, // Ensure it's behind content
        }}
      />
    ),
  }
);

// Updated component name to be generic
const VantaBackground = ({ effectType, options, children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // This container defines the full viewport height for the background
        position: 'relative', // Important for positioning child content
        overflow: 'hidden',
        zIndex: 0, // Ensure it stays in the background
      }}
    >
      {/* Pass effectType and options to VantaClient */}
      <VantaClient effectType={effectType} options={options}>
        {children}
      </VantaClient>
    </div>
  );
};

export default VantaBackground;