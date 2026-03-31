import React from 'react';
import { motion } from 'motion/react';

export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Flowing Lines */}
      <svg className="w-full h-full opacity-10 dark:opacity-15" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          d="M-100,200 C200,100 400,300 600,200 S800,100 1100,200"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            x: [0, 50, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ filter: 'blur(1px)' }}
        />
        <motion.path
          d="M-100,500 C150,600 350,400 550,500 S750,600 1100,500"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            x: [-30, 30, -30],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          style={{ filter: 'blur(1px)' }}
        />
        <motion.path
          d="M-100,800 C250,700 450,900 650,800 S850,700 1100,800"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            x: [20, -20, 20],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          style={{ filter: 'blur(1px)' }}
        />
      </svg>

      {/* Subtle 2D Character Illustration Placeholder (Abstract) */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-muted-foreground">
          <motion.path
            d="M100,300 Q150,100 200,300 T300,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            animate={{ 
              d: [
                "M100,300 Q150,100 200,300 T300,300",
                "M100,300 Q150,150 200,300 T300,300",
                "M100,300 Q150,100 200,300 T300,300"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="180" y="200" width="40" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};
