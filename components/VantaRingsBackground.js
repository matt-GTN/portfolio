import dynamic from 'next/dynamic';
import React from 'react';

const VantaRingsClient = dynamic(
  () => import('./_VantaRingsClient'),
  {
    ssr: false, // Critical: Do not render on the server
    loading: ({ options }) => (
      // Optional: Show a placeholder background while loading on client
      <div
        style={{
          width: '1000',
          height: '1000',
          backgroundColor: options?.backgroundColor ? `#${options.backgroundColor.toString(16).padStart(6, '0')}` : '#000000',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
    ),
  }
);

const VantaRingsBackground = ({ options, children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // This container defines the full viewport height for the background
        position: 'relative', // Important for positioning child content
        overflow: 'hidden',
        zIndex: 1, // Ensure it stays in the background
      }}
    >
      {/* Pass options to VantaRingsClient */}
      <VantaRingsClient options={options}>
        {children}
      </VantaRingsClient>
    </div>
  );
};

export default VantaRingsBackground;