"use client";

import React from 'react';
import { AnimatedSection } from './animations/animated-section';
import { FloatingElement } from './animations/floating-element';
import { HoverScale } from './animations/hover-scale';
import { TextReveal } from './animations/text-reveal';
import { ScrollHighlight } from './animations/scroll-highlight';
import { motion } from 'framer-motion';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Step({ number, title, description, icon }: StepProps) {
  return (
    <AnimatedSection delay={0.2 * number} className="flex flex-col items-center text-center max-w-xs">
      <HoverScale rotate={5}>
        <div className="relative">
          <motion.div 
            className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="absolute -top-6 -left-6 w-12 h-12 bg-cyan-200 dark:bg-cyan-600/30 rounded-full opacity-40"
              animate={{ 
                rotate: [0, 45, 0],
                x: [0, 2, 0],
                y: [0, -2, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-200 dark:bg-blue-600/30 rounded-full opacity-40"
              animate={{ 
                rotate: [0, -30, 0],
                x: [0, -2, 0],
                y: [0, 2, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
            <div className="relative z-10 text-indigo-600 dark:text-indigo-300">
              {icon}
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            {number}
          </motion.div>
        </div>
      </HoverScale>
      
      <h3 className="text-xl font-semibold mb-2 text-display">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-body">{description}</p>
    </AnimatedSection>
  );
}

// Simple icons using SVG
const DraftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const StreakIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
    <path d="m2 12 5.25 5 2.625-5H16l-5.25-5L8 12H2Z"/><path d="m17 12 5 5"/><path d="m22 12-5-5"/>
  </svg>
);

const GrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

export function HowItWorks() {
  return (
    <section className="w-full py-16 section-divider dark:section-divider-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div 
          className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-cyan-100 dark:bg-cyan-900/20 blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="relative z-10">
        <AnimatedSection>
          <TextReveal
            text="How It Works"
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-display"
            delay={0.1}
          />
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 mx-auto mb-12 rounded-full"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </AnimatedSection>
        
        <ScrollHighlight className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          <Step 
            number={1}
            title="Draft" 
            description="Use AI to create engaging LinkedIn posts that resonate with your audience."
            icon={<DraftIcon />}
          />
          <Step 
            number={2}
            title="Streak" 
            description="Build consistent posting habits with gamified daily quests and XP rewards."
            icon={<StreakIcon />}
          />
          <Step 
            number={3}
            title="Grow" 
            description="Watch your LinkedIn reach and influence expand as you level up."
            icon={<GrowIcon />}
          />
        </ScrollHighlight>
      </div>
    </section>
  );
} 