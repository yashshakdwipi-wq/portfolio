import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { cn } from '../lib/utils';

export const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  const categories: (ProjectCategory | 'All')[] = ['All', 'UI/UX', '2D Graphics', '3D', 'Art', 'Short Film'];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-md">
              A selection of my recent work across UI/UX design, digital art, and 3D exploration.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  filter === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-accent/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => project.caseStudy && setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  {project.caseStudy && (
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      View Case Study
                      <ExternalLink size={14} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.caseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl" 
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-[2.5rem] overflow-y-auto shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-16">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                  Case Study: {selectedProject.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">
                  {selectedProject.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                  <div className="md:col-span-2 space-y-12">
                    <section>
                      <h3 className="text-xl font-bold mb-4">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.caseStudy.overview}
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold mb-4">The Problem</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xl font-bold mb-4">User Goals</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        {selectedProject.caseStudy.userGoals.map((goal, i) => (
                          <li key={i}>{goal}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                  <div className="space-y-8">
                    <div className="p-6 bg-muted/50 rounded-3xl border border-border">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Visual Identity</h4>
                      <div className="flex gap-2 mb-6">
                        {selectedProject.caseStudy.colors.map((color, i) => (
                          <div 
                            key={i} 
                            className="w-10 h-10 rounded-full border border-border" 
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Typography</h4>
                      <p className="text-muted-foreground">{selectedProject.caseStudy.typography}</p>
                    </div>
                    <div className="p-6 bg-accent/5 rounded-3xl border border-accent/20">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-accent">Outcome</h4>
                      <p className="text-sm leading-relaxed">{selectedProject.caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-20">
                  <section>
                    <h3 className="text-2xl font-bold mb-8 text-center">Wireframes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {selectedProject.caseStudy.wireframes.map((img, i) => (
                        <img key={i} src={img} alt="Wireframe" className="rounded-3xl border border-border" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                  </section>
                  <section>
                    <h3 className="text-2xl font-bold mb-8 text-center">Final UI Screens</h3>
                    <div className="grid grid-cols-1 gap-12">
                      {selectedProject.caseStudy.finalScreens.map((img, i) => (
                        <img key={i} src={img} alt="Final Screen" className="rounded-3xl border border-border w-full" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
