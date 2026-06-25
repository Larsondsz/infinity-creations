/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for custom navbar active styling
  useEffect(() => {
    if (!introComplete) return;

    const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [introComplete]);

  return (
    <div className="relative min-h-screen bg-[#0f1418] text-[#dfe3e9] selection:bg-[#f2ca50] selection:text-[#0a0f13]">
      
      {/* Spectacular cinematic particle intro sequence */}
      <CinematicIntro onComplete={() => setIntroComplete(true)} />

      {/* Main website pages (Fades in luxuriously once intro is complete) */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="flex flex-col min-h-screen"
          >
            {/* Header Navigation */}
            <Navbar activeSection={activeSection} />

            {/* Structured Page Components */}
            <main className="flex-grow">
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Process />
              <Contact />
            </main>

            {/* Footer containing SEO descriptions */}
            <Footer />

            {/* Floating Luxury WhatsApp Helper on the bottom-right corner */}
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
              href="https://wa.me/918275997461"
              target="_blank"
              rel="noreferrer"
              title="Connect with Larson Dsouza"
              className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group cursor-pointer"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              {/* Gold pulsing halo around the WhatsApp badge */}
              <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-25 pointer-events-none" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
