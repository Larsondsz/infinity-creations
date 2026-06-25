/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  angle: number;
  alpha: number;
  fadeSpeed: number;
  color: string;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'fade-in' | 'drawing' | 'scroll-triggered' | 'completed'>('fade-in');
  const [hasScrolled, setHasScrolled] = useState(false);

  // Phases of intro:
  // 1. 'fade-in': INFINITY CREATIONS fades in
  // 2. 'drawing': The infinity symbol begins drawing behind the text
  // 3. 'scroll-triggered': On scroll, text dissolves to particles, particles transform to infinity symbol, shrink & morph
  // 4. 'completed': Intro overlay goes away, content shows

  useEffect(() => {
    // Stage triggers
    const fadeTimer = setTimeout(() => {
      setPhase('drawing');
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  // Listen to scroll to trigger particle morph
  useEffect(() => {
    const handleScrollOrClick = () => {
      if (hasScrolled || phase === 'fade-in') return;
      setHasScrolled(true);
      setPhase('scroll-triggered');

      // After 2.2s of majestic particle morphing, complete the intro and show home screen
      setTimeout(() => {
        setPhase('completed');
        setTimeout(() => {
          onComplete();
        }, 500);
      }, 2500);
    };

    window.addEventListener('scroll', handleScrollOrClick, { passive: true });
    window.addEventListener('click', handleScrollOrClick, { passive: true });
    window.addEventListener('touchstart', handleScrollOrClick, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrClick);
      window.removeEventListener('click', handleScrollOrClick);
      window.removeEventListener('touchstart', handleScrollOrClick);
    };
  }, [hasScrolled, phase, onComplete]);

  // Particle Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const numParticles = 240;

    // Build floaty gold particles initially
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        targetX: 0,
        targetY: 0,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.5 + 0.3,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        color: i % 2 === 0 ? '#f2ca50' : '#d4af37', // Dual gold colors
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let progress = 0; // Particle morph progress (0 to 1)

    // Lemniscate of Bernoulli formulas for placing target points of particles
    const getInfinityPoints = (t: number, w: number, h: number, scale: number, offsetShiftY = 0) => {
      // Bernoulli lemniscate formula
      const cosT = Math.cos(t);
      const sinT = Math.sin(t);
      const denom = 1 + sinT * sinT;
      const x = (scale * cosT) / denom;
      const y = (scale * sinT * cosT) / denom;
      return {
        x: w / 2 + x,
        y: h / 2 + y + offsetShiftY,
      };
    };

    const drawLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Render gold particles
      particles.forEach((p, idx) => {
        if (phase === 'scroll-triggered') {
          // Morph particles into the Infinity logo
          if (progress < 1) {
            progress += 0.00015; // Slow deliberate smooth morph
          }

          // Calculate infinity target location for each particle based on its index
          // We map the particle indices onto the range 0 to 2*PI
          const t = (idx / numParticles) * Math.PI * 2;
          
          // As we scroll, the scale of the infinity loop starts large and then shrinks!
          // We can also translate it toward the top left corner (e.g., x=48, y=40, where the navbar logo resides!)
          const finalScale = 35; // Size of navbar logo
          const startScale = 220; // Size of full screen logo
          const scale = startScale + (finalScale - startScale) * Math.min(progress * 1.5, 1);

          const finalX = 52;
          const finalY = 40;
          const startX = width / 2;
          const startY = height / 2;
          const currentCenterX = startX + (finalX - startX) * Math.min(progress * 1.5, 1);
          const currentCenterY = startY + (finalY - startY) * Math.min(progress * 1.5, 1);

          // Get target point on lemniscate
          const tCos = Math.cos(t);
          const tSin = Math.sin(t);
          const denom = 1 + tSin * tSin;
          const targetOffsetW = (scale * tCos) / denom;
          const targetOffsetH = (scale * tSin * tCos) / denom;

          p.targetX = currentCenterX + targetOffsetW;
          p.targetY = currentCenterY + targetOffsetH;

          // Interpolate particle coordinate toward its target
          const ease = 0.05 + progress * 0.05; // Slightly speed up as it snaps
          p.x += (p.targetX - p.x) * ease;
          p.y += (p.targetY - p.y) * ease;

          // Increase transparency for tight logo form
          p.alpha = Math.min(p.alpha + 0.01, 0.9);
          p.size = Math.max(p.size - 0.01, 1.2);
        } else {
          // Idle ambient float behavior
          p.angle += p.speed * 0.02;
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;

          // Boundary checks for floaters
          if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = phase === 'scroll-triggered' ? 4 : 0;
        ctx.shadowColor = '#f2ca50';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      // Ambient faint gold grid lines drawing under the text if state is drawing
      if (phase === 'drawing') {
        ctx.strokeStyle = 'rgba(242, 202, 80, 0.03)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        // Draw diagonal golden luxury lines reminiscent of Ava Blackwood layout
        ctx.moveTo(0, height * 0.2);
        ctx.lineTo(width, height * 0.8);
        ctx.moveTo(width * 0.1, height);
        ctx.lineTo(width * 0.8, 0);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== 'completed' && (
        <motion.div
          id="intro-portal"
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#0a0f13] overflow-hidden flex flex-col items-center justify-center select-none"
        >
          {/* Main Background Particles Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Golden abstract visual gradients behind text */}
          <div className="absolute inset-0 infinity-halo opacity-50 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Extremely large luxury typography in the center of the screen */}
            <AnimatePresence>
              {phase !== 'scroll-triggered' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <p className="font-mono text-xs tracking-[0.4em] text-[#d4af37] mb-4 uppercase opacity-80">
                    Premium Branding Studio
                  </p>
                  
                  <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-[0.25em] text-white leading-none text-center select-none">
                    INFINITY
                    <span className="block mt-2 font-light text-[#f2ca50] tracking-[0.18em]">
                      CREATIONS
                    </span>
                  </h1>

                  <p className="font-mono text-[10px] tracking-[0.3em] text-[#99907c] mt-6 uppercase">
                    By Larson Dsouza
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulsing infinite icon behind the text as an SVG that draws itself */}
            {phase === 'drawing' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20">
                <svg
                  width="450"
                  height="250"
                  viewBox="0 0 450 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-lg"
                >
                  <motion.path
                    d="M125,125 C40,40 40,210 125,125 L325,125 C410,40 410,210 325,125 Z"
                    stroke="#f2ca50"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: 'easeInOut' }}
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Interactive Scroll / Tap CTA to help user cross */}
          {phase !== 'scroll-triggered' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer z-20 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase">
                Scroll or Tap to Enter
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-[1px] h-8 bg-gradient-to-b from-[#f2ca50] to-transparent"
              />
            </motion.div>
          )}

          {/* Atmospheric ambient sound indicator or branding marker */}
          <div className="absolute top-8 right-8 pointer-events-none opacity-40 hidden md:block">
            <span className="font-mono text-[9px] tracking-widest text-[#99907c]">
              IC // THANE, MH
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
