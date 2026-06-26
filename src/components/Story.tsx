/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Compass, Cpu, PenTool, ArrowUpRight, Layers } from 'lucide-react';

export default function Story() {
  const creativeServices = [
    'Brand Identity Design',
    'Logo Design',
    'Social Media Creatives',
    'Print Design',
    'Marketing Materials',
    'Website Design',
    'UI/UX Design',
    'Digital Branding'
  ];

  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 sm:px-12 md:px-24 bg-[#050508] overflow-hidden border-t border-white/[0.02]"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7c5cfc]/3 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#c084fc]/2 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Editorial Treatment */}
        <div className="relative mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 180 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <Sparkles size={16} className="text-[#7c5cfc]" />
            </motion.div>
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-[#7c5cfc] font-medium">
              The Genesis
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
              >
                The Story Behind <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                    Infinity Creations
                  </span>
                </span>
              </motion.h2>
            </div>
            
            <div className="md:col-span-4 md:text-right pb-2">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                className="font-mono text-xs tracking-widest text-[#99907c] uppercase font-semibold border-b border-white/10 md:border-b-0 md:border-r md:pr-6 md:py-1 border-[#7c5cfc]/30"
              >
                Where Imagination <br className="hidden md:block" /> Meets Creativity
              </motion.p>
            </div>
          </div>

          {/* Premium editorial line separator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7c5cfc]/20 via-white/[0.05] to-transparent mt-8" />
        </div>

        {/* Narrative & Abstract Visual Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Architectural Abstract SVG/CSS composition indicating Engineering + Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant luxury outer framing */}
            <div className="absolute -inset-4 border border-white/[0.03] pointer-events-none rounded-lg" />
            <div className="absolute top-0 left-0 w-6 h-[1px] bg-[#7c5cfc]" />
            <div className="absolute top-0 left-0 h-6 w-[1px] bg-[#7c5cfc]" />
            <div className="absolute bottom-0 right-0 w-6 h-[1px] bg-[#c084fc]" />
            <div className="absolute bottom-0 right-0 h-6 w-[1px] bg-[#c084fc]" />

            <div className="aspect-[4/5] w-full rounded-sm bg-gradient-to-br from-[#0d0d14] to-[#020203] p-8 overflow-hidden relative border border-white/[0.05] flex flex-col justify-between shadow-2xl group">
              {/* Subtle background grid representing mechanical engineering blueprints */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#7c5cfc_1px,transparent_1px),linear-gradient(to_bottom,#7c5cfc_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {/* Mathematical / Architectural circles & lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="svgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c5cfc" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <circle cx="50%" cy="45%" r="35%" stroke="#7c5cfc" strokeWidth="0.5" strokeDasharray="5, 5" fill="none" className="animate-spin-slow" />
                <circle cx="50%" cy="45%" r="20%" stroke="#c084fc" strokeWidth="0.75" fill="none" />
                <line x1="10%" y1="45%" x2="90%" y2="45%" stroke="url(#svgGlow)" strokeWidth="0.5" />
                <line x1="50%" y1="10%" x2="50%" y2="80%" stroke="url(#svgGlow)" strokeWidth="0.5" />
                <path d="M25,25 L75,75 M75,25 L25,75" stroke="#7c5cfc" strokeWidth="0.25" strokeDasharray="2, 4" />
              </svg>

              {/* Top Meta info */}
              <div className="flex justify-between items-center relative z-10">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#99907c] uppercase">
                  Est. Thane, MH // 2022
                </span>
                <Compass size={14} className="text-[#7c5cfc] animate-spin-slow" />
              </div>

              {/* Dynamic Abstract Geometry Centerpiece (engineering dial + infinity morph) */}
              <div className="relative my-auto flex items-center justify-center py-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="w-36 h-36 rounded-full border border-white/[0.04] relative flex items-center justify-center"
                >
                  <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#7c5cfc]/20" />
                  <div className="absolute w-20 h-20 rounded-full border border-[#c084fc]/30 flex items-center justify-center bg-[#050508]/80 shadow-[0_0_30px_rgba(124,92,252,0.1)]">
                    {/* Golden/Indigo Core of Creativity */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7c5cfc] to-[#c084fc] opacity-20 blur-sm absolute" />
                    
                    {/* The iconic monogram */}
                    <span className="font-display text-white text-lg font-bold tracking-widest relative z-10">
                      LD
                    </span>
                  </div>
                </motion.div>

                {/* Satellite float details */}
                <div className="absolute top-4 left-6 border border-white/5 bg-[#050508]/60 px-3 py-1.5 rounded-sm backdrop-blur-md">
                  <p className="font-mono text-[8px] text-[#7c5cfc] uppercase tracking-widest">B.E. Mechanical</p>
                </div>
                <div className="absolute bottom-4 right-6 border border-white/5 bg-[#050508]/60 px-3 py-1.5 rounded-sm backdrop-blur-md">
                  <p className="font-mono text-[8px] text-[#99907c] uppercase tracking-widest">Precision Craft</p>
                </div>
              </div>

              {/* Bottom passport descriptors */}
              <div className="border-t border-white/[0.05] pt-5 relative z-10 flex justify-between items-end">
                <div>
                  <h4 className="font-display text-base font-bold text-white tracking-wider uppercase leading-none">
                    Larson Dsouza
                  </h4>
                  <p className="font-mono text-[9px] tracking-widest text-[#7c5cfc] uppercase mt-1.5">
                    Founder & Principal Designer
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[8px] tracking-widest text-[#99907c] uppercase block">
                    Portfolio Core
                  </span>
                  <span className="font-mono text-[10px] text-white font-bold tracking-widest uppercase mt-1 block">
                    ID: 2796-MH
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial story text blocks */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Introduction paragraph (Large lead-in style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              <p className="text-lg sm:text-xl text-white font-sans font-light leading-relaxed tracking-wide">
                <span className="text-[#7c5cfc] font-medium">Infinity Creations</span> was founded in <strong className="font-bold text-white">2022</strong> with one simple belief—that great design possesses the distinct visual gravity to fundamentally transform businesses. 
              </p>
              <p className="text-sm text-[#99907c] font-mono tracking-widest uppercase mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cfc]" /> Behind the studio is Larson Dsouza, a designer dedicated to visual storytelling.
              </p>
            </motion.div>

            {/* The Founder Story - Engineering to Design (Two-column format on desktop or nested grid) */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10 border-t border-white/[0.05] pt-10">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 text-[#7c5cfc]">
                  <Cpu size={14} />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-medium">Analytical Precision</span>
                </div>
                <p className="text-[#dfe3e9]/80 font-sans font-light text-sm sm:text-base leading-relaxed">
                  Larson completed his <strong className="text-white font-medium">Bachelor of Engineering (B.E.) in Mechanical Engineering</strong> from the prestigious <strong className="text-white font-medium">Fr. C. Rodrigues Institute of Technology (FCRIT), Vashi</strong>.
                </p>
                <p className="text-xs text-[#99907c] font-sans font-light leading-relaxed">
                  While engineering forged his structured thinking, discipline, and analytical problem-solving skills, his heart remained tethered to the endless horizons of visual arts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 text-[#7c5cfc]">
                  <PenTool size={14} />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-medium">The Creative Turn</span>
                </div>
                <p className="text-[#dfe3e9]/80 font-sans font-light text-sm sm:text-base leading-relaxed">
                  What started as a quiet hobby—experimenting with digital layouts, branding drafts, and typography—rapidly crystallized into a deep, consuming passion.
                </p>
                <p className="text-xs text-[#99907c] font-sans font-light leading-relaxed">
                  Over time, that pure passion matured into a professional mission: to empower businesses with bespoke, timeless visual identities that leave indelible impressions.
                </p>
              </motion.div>
            </div>

            {/* The Vision & Creative Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="bg-white/[0.01] border border-white/[0.04] p-6 sm:p-8 rounded-sm relative overflow-hidden group hover:border-[#7c5cfc]/20 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c5cfc]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#7c5cfc]/10 transition-colors duration-500" />
              
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers size={14} className="text-[#7c5cfc]" />
                Creative Symmetries
              </h3>
              
              <p className="text-[#dfe3e9]/80 font-sans font-light text-sm leading-relaxed mb-4">
                Since inception, the studio has reject generic aesthetic loops. We believe design is not merely about styling—it is about structural communication, cultivating client trust, and crafting deep psychological ties between a company and its market.
              </p>
              <p className="text-xs text-[#99907c] font-sans font-light leading-relaxed">
                Whether working with nimble startups or established entities, each project is handled as a sacred collaborative partnership where your deep-seated vision is translated surgically into premium physical or digital reality.
              </p>
            </motion.div>

            {/* The Services Capabilities Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="border-t border-white/[0.05] pt-8"
            >
              <span className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase font-bold block mb-6">
                Active Studio Capabilities
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {creativeServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 group cursor-default py-1"
                  >
                    <ArrowUpRight size={10} className="text-[#99907c] group-hover:text-[#7c5cfc] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="font-mono text-[11px] tracking-wide text-[#99907c] group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

        {/* Premium Signature Information Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 sm:mt-32 pt-16 border-t border-white/[0.04]"
        >
          {/* Subtle design accent label */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7c5cfc]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#99907c] font-semibold">
              Signature Specifications
            </span>
          </div>

          {/* Premium 2x2 grid with luxury dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-12 md:gap-x-20 relative">
            {/* Horizontal divider line on sm+ screens */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-y-1/2" />
            {/* Vertical divider line on sm+ screens */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent -translate-x-1/2" />

            {/* Block 1: Founded */}
            <div className="flex flex-col relative pb-8 sm:pb-0 border-b border-white/[0.03] sm:border-b-0">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#7c5cfc] uppercase font-bold mb-3">
                Founded
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                2022
              </h4>
            </div>

            {/* Block 2: Founder */}
            <div className="flex flex-col relative pb-8 sm:pb-0 border-b border-white/[0.03] sm:border-b-0 pl-0 sm:pl-8 md:pl-12">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#7c5cfc] uppercase font-bold mb-3">
                Founder
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Larson Dsouza
              </h4>
            </div>

            {/* Block 3: Based In */}
            <div className="flex flex-col relative pt-8 sm:pt-0 pb-8 sm:pb-0 border-b border-white/[0.03] sm:border-b-0">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#7c5cfc] uppercase font-bold mb-3">
                Based In
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Thane, Maharashtra, India
              </h4>
            </div>

            {/* Block 4: Specialization */}
            <div className="flex flex-col relative pt-8 sm:pt-0 pl-0 sm:pl-8 md:pl-12">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#7c5cfc] uppercase font-bold mb-3">
                Specialization
              </span>
              <h4 className="font-display text-base sm:text-lg md:text-xl font-medium text-white/95 tracking-wide leading-relaxed">
                Brand Identity <span className="text-[#7c5cfc]/50 mx-1 sm:mx-1.5">•</span> Graphic Design <span className="text-[#7c5cfc]/50 mx-1 sm:mx-1.5">•</span> Creative Design
              </h4>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
