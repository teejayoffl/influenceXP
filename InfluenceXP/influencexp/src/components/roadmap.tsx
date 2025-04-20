"use client";

import React from 'react';
import { AnimatedSection } from './animations/animated-section';
import { HoverScale } from './animations/hover-scale';
import { motion } from 'framer-motion';

interface RoadmapItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function RoadmapItem({ title, description, icon, delay }: RoadmapItemProps) {
  return (
    <AnimatedSection delay={delay} className="flex flex-col items-center text-center">
      <motion.div
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-xl flex items-center justify-center mb-4 border border-indigo-200 dark:border-indigo-800 shadow-md"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-display">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-body">{description}</p>
    </AnimatedSection>
  );
}

const PublishIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
    <path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>
  </svg>
);

const LeaderboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/>
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 dark:text-cyan-300">
    <path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
  </svg>
);

export function Roadmap() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-900 section-divider dark:section-divider-dark">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-10 opacity-30 dark:opacity-10">
          <div className="w-40 h-40 rounded-full bg-indigo-200 dark:bg-indigo-700 blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 right-0 opacity-30 dark:opacity-10">
          <div className="w-60 h-60 rounded-full bg-cyan-200 dark:bg-cyan-700 blur-3xl"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4 text-display text-balance">Roadmap to LinkedIn Success</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lead text-body">
            We're building the ultimate toolset to help you grow your LinkedIn influence and reach
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <RoadmapItem 
            title="Auto-Publishing" 
            description="Directly publish to LinkedIn with our API integration and schedule posts for optimal engagement times"
            icon={<PublishIcon />}
            delay={0.2}
          />
          <RoadmapItem 
            title="Leaderboards" 
            description="Compare your progress with others in your niche and climb the ranks of LinkedIn influencers"
            icon={<LeaderboardIcon />}
            delay={0.3}
          />
          <RoadmapItem 
            title="Video Templates" 
            description="Create engaging video content with AI-powered templates designed for maximum LinkedIn reach"
            icon={<VideoIcon />}
            delay={0.4}
          />
        </div>
        
        <AnimatedSection delay={0.6} className="mt-16 text-center">
          <HoverScale>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold hover:from-indigo-700 hover:via-blue-600 hover:to-cyan-500 shadow-md transition-all text-display">
              Join Waitlist for Early Access
            </button>
          </HoverScale>
        </AnimatedSection>
      </div>
    </section>
  );
} 