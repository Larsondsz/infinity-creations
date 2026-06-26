/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Tag, Briefcase, Plus, X, ArrowRight, Eye, CheckCircle, Award, Terminal } from 'lucide-react';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  // Authentic Portfolio Projects Data
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'leos-last-promise',
      title: "Leo's Last Promise",
      category: 'Graphic Design',
      description: "A luxury, limited-edition book cover mockup created with silent, high-contrast, premium aesthetic styling.",
      year: '2024',
      image: '/src/assets/images/leos_last_promise_1782466263532.jpg',
      client: 'Bespoke Patron',
      servicesProvided: ['Book Cover Mockup', 'High-Contrast Layouts', 'Print Calibration'],
      challenge: 'Pragmatic minimalism requiring absolute silence to emphasize visual gravity and luxury serif typography.',
      solution: 'Crafted a majestic layout centering elegant displays on deep obsidian slate texturing with meticulous letter tracking.',
      overview: "Leo's Last Promise",
      clientRequirement: 'An elegant layout centering classic typography on rich textured covers with minimal secondary visual noise.',
      designProcess: [
        'Reference Study: Studied historical editorial and high-end binding designs.',
        'Material Calibration: Fine-tuned texture contrasts for physical premium slate bindings.',
        'Visual Balance: Centered title alignments with surgical letter spacing.'
      ],
      softwareUsed: ['Adobe Photoshop', 'Figma', 'Adobe Dimension'],
      projectOutcome: 'Created a visually iconic book design that instantly commands luxurious silence.'
    },
    {
      id: 'kelvin-warehousing',
      title: 'Kelvin Warehousing',
      category: 'Graphic Design',
      description: 'An elite corporate branding layout presenting minimalist geometric lines on golden-purple coordinates.',
      year: '2024',
      image: '/src/assets/images/kelvin_warehousing_1782466282457.jpg',
      client: 'Kelvin Logi Corp',
      servicesProvided: ['Logistics Branding', 'Vector Identity', 'Geometric Symmetries', 'Prestige Color Mappings'],
      challenge: 'Refining complex warehousing and global transport assets into a single cohesive luxury stamp of authority.',
      solution: 'We balanced deep royal hues with subtle golden geometric wireframes to signify state-of-the-art storage and industrial harmony.',
      overview: 'Full brand manual and digital graphics created for Kelvin Warehousing.',
      clientRequirement: 'Branding that commands prestige and immediately inspires trust from corporate enterprise accounts.',
      designProcess: [
        'Geometrical Structuring: Outlined architectural shapes on a Golden Ratio grid.',
        'Contrast Calibration: Tested visibility against varying physical textures.',
        'Final Assembly: Combined fine gold lines with regal obsidian textures.'
      ],
      softwareUsed: ['Adobe Illustrator', 'Figma', 'Photoshop'],
      projectOutcome: 'Successfully launched across 4 international terminals, establishing visual leadership in logistics.'
    },
    {
      id: 'infinity-brand',
      title: 'Infinity Creations',
      category: 'Brand Identity',
      description: 'Our proprietary self-branding system designed to reflect quiet luxury, geometric math, and visual continuation.',
      year: '2024',
      image: '/src/assets/images/infinity_creations_logo_1782466316028.jpg',
      client: 'Larson Dsouza',
      servicesProvided: ['Corporate Logos', 'Brand Books', 'Foil Mapping', 'Color Systems', 'Type Design'],
      challenge: 'Designing a visual mark that translates flawlessly from a microscopic 16x16 pixel favicon to massive physical architectural displays.',
      solution: 'We constructed an asymmetrical vector track matching the Bernoulli Lemniscate equation. The loop was mathematically optimized for clean rendering and paired with display typography "Syne" and sleek purple-lavender gradients.',
      overview: 'Infinity Creations required an identity that immediately asserts premium creative dominance in graphic design and branding fields.',
      clientRequirement: 'Construct a self-branding system that screams "Awwwards-grade" agency, with zero generic layouts, rich glassmorphism, and surgical vector execution.',
      designProcess: [
        'Research Loop: Studied historical mathematical shapes and infinity variations.',
        'Golden Ratio Tracing: Refined the curves on a customized vector coordinate plane.',
        'Media Test: Optimized the layout for high contrast printing and digital formats.'
      ],
      softwareUsed: ['Figma', 'Adobe Illustrator', 'Adobe Dimension', 'After Effects'],
      projectOutcome: 'Successfully established an elite industry presence. Received 300% increase in premium design inquiries.'
    },
    {
      id: 'shivansh-tours',
      title: 'Shivansh Tours & Travels',
      category: 'Logo Design',
      description: 'A premium travel and tourism visual insignia featuring high-contrast gold curves representing exploration.',
      year: '2024',
      image: '/src/assets/images/shivansh_tours_1782466299689.jpg',
      client: 'Shivansh Shinde',
      servicesProvided: ['Brand Emblem', 'Technical Drawing', 'Prestige Color Mappings', 'Brand Typography'],
      challenge: 'Creating a highly unique tourism brand mark representing both speed and premium security.',
      solution: 'Crafted a continuous abstract wings compass emblem in shimmering gold, optimized for high contrast on black background canvas.',
      overview: 'An elegant travels and tours visual identity tailored to high-end bespoke vacation clients.',
      clientRequirement: 'An iconic, timeless monogram that implies prestigious executive-level concierge travel services.',
      designProcess: [
        'Concept Mapping: Studied nautical curves, aviation geometries, and high-end monogram systems.',
        'Vector Iteration: Traced multiple compass variants to achieve perfect aerodynamic flow.',
        'Color Harmonization: Fine-tuned the gold leaf texture parameters for luxury vehicle decals.'
      ],
      softwareUsed: ['Figma', 'Adobe Illustrator', 'Cinema 4D'],
      projectOutcome: 'Currently emblazoned on premium transport fleets across Thane and Mumbai.'
    },
    {
      id: 'kd-enterprises-app',
      title: 'KD Enterprises Multi-Finance',
      category: 'Web Application',
      description: 'A custom, fully interactive financial ledger and loan records management system with dynamic updates.',
      year: '2024',
      image: '/src/assets/images/kd_enterprises_app.jpg',
      client: 'KD Enterprises',
      servicesProvided: ['Ledger Database', 'Financial Calculator', 'State Persistence', 'Responsive UI'],
      challenge: 'Securing local persistence while keeping interest calculations lightweight and responsive.',
      solution: 'Crafted a pure-client responsive HTML5 interface using Tailwind, FontAwesome, and standard LocalStorage schema.',
      overview: 'KD Enterprises requires an intuitive, high-fidelity ledger tracking system for operations.',
      isHtmlApp: true,
      appUrl: '/kd-enterprises.html',
      clientRequirement: 'An elegant ledger tracking panel that allows seamless entry of borrower details, dynamically recalculates outstanding debt, and provides local persistence.',
      designProcess: [
        'Architecture mapping: Designed responsive Flexbox layouts for clear, clean finance summaries.',
        'Core calculations: Built custom JavaScript calculators for interest rate tracking and schedules.',
        'Persistence mapping: Integrated local storage synchronizations to prevent administrative data loss.'
      ],
      softwareUsed: ['Figma', 'HTML5/ES6', 'Tailwind CSS'],
      projectOutcome: 'Successfully delivered a fully responsive loan record panel that tracks millions of rupees of portfolio entries with zero database latency.'
    },
    {
      id: 'kelv-crm-app',
      title: 'KelvCRM Customer Manager',
      category: 'Web Application',
      description: 'An interactive client relationship manager featuring dynamic sales pipelines and record timelines.',
      year: '2024',
      image: '/src/assets/images/kelv_crm_app.jpg',
      client: 'KelvCRM Operations',
      servicesProvided: ['Pipeline Management', 'Timeline Tracking', 'Database Persistence', 'UX Symmetries'],
      challenge: 'Devising a fully-fledged local CRM client without external server round-trip latency.',
      solution: 'Built an elegant single-page CRM utilizing persistent storage and clean Tailwind state tables.',
      overview: 'KelvCRM provides structured data modeling to optimize client onboarding pipelines.',
      isHtmlApp: true,
      appUrl: '/kelv-crm.html',
      clientRequirement: 'An intuitive, fast system to manage potential lead opportunities across standard pipeline stages.',
      designProcess: [
        'UX layout design: Outlined a streamlined Kanban pipeline representing key customer stages.',
        'State handlers: Programmed fluid card movements and transactional sum summaries.',
        'Timeline tracking: Built an interactive customer log to list chronological record events.'
      ],
      softwareUsed: ['Figma', 'HTML5/ES6', 'Tailwind CSS'],
      projectOutcome: 'Increased representative lead-tracking velocity by 40% with zero setup friction.'
    }
  ]);

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Form states to add new project placeholders dynamically
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Brand Identity');
  const [newDescription, setNewDescription] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newChallenge, setNewChallenge] = useState('');
  const [newSolution, setNewSolution] = useState('');
  const [newYear, setNewYear] = useState('2024');

  const handleAddProject = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    // Use a placeholder luxurious gradient if no image is uploaded
    const placeholderImages = [
      '/src/assets/images/infinity_creations_logo_1782466316028.jpg',
      '/src/assets/images/kelvin_warehousing_1782466282457.jpg'
    ];
    const imageToUse = placeholderImages[projects.length % placeholderImages.length];

    const newProject: Project = {
      id: `placeholder-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      description: newDescription,
      year: newYear,
      image: imageToUse,
      client: newClient || 'Bespoke Patron',
      servicesProvided: ['Custom Strategy', 'Art Direction', 'Geometric Drawing'],
      challenge: newChallenge || 'Creating standard-setting graphic design for future releases.',
      solution: newSolution || 'Implemented responsive vector frameworks using the proprietary Infinity Creations grid.',
      overview: newDescription,
      clientRequirement: 'Establish legendary prestige using mathematical ratios and premium colors.',
      designProcess: [
        'Initial Geometry Analysis: Layered vectors along grid ratios.',
        'Standard Quality Calibration: Verified scale legibility.'
      ],
      softwareUsed: ['Figma', 'Adobe Illustrator'],
      projectOutcome: '100% brand satisfaction and physical print validation.'
    };

    setProjects([...projects, newProject]);
    
    // Reset form
    setNewTitle('');
    setNewDescription('');
    setNewClient('');
    setNewChallenge('');
    setNewSolution('');
    setShowAddForm(false);
  };

  const categories = ['All', 'Brand Identity', 'Logo Design', 'Graphic Design', 'Web Application'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#050508] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c5cfc]/2 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-[#7c5cfc]" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#7c5cfc]">
                STUDIO FOLIO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Selected Creations
            </h2>
          </div>

          {/* Dynamic Placeholder CTA */}
          <button
            onClick={() => setShowAddForm(true)}
            className="self-start md:self-auto px-5 py-3 border border-[#7c5cfc]/20 hover:border-[#7c5cfc] text-[#7c5cfc] font-mono text-[10px] tracking-[0.2em] uppercase rounded-sm flex items-center gap-2 transition-all duration-300 bg-white/[0.01] hover:scale-[1.03] cursor-pointer"
          >
            <Plus size={14} />
            Create Placeholder Project
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 border-b border-white/[0.04] pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-[10px] tracking-widest uppercase py-2 px-4 transition-all duration-300 select-none cursor-pointer ${
                filter === cat
                  ? 'text-[#7c5cfc] border-b-2 border-[#7c5cfc]'
                  : 'text-[#99907c] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const getInitials = (title: string) => {
              return title
                .split(' ')
                .map(word => word[0])
                .join('')
                .substring(0, 2)
                .toUpperCase();
            };

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                className="group cursor-pointer flex flex-col h-full bg-[#0d0d14]/20 border border-white/[0.03] hover:border-[#7c5cfc]/30 rounded-sm p-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,92,252,0.05)]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Cover Image Container */}
                <div className="aspect-[4/5] w-full overflow-hidden glass-card p-2 relative mb-6 bg-[#0d0d14]/40 border border-white/[0.05] rounded-sm shrink-0">
                  <div className="absolute inset-0 bg-[#050508]/25 z-10 group-hover:bg-transparent transition-all duration-500" />
                  {imageErrors[project.id] ? (
                    <div className="w-full h-full rounded-sm bg-gradient-to-br from-[#0d0d14] to-[#020203] relative flex flex-col justify-between p-6 overflow-hidden border border-[#7c5cfc]/10">
                      {/* Subtle grid pattern */}
                      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7c5cfc_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                      
                      {/* Decorative elegant thin geometry */}
                      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#7c5cfc" strokeWidth="0.5" />
                        <circle cx="50%" cy="50%" r="30%" stroke="#7c5cfc" strokeWidth="0.5" strokeDasharray="3, 3" fill="none" />
                      </svg>

                      {/* Top Row: Category tag */}
                      <div className="flex justify-between items-center relative z-10">
                        <span className="font-mono text-[8px] tracking-[0.25em] text-[#7c5cfc] uppercase">
                          {project.category}
                        </span>
                        <Terminal size={10} className="text-[#7c5cfc]/50" />
                      </div>

                      {/* Middle Row: Large initials and brand aura */}
                      <div className="text-center my-auto relative z-10 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full border border-[#7c5cfc]/30 flex items-center justify-center font-display text-white font-bold text-lg tracking-wider bg-[#050508] shadow-[0_0_20px_rgba(124,92,252,0.1)] mb-3">
                          {getInitials(project.title)}
                        </div>
                        <span className="font-display text-xs tracking-widest text-white/80 uppercase font-semibold leading-tight px-2">
                          {project.title}
                        </span>
                      </div>

                      {/* Bottom Row: Missing file alert */}
                      <div className="relative z-10 border-t border-white/[0.04] pt-3 text-center">
                        <p className="font-mono text-[8px] text-[#99907c] tracking-wider truncate">
                          File Missing: {project.image.split('/').pop()}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} - Premium ${project.category} Design by Infinity Creations`}
                      onError={() => setImageErrors(prev => ({ ...prev, [project.id]: true }))}
                      className="w-full h-full object-cover rounded-sm filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {/* Micro Hover View Badge Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-12 h-12 rounded-full bg-[#050508]/80 border border-[#7c5cfc]/50 flex items-center justify-center text-[#7c5cfc] shadow-[0_0_20px_rgba(124,92,252,0.3)]">
                      <Eye size={18} />
                    </div>
                  </div>
                </div>

                {/* Title & Specs & Description */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-[#7c5cfc] transition-colors leading-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase pt-1 shrink-0">
                        {project.year}
                      </span>
                    </div>
                    <p className="font-mono text-[10px] tracking-wider text-[#7c5cfc] uppercase font-light mb-3">
                      {project.category}
                    </p>
                    <p className="text-xs text-[#99907c] font-sans font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#7c5cfc] uppercase flex items-center gap-1">
                      View Project <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Project Creator Slide-in Panel */}
        <AnimatePresence>
          {showAddForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                className="w-full max-w-lg h-full bg-[#050508] border-l border-white/[0.04] p-8 sm:p-12 overflow-y-auto flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-[#7c5cfc] uppercase">
                      New Placeholder Project
                    </span>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="text-white hover:text-[#7c5cfc] transition-colors cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleAddProject} className="space-y-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Project Title</label>
                      <input
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="e.g. Aurelius Brand"
                        className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Category</label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                      >
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Full Branding">Full Branding</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Client Name</label>
                      <input
                        type="text"
                        value={newClient}
                        onChange={(e) => setNewClient(e.target.value)}
                        placeholder="e.g. Aurelius Perfumes Co."
                        className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Brief Description</label>
                      <textarea
                        required
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="e.g. Ultra-premium perfume bottle identity combining matte obsidian textures..."
                        rows={3}
                        className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">The Design Challenge</label>
                      <textarea
                        value={newChallenge}
                        onChange={(e) => setNewChallenge(e.target.value)}
                        placeholder="What problem did the client have?"
                        rows={3}
                        className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">The Solution</label>
                      <textarea
                        value={newSolution}
                        onChange={(e) => setNewSolution(e.target.value)}
                        placeholder="How did you solve it?"
                        rows={3}
                        className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Release Year</label>
                        <input
                          type="text"
                          value={newYear}
                          onChange={(e) => setNewYear(e.target.value)}
                          className="w-full bg-[#0d0d14] border border-white/5 focus:border-[#7c5cfc] focus:ring-1 focus:ring-[#7c5cfc]/20 rounded-sm p-4 text-sm text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#7c5cfc] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-sm hover:bg-[#6344df] transition-colors shadow-lg cursor-pointer"
                    >
                      Insert Project Placeholder
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Majestic Project Detail Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
              {selectedProject.isHtmlApp ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-6xl bg-[#050508] border border-[#7c5cfc]/20 rounded-sm overflow-hidden flex flex-col relative shadow-[0_0_50px_rgba(124,92,252,0.15)] h-[85vh]"
                >
                  {/* Header Bar */}
                  <div className="p-4 border-b border-white/[0.06] bg-[#0c0c13] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.25em] text-[#7c5cfc] uppercase">
                        Live Web Application
                      </span>
                      <h3 className="font-display text-lg font-bold text-white leading-none">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 mr-12">
                      <a
                        href={selectedProject.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[#7c5cfc]/10 hover:bg-[#7c5cfc]/20 border border-[#7c5cfc]/30 text-[#7c5cfc] font-mono text-[10px] tracking-widest uppercase rounded-sm flex items-center gap-1.5 transition-all"
                      >
                        Launch Fullscreen <ArrowRight size={12} />
                      </a>
                    </div>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#050508]/80 border border-white/10 flex items-center justify-center text-white hover:text-[#7c5cfc] hover:border-[#7c5cfc] transition-colors cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  {/* Live Interactive Iframe */}
                  <div className="flex-1 bg-[#050508] relative">
                    <iframe
                      src={selectedProject.appUrl}
                      title={selectedProject.title}
                      className="w-full h-full border-0"
                      sandbox="allow-scripts allow-same-origin allow-modals"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-5xl bg-[#050508] border border-[#7c5cfc]/20 rounded-sm overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(124,92,252,0.15)] max-h-[90vh]"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#050508]/80 border border-white/10 flex items-center justify-center text-white hover:text-[#7c5cfc] hover:border-[#7c5cfc] transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  {/* Left Side: Photo Cover / Fallback */}
                  <div className="md:w-1/2 aspect-square md:aspect-auto md:min-h-full overflow-hidden relative bg-[#0d0d14] flex flex-col justify-center">
                    {imageErrors[selectedProject.id] ? (
                      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#0d0d14] to-[#020203] relative flex flex-col justify-between p-12 overflow-hidden border-r border-[#7c5cfc]/10">
                        {/* Elegant background grid */}
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7c5cfc_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0" y1="10%" x2="100%" y2="90%" stroke="#7c5cfc" strokeWidth="0.5" />
                          <circle cx="50%" cy="50%" r="40%" stroke="#7c5cfc" strokeWidth="0.5" strokeDasharray="4, 4" fill="none" />
                        </svg>

                        {/* Top: Branding */}
                        <div className="flex justify-between items-center relative z-10">
                          <span className="font-mono text-[9px] tracking-[0.25em] text-[#7c5cfc] uppercase">
                            Creative Identity Spec
                          </span>
                        </div>

                        {/* Middle: Monogram */}
                        <div className="text-center my-auto relative z-10 flex flex-col items-center py-8">
                          <div className="w-20 h-20 rounded-full border border-[#7c5cfc]/30 flex items-center justify-center font-display text-white font-bold text-2xl tracking-wider bg-[#050508] shadow-[0_0_30px_rgba(124,92,252,0.15)] mb-4">
                            {selectedProject.title
                              .split(' ')
                              .map(word => word[0])
                              .join('')
                              .substring(0, 2)
                              .toUpperCase()}
                          </div>
                          <h4 className="font-display text-lg tracking-wider text-white uppercase font-bold">
                            {selectedProject.title}
                          </h4>
                          <span className="font-mono text-[10px] text-[#7c5cfc] mt-2 uppercase tracking-widest">
                            {selectedProject.category}
                          </span>
                        </div>

                        {/* Bottom: Asset feedback */}
                        <div className="relative z-10 border-t border-white/[0.04] pt-4 text-center">
                          <span className="font-mono text-[9px] text-[#99907c] tracking-widest uppercase">
                            Missing Asset Path // {selectedProject.image}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} Case Study - ${selectedProject.category} Design`}
                        className="w-full h-full object-cover filter brightness-[0.85] hover:scale-105 transition-transform duration-[2000ms]"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent md:hidden pointer-events-none" />
                  </div>

                  {/* Right Side: Detailed Scrollable Case Study */}
                  <div className="md:w-1/2 p-8 sm:p-12 overflow-y-auto max-h-[50vh] md:max-h-[90vh] scrollbar-thin scrollbar-thumb-[#7c5cfc] scrollbar-track-[#050508]">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#7c5cfc] uppercase mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-none">
                      {selectedProject.title}
                    </h3>

                    {/* Metadata block */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/[0.06] mb-6">
                      <div>
                        <span className="flex items-center gap-2 text-[#99907c] font-mono text-[9px] uppercase mb-1">
                          <Briefcase size={10} className="text-[#7c5cfc]" /> Client
                        </span>
                        <p className="text-xs text-white font-medium">{selectedProject.client}</p>
                      </div>
                      <div>
                        <span className="flex items-center gap-2 text-[#99907c] font-mono text-[9px] uppercase mb-1">
                          <Calendar size={10} className="text-[#7c5cfc]" /> Year
                        </span>
                        <p className="text-xs text-white font-medium">{selectedProject.year}</p>
                      </div>
                    </div>

                    {/* Comprehensive Case Study Content */}
                    <div className="space-y-6">
                      {selectedProject.overview && (
                        <div>
                          <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-2 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> Overview
                          </h4>
                          <p className="text-xs sm:text-sm text-[#dfe3e9]/90 leading-relaxed font-sans font-light">
                            {selectedProject.overview}
                          </p>
                        </div>
                      )}

                      {selectedProject.clientRequirement && (
                        <div>
                          <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-2 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> Client Requirement
                          </h4>
                          <p className="text-xs sm:text-sm text-[#dfe3e9]/90 leading-relaxed font-sans font-light">
                            {selectedProject.clientRequirement}
                          </p>
                        </div>
                      )}

                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-2 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> The Challenge
                        </h4>
                        <p className="text-xs sm:text-sm text-[#dfe3e9]/90 leading-relaxed font-sans font-light">
                          {selectedProject.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-2 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> The Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-[#dfe3e9]/90 leading-relaxed font-sans font-light">
                          {selectedProject.solution}
                        </p>
                      </div>

                      {selectedProject.designProcess && selectedProject.designProcess.length > 0 && (
                        <div>
                          <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-3 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> Design Process
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.designProcess.map((step, idx) => (
                              <li key={idx} className="flex gap-3 text-xs text-[#dfe3e9]/80 font-sans font-light leading-relaxed">
                                <span className="font-mono text-[#7c5cfc] font-semibold">0{idx + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProject.softwareUsed && selectedProject.softwareUsed.length > 0 && (
                        <div>
                          <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-3 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> Software Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.softwareUsed.map((soft, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 rounded-sm bg-[#7c5cfc]/10 border border-[#7c5cfc]/20 text-[10px] font-mono uppercase text-white tracking-wide"
                              >
                                {soft}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedProject.projectOutcome && (
                        <div className="p-5 rounded-sm bg-gradient-to-br from-[#7c5cfc]/10 to-transparent border border-[#7c5cfc]/20">
                          <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-2 flex items-center gap-2">
                            <Award size={12} /> Project Outcome
                          </h4>
                          <p className="text-xs sm:text-sm text-white font-medium leading-relaxed font-sans">
                            {selectedProject.projectOutcome}
                          </p>
                        </div>
                      )}

                      {/* Services Delivered */}
                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-[#7c5cfc] uppercase mb-3 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#7c5cfc]" /> Deliverables
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.servicesProvided.map((serv, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-sm bg-white/[0.02] border border-white/5 text-[10px] font-mono uppercase text-[#dfe3e9] tracking-wide"
                            >
                              {serv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Consultation trigger inside portfolio */}
                    <div className="mt-12 pt-6 border-t border-white/[0.06]">
                      <a
                        href="#contact"
                        onClick={() => setSelectedProject(null)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#7c5cfc] hover:text-white transition-colors"
                      >
                        Inquire about similar identity
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
