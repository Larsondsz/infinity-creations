/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Sparkles, 
  Feather, 
  Layers, 
  Share2, 
  Contact, 
  Files, 
  Image, 
  Package, 
  Megaphone 
} from 'lucide-react';
import { Service } from '../types';

export default function Services() {
  const servicesList: Service[] = [
    {
      id: 'logo',
      title: 'Logo Design',
      icon: 'Feather',
      description: 'Iconic primary symbols mathematically styled to anchor your entire visual ecosystem.',
      details: ['Golden ratio drafting', 'High-contrast monochrome test', 'Multi-scale responsive variations', 'Trademark-ready constructs']
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      icon: 'Layers',
      description: 'Holistic visual systems including color structures, typographic pairing, and standards.',
      details: ['Luxury typography scales', 'Cohesive emotional palettes', 'Complete brand books & specs', 'Visual hierarchy formulas']
    },
    {
      id: 'social-media',
      title: 'Social Media Design',
      icon: 'Share2',
      description: 'Stunning premium social templates, creatives, and visual streams to captivate grids.',
      details: ['Curated grid layouts', 'High-engagement color codes', 'Custom luxury highlight covers', 'Video layout blueprints']
    },
    {
      id: 'business-card',
      title: 'Business Card Design',
      icon: 'Contact',
      description: 'Tactile masterworks featuring custom textures, gold foiling ratios, and premium weights.',
      details: ['Concentric layout mapping', 'Embossing & debossing specs', 'Specialty paper pairing advice', 'Luxury double-sided graphics']
    },
    {
      id: 'flyer',
      title: 'Flyer Design',
      icon: 'Files',
      description: 'Sleek visual handouts that blend heavy negative space with bold focus headers.',
      details: ['Clean typography hierarchy', 'Balanced asymmetric grid', 'Premium paper size adaptations', 'Call-to-action optimization']
    },
    {
      id: 'poster',
      title: 'Poster Design',
      icon: 'Image',
      description: 'Statement art prints for physical spaces that transform corporate messages into visual poetry.',
      details: ['Cinematic scale ratios', 'Limited-palette color theory', 'Architectural alignment rules', 'High-resolution vectors']
    },
    {
      id: 'packaging',
      title: 'Packaging Design',
      icon: 'Package',
      description: 'Three-dimensional luxury boxes, bags, and containers that amplify unboxing rituals.',
      details: ['Surgical package templates', 'Embossed foil mapping', 'Sustainable luxury materials', 'Tactile unboxing timelines']
    },
    {
      id: 'marketing-materials',
      title: 'Marketing Materials',
      icon: 'Megaphone',
      description: 'Comprehensive branded stationary, banners, brochures, and sales kit visuals.',
      details: ['Corporate visual consistency', 'Custom pitch-deck guidelines', 'Branded sales letter templates', 'Polished collateral blueprints']
    }
  ];

  // Helper to render Lucide Icons by name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather': return <Feather size={24} className="text-[#7c5cfc]" />;
      case 'Layers': return <Layers size={24} className="text-[#7c5cfc]" />;
      case 'Share2': return <Share2 size={24} className="text-[#7c5cfc]" />;
      case 'Contact': return <Contact size={24} className="text-[#7c5cfc]" />;
      case 'Files': return <Files size={24} className="text-[#7c5cfc]" />;
      case 'Image': return <Image size={24} className="text-[#7c5cfc]" />;
      case 'Package': return <Package size={24} className="text-[#7c5cfc]" />;
      case 'Megaphone': return <Megaphone size={24} className="text-[#7c5cfc]" />;
      default: return <Sparkles size={24} className="text-[#7c5cfc]" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#050508] overflow-hidden"
    >
      {/* Infinity shape faint outline background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#7c5cfc]/2 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#c084fc]/1 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#7c5cfc]" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#7c5cfc]">
              CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Bespoke Services
          </h2>
          <p className="text-sm sm:text-base text-[#99907c] max-w-xl font-sans font-light leading-relaxed">
            Every service is executed with rigorous geometric discipline to elevate your brand to the absolute peak of prestige.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
              className="glass-card p-8 inner-glow flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 bg-[#0d0d14]/50 border-white/[0.05] relative group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full border border-white/[0.05] group-hover:border-[#7c5cfc]/50 flex items-center justify-center mb-8 bg-[#050508] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.05)] transition-all duration-300">
                  {renderIcon(service.icon)}
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-semibold text-white tracking-wide mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs text-[#99907c] leading-relaxed mb-6 font-sans font-light">
                  {service.description}
                </p>
              </div>

              {/* Miniature Bullets list on hover */}
              <div className="border-t border-white/[0.04] pt-4 mt-2">
                <ul className="space-y-2">
                  {service.details.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] font-mono text-[#dfe3e9]/70 tracking-wide uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative border vector glow */}
              <div className="absolute top-0 right-0 w-2 h-[1px] bg-[#7c5cfc]/0 group-hover:bg-[#7c5cfc]/100 transition-all duration-500" />
              <div className="absolute top-0 right-0 h-2 w-[1px] bg-[#7c5cfc]/0 group-hover:bg-[#7c5cfc]/100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
