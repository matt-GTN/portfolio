// components/Typewriter.jsx
"use client";

import { useState, useEffect } from 'react';

const Typewriter = ({ words, className }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing speed and pause duration
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      
      // Determine if we are typing or deleting
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      // Logic to switch between typing and deleting
      if (!isDeleting && updatedText === currentWord) {
        // Pause at the end of the word, then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && updatedText === '') {
        // Finished deleting, move to the next word
        setIsDeleting(false);
        setWordIndex(wordIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]); // Effect dependencies

  return (
    // The className is passed from the parent to apply gradient styles
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;