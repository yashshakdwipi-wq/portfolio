import React from 'react';
import { Linkedin, Instagram, Send, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="text-2xl font-display font-bold tracking-tighter mb-6">
              YASH<span className="text-accent">.</span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              “Designing clean, user-friendly, and modern digital experiences”
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Categories</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#projects" className="hover:text-accent transition-colors">UI/UX Design</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">2D Graphics</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">3D Design</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Digital Art</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-muted rounded-xl hover:bg-accent hover:text-accent-foreground transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-3 bg-muted rounded-xl hover:bg-accent hover:text-accent-foreground transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-muted rounded-xl hover:bg-accent hover:text-accent-foreground transition-all"><Send size={20} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Designer. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
