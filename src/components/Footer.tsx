/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] py-16 px-6 sm:px-12 md:px-24 border-t border-white/[0.04]">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-4">
            {/* Minimal Infinity vector logo */}
            <svg
              width="24"
              height="14"
              viewBox="0 0 34 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#7c5cfc]"
            >
              <path
                d="M9,9 C3,3 3,15 9,9 L25,9 C31,3 31,15 25,9 Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-display font-bold text-sm tracking-[0.25em] text-white uppercase">
              INFINITY
              <span className="font-light text-[10px] tracking-[0.15em] ml-2 text-[#99907c]">
                CREATIONS
              </span>
            </span>
          </div>

          <p className="text-xs text-[#99907c] max-w-sm leading-relaxed font-sans font-light">
            Infinity Creations is a premium branding and graphic design studio based in Thane, Maharashtra offering logo design, brand identity design, social media creatives, and marketing materials.
          </p>
        </div>

        {/* Back To Top Spot */}
        <button
          onClick={handleScrollToTop}
          className="w-12 h-12 rounded-full border border-white/[0.05] hover:border-[#7c5cfc] flex items-center justify-center text-[#99907c] hover:text-[#7c5cfc] transition-colors duration-300 cursor-pointer"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* Corporate Metadata block containing SEO text */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left select-none">
        
        {/* SEO Metadata */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-[9px] font-mono text-[#99907c]/40 uppercase tracking-widest">
          <span>Logo Design</span>
          <span>•</span>
          <span>Brand Identity</span>
          <span>•</span>
          <span>Social Media Creatives</span>
          <span>•</span>
          <span>Marketing Materials</span>
          <span>•</span>
          <span>Thane, Maharashtra</span>
        </div>

        <p className="font-mono text-[9px] tracking-[0.2em] text-[#99907c]/40 uppercase">
          © {new Date().getFullYear()} INFINITY CREATIONS. ALL RIGHTS RESERVED.
        </p>
      </div>

    </footer>
  );
}
