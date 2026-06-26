/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Automated luxury loading timer: play elegant animation then exit
    const timer = setTimeout(() => {
      setIsExiting(true);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 800); // Allow exit animations to complete
      return () => clearTimeout(exitTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="intro-portal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(30px)', scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#020203] overflow-hidden flex flex-col items-center justify-center select-none"
        >
          {/* Ambient Purple Soft Glow in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.4, 0.2] }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#7c5cfc] to-[#c084fc] filter blur-[100px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Morphing & Animated Infinity Symbol */}
            <div className="relative w-48 h-24 mb-10">
              {/* Soft glow under the vector */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 0.6, 0.3], scale: [0.9, 1.1, 1] }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center filter blur-md text-[#7c5cfc] opacity-40"
              >
                <svg width="180" height="90" viewBox="0 0 180 90" fill="none">
                  <path
                    d="M45,45 C15,10 15,80 45,45 L135,45 C165,10 165,80 135,45 Z"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Precise Vector Trace */}
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" className="mx-auto">
                <defs>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c5cfc" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7c5cfc" />
                  </linearGradient>
                </defs>
                {/* Background trace line */}
                <path
                  d="M45,45 C15,10 15,80 45,45 L135,45 C165,10 165,80 135,45 Z"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Active path drawing */}
                <motion.path
                  d="M45,45 C15,10 15,80 45,45 L135,45 C165,10 165,80 135,45 Z"
                  stroke="url(#purpleGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, pathOffset: 0.1 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </div>

            {/* Premium Typography Animation */}
            <div className="overflow-hidden flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[0.3em] text-white uppercase leading-none">
                  INFINITY
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, letterSpacing: "0.2em" }}
                  animate={{ opacity: 0.7, letterSpacing: "0.5em" }}
                  transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-[9px] text-[#dfe3e9] mt-3 uppercase ml-1"
                >
                  CREATIONS
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Micro-loader indicator - subtle luxury style */}
          <div className="absolute bottom-12 overflow-hidden w-24 h-[1px] bg-white/5">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#7c5cfc] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
