import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export const Contact = () => {
  const contactLinks = [
    { 
      icon: <Mail size={24} />, 
      label: 'Email', 
      value: 'hello@designer.com', 
      href: 'mailto:hello@designer.com' 
    },
    { 
      icon: <Linkedin size={24} />, 
      label: 'LinkedIn', 
      value: 'Yash Shakdwipi', 
      href: '#' 
    },
    { 
      icon: <Instagram size={24} />, 
      label: 'Instagram', 
      value: '@yash_design', 
      href: '#' 
    },
  ];

  return (
    <section id="contact" className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-16 font-light"
          >
            Feel free to reach out
          </motion.p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="p-5 bg-background rounded-full border border-border group-hover:border-accent group-hover:text-accent group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                  {link.icon}
                </div>
                <div className="text-center">
                  <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <span className="block text-lg font-medium">
                    {link.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
