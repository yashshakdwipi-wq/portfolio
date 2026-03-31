import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { SKILLS, TOOLS } from '../constants';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                I’m Yash Shakdwipi, a UI/UX designer focused on creating clean, user-friendly, and modern digital experiences. UI/UX is my primary focus, and I’m continuously improving my skills by working on practical projects and refining my design thinking.
              </p>
              <p>
                Alongside design, I’m passionate about drawing and visual storytelling. I explore 2D work and enjoy experimenting with concepts like flipbooks and storyboard art. While I’m still developing my skills in this area, I actively practice and use drawing as a way to strengthen my creativity and visual understanding.
              </p>
              <p>
                I’m driven to grow in this field and build work that is both visually strong and meaningful.
              </p>
            </div>
            <div className="flex gap-6 mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Skills & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {TOOLS.map((tool) => (
                  <div 
                    key={tool}
                    className="p-4 border border-border rounded-2xl text-center text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
