/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 sm:px-12 bg-[#0f1418]"
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1418] via-[#0f1418]/60 to-[#0f1418] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1418] via-transparent to-[#0f1418] z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL1yN7dtPHb8hnPLWWiNsm4lSQmj5XrzyDRQoGdNBEsLQg-8S0D4Y6d44k2xSh5FBQHq-Kj7yvhLNuJJ9pQ7nt9irccJJgsVE15BFeGiMjZkKtUYQgh_DJwS2naD9tvgPnw4_EhGKKiybkbjD23BgL_XW08VWYUIwfNNRo3yBTlNP6Joar0XMZ87uloLLOLMo4qB03MVfw2hQvhKWIknMgDz1ni2YJgLol04Oq0kjeqHnkhv5NDbCg9D74ATpJkkyIGNrp7yLLp0Q"
          alt="Abstract Obsidian and Gold Fractal Lines"
          className="w-full h-full object-cover opacity-35 scale-105 pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Parallax / Glowing Radial Halos */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#f2ca50]/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] pointer-events-none -z-10" />

      {/* Floating Geometric Lines (mimicking the Ava Blackwood look) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#f2ca50" strokeWidth="1" />
        <line x1="90%" y1="0" x2="20%" y2="100%" stroke="#d4af37" strokeWidth="1" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-20 text-center flex flex-col items-center">
        
        {/* Elite Sub-header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md mb-8"
        >
          <Star size={10} className="text-[#f2ca50] fill-[#f2ca50]" />
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.3em] uppercase text-[#dfe3e9]">
            THANE'S PREMIER DESIGN STUDIO
          </span>
          <Star size={10} className="text-[#f2ca50] fill-[#f2ca50]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] max-w-4xl"
        >
          Designing Brands That{' '}
          <span className="italic font-light text-gradient bg-gradient-to-r from-[#f2ca50] via-[#ffe088] to-[#d4af37] bg-clip-text text-transparent">
            Leave a Mark
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#d0c5af] font-sans font-light tracking-wide max-w-2xl mb-12 leading-relaxed"
        >
          Premium Branding, Logo Design & Visual Identity Studio dedicated to crafting legendary legacies through surgical precision and artistic intuition.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('#portfolio')}
            className="w-full sm:w-auto px-8 py-4 bg-[#f2ca50] text-[#0a0f13] font-mono text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-[#d4af37] transition-all duration-300 shadow-[0_0_30px_rgba(242,202,80,0.25)] hover:scale-[1.03]"
          >
            View Portfolio
          </button>
          
          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-mono text-xs tracking-[0.2em] uppercase rounded-sm hover:border-[#f2ca50] hover:text-[#f2ca50] transition-all duration-300 bg-white/[0.01] backdrop-blur-md hover:scale-[1.03]"
          >
            Start a Project
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1.2 }}
          onClick={() => handleScrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center gap-2 hover:opacity-100 transition-opacity"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#99907c]">
            Explore
          </span>
          <ArrowDown size={12} className="text-[#f2ca50] animate-bounce" />
        </motion.div>
      </div>

      {/* Decorative vertical coordinates */}
      <div className="absolute bottom-16 left-12 font-mono text-[9px] tracking-[0.3em] text-[#99907c]/40 rotate-90 origin-left hidden lg:block uppercase select-none">
        lat. 19.2183° N // lon. 72.9781° E
      </div>
      <div className="absolute bottom-16 right-12 font-mono text-[9px] tracking-[0.3em] text-[#99907c]/40 -rotate-90 origin-right hidden lg:block uppercase select-none">
        EST. 2024 // THANE
      </div>
    </section>
  );
}
