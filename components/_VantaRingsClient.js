// This component will ONLY be rendered on the client-side.
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import THREE from npm, not via script tag
import RINGS from 'vanta/dist/vanta.rings.min'; // Import RINGS from npm, not via script tag

const VantaRingsClient = ({ options = {}, children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    // Only initialize if vantaEffect is not yet set AND the ref is available
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE, // Pass the imported THREE object
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Default options for Rings. Override these with props.options
          color: 0x8800ff, // Purple
          backgroundColor: 0x0, // Black
          amplitudeFactor: 1.5,
          ringWidth: 1.5,
          shininess: 30.00,
          ...options,
        })
      );
    }

    // Cleanup function: destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect, options]); // Re-run effect if vantaEffect or options change

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100%', // Use 100% here as VantaRingsBackground will define the 100vh
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1, // Ensure it stays in the background
        overflow: 'hidden', // Hide any potential overflow from the canvas
        // This background color acts as a fallback/initial color
        // before Vanta fully loads and applies its own background.
        // It helps prevent the "white flash".
        backgroundColor: options.backgroundColor ? `#${options.backgroundColor.toString(16).padStart(6, '0')}` : '#000000',
      }}
    >
      {children}
    </div>
  );
};

export default VantaRingsClient;