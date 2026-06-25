/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Search, Compass, Palette, ShieldCheck, Rocket, Eye } from 'lucide-react';
import { ProcessStep } from '../types';

export default function Process() {
  const steps: ProcessStep[] = [
    {
      stepNumber: '01',
      title: 'Discovery',
      description: 'We host interactive core mapping sessions to dig deep into your brand DNA, value markers, and target demographics.'
    },
    {
      stepNumber: '02',
      title: 'Research',
      description: 'Surgical analysis of direct competitors and international visual landscapes to identify absolute structural opportunities.'
    },
    {
      stepNumber: '03',
      title: 'Strategy',
      description: 'Architecting the visual roadmap, mood scales, and geometric parameters that will guide all downstream graphics.'
    },
    {
      stepNumber: '04',
      title: 'Design',
      description: 'Drafting vector options on custom golden ratio grids to produce timeless logos, structures, and visual blueprints.'
    },
    {
      stepNumber: '05',
      title: 'Refinement',
      description: 'Surgical calibration based on your feedback, fine-tuning typography weights, color values, and alignment coordinates.'
    },
    {
      stepNumber: '06',
      title: 'Delivery',
      description: 'Constructing your bespoke brand book, vector guidelines, social presets, and master assets for an immediate stratosphere launch.'
    }
  ];

  // Helper to render step icons
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass size={18} className="text-[#f2ca50]" />;
      case 1: return <Search size={18} className="text-[#f2ca50]" />;
      case 2: return <Eye size={18} className="text-[#f2ca50]" />;
      case 3: return <Palette size={18} className="text-[#f2ca50]" />;
      case 4: return <ShieldCheck size={18} className="text-[#f2ca50]" />;
      case 5: return <Rocket size={18} className="text-[#f2ca50]" />;
      default: return <Sparkles size={18} className="text-[#f2ca50]" />;
    }
  };

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#1b2025]/20 overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#f2ca50]/1 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#f2ca50]" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#f2ca50]">
              METHODOLOGY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Our Infinite Loop
          </h2>
          <p className="text-sm sm:text-base text-[#99907c] max-w-xl font-sans font-light leading-relaxed">
            A ritualistic six-step timeline designed to ensure absolute graphic perfection and elite brand alignment.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Continuous tracking line on desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.06] -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                  className="flex flex-col md:flex-row items-stretch gap-8 md:gap-0 relative"
                >
                  
                  {/* Left Column (Desktop) */}
                  <div className={`md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:order-2 md:pl-16'} items-center`}>
                    <div className={`glass-card p-8 inner-glow max-w-md w-full relative group ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                      <div className="flex items-center gap-3 mb-4 md:group-hover:translate-x-1 transition-transform duration-300">
                        {isEven && <span className="hidden md:inline-block ml-auto" />}
                        <div className="w-8 h-8 rounded-full bg-[#0a0f13] border border-white/[0.05] flex items-center justify-center">
                          {getStepIcon(index)}
                        </div>
                        <h3 className="font-display text-lg font-bold text-white tracking-wide">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#99907c] leading-relaxed font-sans font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-[#0a0f13] border-2 border-[#f2ca50] flex items-center justify-center font-mono text-[10px] text-[#f2ca50] font-bold shadow-[0_0_15px_rgba(242,202,80,0.3)]">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Empty Right Column Placeholder */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:order-2' : ''}`} />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
