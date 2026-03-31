import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Figma, Palette, Box, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const FloatingIcon = ({ children, delay, className }: { children: React.ReactNode, delay: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.4, scale: 1 }}
    transition={{ delay, duration: 1 }}
    className={cn("absolute p-4 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/50 floating", className)}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="grayscale opacity-50 blur-[0.5px]">
      {children}
    </div>
  </motion.div>
);

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Illustration (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-5">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M400 100 L400 700 M100 400 L700 400" stroke="currentColor" strokeWidth="0.5" />
          <motion.path 
            d="M200 200 Q400 400 600 200 T800 600" 
            fill="none" 
            stroke="var(--color-accent)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>
      </div>

      {/* Blur Dots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-dot" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-dot" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Yash Shakdwipi
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
            UI/UX <br />
            <span className="text-muted-foreground">Designer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-10 font-light leading-relaxed">
            “Designing clean, user-friendly, and modern digital experiences”
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-border rounded-full font-medium hover:bg-accent/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Content - Profile & Floating Icons */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src="https://picsum.photos/seed/designer/800/800" 
                alt="Designer Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Icons */}
            <FloatingIcon delay={0.5} className="-top-10 -left-10">
              <Figma size={32} />
            </FloatingIcon>
            <FloatingIcon delay={1.2} className="top-1/4 -right-12">
              <ImageIcon size={32} />
            </FloatingIcon>
            <FloatingIcon delay={0.8} className="-bottom-8 left-1/4">
              <Box size={32} />
            </FloatingIcon>
            <FloatingIcon delay={1.5} className="bottom-1/4 -left-16">
              <Palette size={32} />
            </FloatingIcon>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
