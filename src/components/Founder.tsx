/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Compass, Mail, Phone, MapPin } from 'lucide-react';

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#1b2025]/40 overflow-hidden"
    >
      {/* Halo visual glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f2ca50]/3 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#f2ca50]" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#f2ca50]">
              THE MASTERY
            </span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Founder
          </h3>
        </div>

        {/* Premium Luxury Monogram Profile Card (Zero human photos, ultra high-end visual design) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="relative w-full max-w-xl aspect-[9/16] sm:aspect-[1.618/1] rounded-sm bg-gradient-to-br from-[#171c20] to-[#0a0f13] p-8 sm:p-12 overflow-hidden shadow-2xl border border-[#f2ca50]/20 flex flex-col justify-between"
        >
          {/* Subtle marble vein veins / gold dust pattern background inside the card */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f2ca50_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Decorative geometric thin gold lines crossing the card elegantly */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10%" x2="100%" y2="85%" stroke="#f2ca50" strokeWidth="0.75" />
            <line x1="85%" y1="0" x2="15%" y2="100%" stroke="#d4af37" strokeWidth="0.75" />
            <circle cx="50%" cy="50%" r="35%" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4, 4" fill="none" />
            <circle cx="50%" cy="50%" r="15%" stroke="#d4af37" strokeWidth="1" fill="none" />
          </svg>

          {/* Top Row: Monogram Branding */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <Compass size={14} className="text-[#f2ca50] animate-spin-slow" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#99907c] uppercase">
                Creator Passport
              </span>
            </div>
            
            {/* Custom Circular Gold Monogram 'LD' */}
            <div className="w-10 h-10 rounded-full border border-[#f2ca50]/40 flex items-center justify-center font-display text-[#f2ca50] font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(242,202,80,0.15)] bg-[#0f1418]">
              LD
            </div>
          </div>

          {/* Central Section: Larson Dsouza Name & Title */}
          <div className="text-center my-8 relative z-10 flex flex-col items-center">
            <h4 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[0.12em] text-white uppercase leading-none mb-4">
              Larson Dsouza
            </h4>
            
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#f2ca50] to-transparent mb-4" />
            
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.35em] text-[#f2ca50] uppercase font-medium">
              Founder & Creative Designer
            </p>
          </div>

          {/* Bottom Row: Contact & Studio Details */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.06] relative z-10">
            {/* Contact Details */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#99907c]">
                <Mail size={12} className="text-[#f2ca50]" />
                <span className="font-sans text-[10px] tracking-wide text-white font-light truncate">
                  infinitycreation27@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#99907c]">
                <Phone size={12} className="text-[#f2ca50]" />
                <span className="font-sans text-[10px] tracking-wide text-white font-light">
                  +91 8275997461
                </span>
              </div>
            </div>

            {/* Studio Info */}
            <div className="flex flex-col items-end justify-center text-right">
              <div className="flex items-center gap-1 text-[#99907c] text-[10px] font-mono">
                <MapPin size={10} className="text-[#f2ca50]" />
                THANE, MH, IN
              </div>
              <span className="text-[8px] tracking-[0.25em] text-[#99907c]/60 font-mono uppercase mt-1">
                IC // STUDIO
              </span>
            </div>
          </div>

          {/* Outer glow overlay lines */}
          <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#f2ca50]/50" />
          <div className="absolute top-0 left-0 h-4 w-[1px] bg-[#f2ca50]/50" />
          <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#f2ca50]/50" />
          <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-[#f2ca50]/50" />
        </motion.div>

        {/* Faint disclaimer matching anti-larp, anti-slop guidelines */}
        <p className="font-mono text-[9px] tracking-[0.2em] text-[#99907c]/50 uppercase mt-8 select-none">
          Infinity Creations // Original Executive Card
        </p>
      </div>
    </section>
  );
}
