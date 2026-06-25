/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Logo Design');
  const [msg, setMsg] = useState('');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Simulate luxury API transmit
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-24 bg-[#0f1418] overflow-hidden"
    >
      {/* Visual gold lines intersecting card */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f2ca50]/2 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Coordinates & Stats & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-[#f2ca50]" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#f2ca50]">
                  INQUIRE
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                Let's Architect{' '}
                <span className="italic font-light text-[#f2ca50]">Your Legacy</span>
              </h3>

              {/* Contact Metadata cards */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/[0.05] group-hover:border-[#f2ca50]/40 flex items-center justify-center bg-[#0a0f13] transition-colors duration-300">
                    <Mail className="text-[#f2ca50]" size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-[#99907c] uppercase">Direct Dispatch</p>
                    <a href="mailto:infinitycreation27@gmail.com" className="text-sm text-white hover:text-[#f2ca50] transition-colors font-light">
                      infinitycreation27@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/[0.05] group-hover:border-[#f2ca50]/40 flex items-center justify-center bg-[#0a0f13] transition-colors duration-300">
                    <Phone className="text-[#f2ca50]" size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-[#99907c] uppercase">Secure Direct Line</p>
                    <a href="tel:+918275997461" className="text-sm text-white hover:text-[#f2ca50] transition-colors font-light">
                      +91 8275997461
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/[0.05] group-hover:border-[#f2ca50]/40 flex items-center justify-center bg-[#0a0f13] transition-colors duration-300">
                    <MapPin className="text-[#f2ca50]" size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-[#99907c] uppercase">Studio Headquarters</p>
                    <p className="text-sm text-white font-light">
                      Thane, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Vector Map Placeholder representing Thane */}
            <div className="w-full h-48 glass-card border border-white/[0.05] rounded-sm p-4 relative overflow-hidden flex flex-col justify-between mb-8 group select-none">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f2ca50_1px,transparent_1px)] [background-size:12px_12px]" />
              
              {/* Fake coordinate line grid mapping of Thane */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#f2ca50" strokeWidth="0.5" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#f2ca50" strokeWidth="0.5" />
                <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#f2ca50" strokeWidth="0.5" />
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#f2ca50" strokeWidth="0.5" />
                <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#f2ca50" strokeWidth="0.5" />
                {/* Center radar ring target */}
                <circle cx="50%" cy="50%" r="30" stroke="#f2ca50" strokeWidth="0.75" fill="none" className="animate-ping" style={{ animationDuration: '4s' }} />
                <circle cx="50%" cy="50%" r="6" fill="#f2ca50" />
              </svg>

              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-[8px] tracking-[0.3em] text-[#99907c] uppercase">
                  Cartographical Coordinates
                </span>
                <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse" />
              </div>

              <div className="relative z-10">
                <h5 className="font-display text-sm font-bold text-white tracking-widest uppercase">
                  Thane Headquarters
                </h5>
                <p className="font-mono text-[9px] text-[#99907c] uppercase mt-1">
                  MH // 19.2183° N, 72.9781° E
                </p>
              </div>
            </div>

            {/* Micro Counter Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l border-white/[0.08] pl-4">
                <span className="font-display text-2xl font-bold text-[#f2ca50] block">100%</span>
                <span className="font-mono text-[8px] tracking-widest text-[#99907c] uppercase">Bespoke Design Rate</span>
              </div>
              <div className="border-l border-white/[0.08] pl-4">
                <span className="font-display text-2xl font-bold text-[#f2ca50] block">4.9★</span>
                <span className="font-mono text-[8px] tracking-widest text-[#99907c] uppercase">Client Trust Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & WhatsApp quick link */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1 }}
              className="glass-card p-8 sm:p-12 inner-glow flex flex-col justify-between h-full"
            >
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Name Input */}
                    <div className="space-y-2 relative">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">
                        Patron Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Larson Dsouza"
                        className="w-full bg-[#0a0f13] border-none border-b border-white/10 focus:border-[#f2ca50] focus:ring-0 transition-all duration-300 p-4 text-sm text-white"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">
                        Electronic Mail
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-[#0a0f13] border-none border-b border-white/10 focus:border-[#f2ca50] focus:ring-0 transition-all duration-300 p-4 text-sm text-white"
                      />
                    </div>

                    {/* Select Service Dropdown */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">
                        Select Capability
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#0a0f13] border-none border-b border-white/10 focus:border-[#f2ca50] focus:ring-0 transition-all duration-300 p-4 text-sm text-white select-none"
                      >
                        <option value="Logo Design">Logo Design</option>
                        <option value="Brand Identity Design">Brand Identity Design</option>
                        <option value="Social Media Design">Social Media Design</option>
                        <option value="Packaging Design">Packaging Design</option>
                        <option value="Marketing Materials">Marketing Materials</option>
                      </select>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest text-[#99907c] uppercase">
                        The Project Philosophy
                      </label>
                      <textarea
                        required
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="Tell us about your brand vision..."
                        rows={4}
                        className="w-full bg-[#0a0f13] border-none border-b border-white/10 focus:border-[#f2ca50] focus:ring-0 transition-all duration-300 p-4 text-sm text-white"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="w-full py-5 bg-[#f2ca50] hover:bg-[#d4af37] text-[#0a0f13] font-mono text-xs tracking-widest uppercase font-bold rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(242,202,80,0.15)] flex items-center justify-center gap-3 hover:scale-[1.01]"
                    >
                      Transmit Inquiry
                      <Send size={14} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full py-16"
                  >
                    <CheckCircle2 size={64} className="text-[#f2ca50] mb-6 animate-bounce" />
                    <h4 className="font-display text-2xl font-bold text-white mb-4">
                      Inquiry Transmitted Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-[#99907c] max-w-sm leading-relaxed mb-8">
                      Dear {name}, thank you for choosing Infinity Creations. Larson Dsouza will review your project philosophy and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 border border-white/10 hover:border-[#f2ca50] text-xs font-mono tracking-widest uppercase rounded-sm text-white hover:text-[#f2ca50] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* High-End WhatsApp Quick Connect Button */}
              <div className="border-t border-white/[0.06] pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-[9px] tracking-widest text-[#99907c] uppercase">
                  Prefer Immediate Counsel?
                </span>
                
                <a
                  href="https://wa.me/918275997461"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.2)] text-[10px] font-mono tracking-widest uppercase hover:scale-105"
                >
                  <MessageCircle size={14} />
                  Connect On WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
