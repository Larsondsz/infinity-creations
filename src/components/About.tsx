/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Layers, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#0a0f13] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#f2ca50]/2 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Cover Photo with Premium Geometric Borders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Elegant outer vector borders reminiscent of luxury layouts */}
            <div className="absolute -inset-4 border border-[#f2ca50]/15 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#f2ca50]" />
            <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#f2ca50]" />
            <div className="absolute top-0 right-0 h-8 w-[1px] bg-[#f2ca50]" />
            <div className="absolute bottom-0 left-0 h-8 w-[1px] bg-[#f2ca50]" />

            <div className="aspect-[4/3] sm:aspect-square overflow-hidden glass-card p-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5KJ4NUtLvI-gE7TrC61cqRa7-mbCBpVXxROvw1tQd8yO4Cd-JXuQSAxeILeZA36mbzOOvEhh-FzOAete6ctbi-64xHbSiqzVgnghmKQ9h5q7ABnhFgNA-hSeEIMNlvq_uOvbBqXVQPFkrn1PcMxayCX7rLj4PSG33nRh0ErH8pQCVPMNKn_yLicSZBx3skWHHyAvw1VtMqbe9r2CnUdYUSWp11amMdDjLfnz48TKlNuAHJknDbu5WHCyIobIQ-524uq02IFvkjRI"
                alt="Infinity Creations Studio - Luxury Geometric Architecture and Graphic Design Visual"
                className="w-full h-full object-cover rounded-sm filter brightness-90 grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Tiny Luxury Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1b2025] border border-[#f2ca50]/30 px-6 py-4 rounded-sm shadow-xl hidden sm:flex items-center gap-3">
              <ShieldCheck className="text-[#f2ca50]" size={20} />
              <div>
                <p className="font-mono text-[9px] tracking-widest text-[#99907c] uppercase">Quality Assurance</p>
                <p className="text-xs text-white font-bold uppercase">100% Bespoke</p>
              </div>
            </div>
          </motion.div>

          {/* Description Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-[#f2ca50]" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#f2ca50]">
                THE STUDIO
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
              An Architectural Approach to{' '}
              <span className="italic font-light text-[#f2ca50]">Visual Linguistics</span>
            </h2>

            <p className="text-[#dfe3e9] font-sans font-light leading-relaxed mb-6 text-sm sm:text-base">
              Infinity Creations is a creative design studio based in Thane, Maharashtra specializing in branding, logo design, social media design, print design, and visual identity systems.
            </p>

            <p className="text-[#d0c5af] font-sans font-light leading-relaxed mb-10 text-sm">
              We operate at the intersection of mathematical harmony and artistic rebellion. We do not construct generic assets; we engineer visual gravity systems that pull audiences in, establishing instant authority and timeless prestige for your brand.
            </p>

            {/* Quality list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex gap-4">
                <div className="text-[#f2ca50] mt-1 shrink-0">
                  <Layers size={18} />
                </div>
                <div>
                  <h3 className="font-mono text-xs tracking-widest text-white uppercase mb-1">
                    Bespoke Craftsmanship
                  </h3>
                  <p className="text-xs text-[#99907c]">
                    Every single line, vertex, and curve is mathematically tailored to represent your exact philosophy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#f2ca50] mt-1 shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h3 className="font-mono text-xs tracking-widest text-white uppercase mb-1">
                    Quiet Luxury Style
                  </h3>
                  <p className="text-xs text-[#99907c]">
                    Surgical restraint that commands high-end attention and instills absolute client trust.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
