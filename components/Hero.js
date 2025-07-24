'use client';
import { motion } from 'motion/react';

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen w-full bg-base-200">
      {/* Moving wave background */}
      <motion.div
        className="absolute top-0 left-0 w-[300%] h-full bg-repeat-x"
        style={{
          backgroundImage: "url('/layered-waves-haikei.svg')",
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'repeat-x',
        }}
        animate={{ x: ['0%', '-66%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 hero-content flex items-center justify-center text-center text-[#FA7268] min-h-screen">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, I'm Mathis</h1>
          <p className="py-6"></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
