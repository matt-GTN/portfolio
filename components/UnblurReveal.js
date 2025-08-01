// components/UnblurReveal.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UnblurReveal = ({ words, className }) => {
  const [wordIndex, setWordIndex] = useState(0);

  // Duration for the word to be displayed before switching
  const DURATION_PER_WORD = 4000; // 4 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, DURATION_PER_WORD);

    return () => clearInterval(interval);
  }, [words.length]); // Optimized dependency array

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.025, staggerDirection: 1 } },
  };

  const letterVariants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
    },
  };

  const currentWord = words[wordIndex];

  return (
    // The outer div is now just a simple structural wrapper
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord} 
          // ✅ CORRECT: The className with gradient styles is applied here!
          className={className}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          // This div now has the gradient and directly contains the transparent text spans
          style={{ display: 'inline-block' }}
        >
          {currentWord.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ display: 'inline-block' }} 
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default UnblurReveal;