/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: '#hero' },
    { name: 'About', id: '#about' },
    { name: 'Services', id: '#services' },
    { name: 'Portfolio', id: '#portfolio' },
    { name: 'Contact', id: '#contact' },
  ];

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#050508]/85 backdrop-blur-md border-b border-white/[0.04]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="flex items-center gap-3 group relative"
          >
            {/* The Infinity Icon */}
            <div className="relative w-10 h-6 flex items-center justify-center">
              <svg
                width="34"
                height="18"
                viewBox="0 0 34 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#7c5cfc] group-hover:scale-105 transition-transform duration-300"
              >
                <path
                  d="M9,9 C3,3 3,15 9,9 L25,9 C31,3 31,15 25,9 Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Core glow */}
              <div className="absolute inset-0 bg-[#7c5cfc]/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Typography */}
            <span className="font-display font-bold text-lg tracking-[0.25em] text-white group-hover:text-[#7c5cfc] transition-colors duration-300 uppercase">
              INFINITY
              <span className="font-light text-xs tracking-[0.15em] ml-2 text-[#99907c] group-hover:text-[#dfe3e9] transition-colors duration-300">
                CREATIONS
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.id.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.id}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="relative font-mono text-[11px] tracking-[0.25em] uppercase transition-colors py-1 select-none"
                  style={{ color: isActive ? '#7c5cfc' : '#dfe3e9' }}
                >
                  <span className="hover:text-[#7c5cfc] transition-colors duration-300">
                    {item.name}
                  </span>
                  
                  {/* Subtle Luxury Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7c5cfc] to-transparent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Quick Consultation CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="px-5 py-2 border border-white/10 hover:border-[#7c5cfc] hover:text-[#7c5cfc] transition-all duration-500 text-[10px] font-mono tracking-[0.2em] uppercase rounded-sm flex items-center gap-2"
            >
              Start Project
              <ArrowRight size={12} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#7c5cfc] transition-colors focus:outline-none p-2"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 top-[68px] z-30 md:hidden bg-[#050508]/98 backdrop-blur-lg flex flex-col justify-between py-12 px-8 border-t border-white/[0.04]"
          >
            <div className="flex flex-col gap-6 mt-6">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  key={item.name}
                  href={item.id}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="font-display text-3xl tracking-widest text-[#dfe3e9] hover:text-[#7c5cfc] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Contact Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-t border-white/10 pt-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-xs text-[#99907c] font-mono">
                <Sparkles size={12} className="text-[#7c5cfc]" />
                THANE, MAHARASHTRA
              </div>
              <p className="text-sm text-white font-light">
                infinitycreation27@gmail.com
              </p>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="w-full text-center py-4 bg-[#7c5cfc] text-white text-xs font-mono tracking-widest uppercase rounded-sm hover:bg-[#6344df] transition-colors"
              >
                Inquire Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
