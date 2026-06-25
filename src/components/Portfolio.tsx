/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Tag, Briefcase, Plus, X, ArrowRight, Eye, CheckCircle } from 'lucide-react';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  // Dynamic Projects State to allow creation of placeholders "ready for future uploads"
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'aurelius',
      title: 'Aurelius Luxury',
      category: 'Brand Identity',
      description: 'Ultra-premium perfume bottle identity combining matte obsidian textures and gold calligraphy accents.',
      year: '2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg7_Montu7jO1_cUZzz3RLKw5EnusSPUWe9jARmYvU3Z5CDt_kCwbLoUWlI2ZPDUisusDtMf9dG9asjLr0O5UhlfjOcu06QSfvFn__dGBMKcdJyllgGHxsFk5VNPwdHSrXCjKMuH19IKxA95UbpedUIpSHiaYhdtgQlLCTLaKdEhqF6XQGB1IahNv_CqFJozM8VcJuiv0WKbFMKP5KEmPL0wOE5aYyaFZBYeqWYPWApc-P2zyQJE31gD2RFigFOlzreN3jJw1oc-U',
      client: 'Aurelius Perfumes Co.',
      servicesProvided: ['Corporate Logos', 'Product Outer Box', 'Foil Mapping', 'Color Systems'],
      challenge: 'The client needed an identity that felt completely unapproachable yet intensely desirable for a limited 500-unit high-end product run.',
      solution: 'We constructed an asymmetrical golden monogram using vector lemniscate loops, perfectly mirrored on thick textured boxes.'
    },
    {
      id: 'chronos',
      title: 'Chronos Tech',
      category: 'Logo Design',
      description: 'Sophisticated visual insignia utilizing microscopic mechanical geometry overlays.',
      year: '2023',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjCjiPYUwSoc4e9fJ3x9TBpTpOtm6vYYOstIKvCbSiXCkWIvuRUaCvbXiFqSMJ7VX7rJGbBQpkh10JvKjoY2q718j_kNQgE4xHlugid3ph2KK2IOcpYy5Eb7mMS6zqk8J7TDSlFkD-n8WOLXIYJh4WR6DhvcLMHupAz1Cee7VuQDcMKqISNvHXirFxiblGk0WdraOCHSG4dx-heHxK2SLWXxpjDf2ABMPltvLsb7vmB4m_cLj_wvwZCFE5OXDG8vV20ZRTRplWawg',
      client: 'Chronos Horology Corp.',
      servicesProvided: ['Iconic Monogram', 'Mechanical Blueprints', 'Technical Drawing', 'Typography Specs'],
      challenge: 'Unifying precision engineering and horological heritage into a clean logo readable at 8mm size on mechanical dials.',
      solution: 'A hand-refined vector alignment merging two intersecting circular arcs, matching luxury watch crown details.'
    },
    {
      id: 'skyline',
      title: 'Skyline Elite',
      category: 'Full Branding',
      description: 'Architectural real estate branding displaying minimalist rose-gold curves on obsidian space.',
      year: '2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOTtIdgsTqu_zvQfshcYER_J0P5ui90VwZqU6bu1hfquouHNi5py7ihrnfeTq9kHDPcImyfWWIcwUyVkCIZzqahqbZMaEqHbpI2Y0sdJPkCj2C-qKxD7jBmLhAVQDtHXp4miNUgs2v6A5eJv_Df8n-FLjZZGecwclgI1TuGW3RlTpGYxwOhUCfpN_DN57VS5bHs8BZGmqZUtNXXxORjo9dJozJFBMI1_7d3AvI6YyDgGmCH3GUQoYdhMmh7nCobb5OCXAHJgXbWMA',
      client: 'Skyline Properties Ltd.',
      servicesProvided: ['Identity System', 'Sales Kit Brochure', 'Digital Grids', 'Billboard Graphics'],
      challenge: 'Distinguishing an ultra-luxury duplex tower from hundreds of Mumbai skyscrapers through identity alone.',
      solution: 'An elegant emblem using absolute vertical symmetry and continuous gold ribbons to represent architectural continuity.'
    }
  ]);

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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5KJ4NUtLvI-gE7TrC61cqRa7-mbCBpVXxROvw1tQd8yO4Cd-JXuQSAxeILeZA36mbzOOvEhh-FzOAete6ctbi-64xHbSiqzVgnghmKQ9h5q7ABnhFgNA-hSeEIMNlvq_uOvbBqXVQPFkrn1PcMxayCX7rLj4PSG33nRh0ErH8pQCVPMNKn_yLicSZBx3skWHHyAvw1VtMqbe9r2CnUdYUSWp11amMdDjLfnz48TKlNuAHJknDbu5WHCyIobIQ-524uq02IFvkjRI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDL1yN7dtPHb8hnPLWWiNsm4lSQmj5XrzyDRQoGdNBEsLQg-8S0D4Y6d44k2xSh5FBQHq-Kj7yvhLNuJJ9pQ7nt9irccJJgsVE15BFeGiMjZkKtUYQgh_DJwS2naD9tvgPnw4_EhGKKiybkbjD23BgL_XW08VWYUIwfNNRo3yBTlNP6Joar0XMZ87uloLLOLMo4qB03MVfw2hQvhKWIknMgDz1ni2YJgLol04Oq0kjeqHnkhv5NDbCg9D74ATpJkkyIGNrp7yLLp0Q'
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
      solution: newSolution || 'Implemented responsive vector frameworks using the proprietary Infinity Creations grid.'
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

  const categories = ['All', 'Brand Identity', 'Logo Design', 'Full Branding'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#0a0f13] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f2ca50]/1 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-[#f2ca50]" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#f2ca50]">
                STUDIO FOLIO
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Selected Creations
            </h3>
          </div>

          {/* Dynamic Placeholder CTA */}
          <button
            onClick={() => setShowAddForm(true)}
            className="self-start md:self-auto px-5 py-3 border border-[#f2ca50]/20 hover:border-[#f2ca50] text-[#f2ca50] font-mono text-[10px] tracking-[0.2em] uppercase rounded-sm flex items-center gap-2 transition-all duration-300 bg-white/[0.01] hover:scale-[1.03]"
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
              className={`font-mono text-[10px] tracking-widest uppercase py-2 px-4 transition-all duration-300 select-none ${
                filter === cat
                  ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                  : 'text-[#99907c] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              {/* Cover Image Container */}
              <div className="aspect-[4/5] w-full overflow-hidden glass-card p-2 relative mb-6">
                <div className="absolute inset-0 bg-[#0f1418]/20 z-10 group-hover:bg-transparent transition-all duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-sm filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Micro Hover View Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-12 h-12 rounded-full bg-[#0a0f13]/80 border border-[#f2ca50]/50 flex items-center justify-center text-[#f2ca50]">
                    <Eye size={18} />
                  </div>
                </div>
              </div>

              {/* Title & Specs */}
              <div className="flex items-center justify-between">
                <h4 className="font-display text-xl font-bold text-white group-hover:text-[#f2ca50] transition-colors">
                  {project.title}
                </h4>
                <span className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">
                  {project.year}
                </span>
              </div>
              <p className="font-mono text-[11px] tracking-wider text-[#99907c] uppercase mt-1">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Project Creator Slide-in Panel */}
        <AnimatePresence>
          {showAddForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                className="w-full max-w-lg h-full bg-[#0a0f13] border-l border-white/[0.04] p-8 sm:p-12 overflow-y-auto flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-[#f2ca50] uppercase">
                      New Placeholder Project
                    </span>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="text-white hover:text-[#f2ca50] transition-colors"
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
                        className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Category</label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
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
                        className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
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
                        className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">The Design Challenge</label>
                      <textarea
                        value={newChallenge}
                        onChange={(e) => setNewChallenge(e.target.value)}
                        placeholder="What problem did the client have?"
                        rows={3}
                        className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">The Solution</label>
                      <textarea
                        value={newSolution}
                        onChange={(e) => setNewSolution(e.target.value)}
                        placeholder="How did you solve it?"
                        rows={3}
                        className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">Release Year</label>
                        <input
                          type="text"
                          value={newYear}
                          onChange={(e) => setNewYear(e.target.value)}
                          className="w-full bg-[#1b2025]/50 border border-white/5 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/20 rounded-sm p-4 text-sm text-white"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#f2ca50] text-[#0a0f13] font-mono text-xs tracking-widest uppercase font-bold rounded-sm hover:bg-[#d4af37] transition-colors shadow-lg"
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-4xl bg-[#0a0f13] border border-white/[0.05] rounded-sm overflow-hidden flex flex-col md:flex-row relative shadow-2xl max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0f13]/80 border border-white/10 flex items-center justify-center text-white hover:text-[#f2ca50] hover:border-[#f2ca50] transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Left Side: Photo */}
                <div className="md:w-1/2 aspect-square md:aspect-auto md:min-h-full overflow-hidden relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f13] via-transparent to-transparent md:hidden" />
                </div>

                {/* Right Side: Details description */}
                <div className="md:w-1/2 p-8 sm:p-12 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#f2ca50] uppercase mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h4 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-none">
                    {selectedProject.title}
                  </h4>

                  {/* Metadata block */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/[0.06] mb-6">
                    <div>
                      <span className="flex items-center gap-2 text-[#99907c] font-mono text-[9px] uppercase mb-1">
                        <Briefcase size={10} /> Client
                      </span>
                      <p className="text-xs text-white font-medium">{selectedProject.client}</p>
                    </div>
                    <div>
                      <span className="flex items-center gap-2 text-[#99907c] font-mono text-[9px] uppercase mb-1">
                        <Calendar size={10} /> Year
                      </span>
                      <p className="text-xs text-white font-medium">{selectedProject.year}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-mono text-[10px] tracking-widest text-[#f2ca50] uppercase mb-2">The Challenge</h5>
                      <p className="text-xs sm:text-sm text-[#dfe3e9] leading-relaxed font-sans font-light">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-mono text-[10px] tracking-widest text-[#f2ca50] uppercase mb-2">The Solution</h5>
                      <p className="text-xs sm:text-sm text-[#dfe3e9] leading-relaxed font-sans font-light">
                        {selectedProject.solution}
                      </p>
                    </div>

                    {/* Services Delivered */}
                    <div>
                      <h5 className="font-mono text-[10px] tracking-widest text-[#f2ca50] uppercase mb-3">Deliverables</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.servicesProvided.map((serv, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-mono uppercase text-[#dfe3e9] tracking-wide"
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
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#f2ca50] hover:text-white transition-colors"
                    >
                      Inquire about similar identity
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
