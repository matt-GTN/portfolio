// components/_VantaClient.jsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // Importez THREE
import p5 from 'p5'; // NOUVEAU : Importez p5

// Définissez un mapping des noms d'effets aux chemins de leurs modules Vanta
const vantaEffectsMap = {
  BIRDS: () => import('vanta/dist/vanta.birds.min'),
  DOTS: () => import('vanta/dist/vanta.dots.min'),
  GLOBE: () => import('vanta/dist/vanta.globe.min'),
  HALO: () => import('vanta/dist/vanta.halo.min'),
  NET: () => import('vanta/dist/vanta.net.min'),
  RINGS: () => import('vanta/dist/vanta.rings.min'), // Vanta "Rings" est l'effet "Waves"
  WAVES: () => import('vanta/dist/vanta.waves.min'),
  FOG: () => import('vanta/dist/vanta.fog.min'),
  CELLS: () => import('vanta/dist/vanta.cells.min'),
  TOPOLOGY: () => import('vanta/dist/vanta.topology.min'),
  CLOUDS: () => import('vanta/dist/vanta.clouds.min'),
  CLOUDS2: () => import('vanta/dist/vanta.clouds2.min'),
  TRUNk: () => import('vanta/dist/vanta.trunk.min'),
};

// Liste des effets Vanta qui nécessitent p5.js
const p5Effects = ['TOPOLOGY', 'FOG', 'CELLS', 'TRUNK'];

const VantaClient = ({ effectType, options = {}, children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let currentVantaEffectInstance = null;

    // Assurez-vous que window est défini (environnement navigateur)
    if (typeof window !== 'undefined') {
      window.THREE = THREE; // Exposez THREE globalement

      // NOUVEAU : Exposez p5 globalement UNIQUEMENT si l'effet actuel en a besoin
      if (p5Effects.includes(effectType)) {
        window.p5 = p5;
      }
    }

    if (vantaRef.current && effectType && vantaEffectsMap[effectType]) {
      vantaEffectsMap[effectType]()
        .then((module) => {
          const VantaEffect = module.default;

          currentVantaEffectInstance = VantaEffect({
            el: vantaRef.current,
            THREE: THREE, // Passez THREE explicitement
            // p5: window.p5, // NOUVEAU : Passez p5 explicitement (certains effets Vanta peuvent vérifier cette option)
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            ...options, // Appliquez toutes les options fournies
          });
          setVantaEffect(currentVantaEffectInstance);
        })
        .catch((error) => {
          console.error(`Échec du chargement de l'effet Vanta ${effectType}:`, error);
          setVantaEffect(null);
        });
    }

    // Fonction de nettoyage : détruire l'effet Vanta et nettoyer window.THREE et window.p5
    return () => {
      if (currentVantaEffectInstance) {
        currentVantaEffectInstance.destroy();
      }
      setVantaEffect(null);

      if (typeof window !== 'undefined') {
        delete window.THREE; // Nettoyez THREE

        // NOUVEAU : Nettoyez p5 si nous l'avons exposé
        if (p5Effects.includes(effectType)) {
          delete window.p5;
        }
      }
    };
  }, [effectType, JSON.stringify(options)]); // Dépendances

  const fallbackBackgroundColor = options.backgroundColor
    ? `#${options.backgroundColor.toString(16).padStart(6, '0')}`
    : '#000000';

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        overflow: 'hidden',
        backgroundColor: fallbackBackgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default VantaClient;