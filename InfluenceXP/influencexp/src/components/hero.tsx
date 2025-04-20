"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Button } from './ui/button';
import { AnimatedSection } from './animations/animated-section';
import { FloatingElement } from './animations/floating-element';
import { HoverScale } from './animations/hover-scale';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { DashboardCard } from './ui/dashboard-card';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Delay loading the dashboard mockup
  useEffect(() => {
    // Mark component as loaded
    setIsLoaded(true);
    
    // Show critical content first
    const timer = setTimeout(() => {
      setShowDashboard(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Optimize rendering for best performance
  useEffect(() => {
    if (isLoaded) {
      // Add a class to the document to indicate page is loaded
      document.documentElement.classList.add('page-loaded');
    }
  }, [isLoaded]);

  return (
    <div 
      ref={ref}
      className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Simplified background decoration with will-change for better performance */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-900/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-cyan-200 dark:bg-cyan-900/30 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <AnimatedSection delay={0.1}>
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-800/20 rounded-full px-4 py-1 text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-6">
            Coming Soon
          </div>
        </AnimatedSection>
        
        {/* Prioritize loading the headline and description */}
        <div className="hero-content">
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-300 text-balance">
              Rack up XP, unlock badges, and watch your LinkedIn reach explode.
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lead text-body font-light text-balance">
              The gamified dashboard for ambitious professionals that combines AI post planning with habit-forming mechanics.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverScale>
                <Button 
                  className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 hover:from-indigo-700 hover:via-blue-600 hover:to-cyan-500 text-white px-8 py-6 h-auto text-lg shadow-lg"
                  onClick={() => {
                    const waitlistSection = document.getElementById('waitlist');
                    if (waitlistSection) {
                      waitlistSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Join the wait-list
                </Button>
              </HoverScale>
              
              <HoverScale>
                <Link href="/learn-more">
                  <Button 
                    variant="outline" 
                    className="px-8 py-6 h-auto text-lg border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                  >
                    Learn more
                  </Button>
                </Link>
              </HoverScale>
            </div>
          </AnimatedSection>
          
          {/* Only render dashboard when ready and after initial content is loaded */}
          {showDashboard && (
            <AnimatedSection delay={0.6} className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10 h-24 bottom-0 top-auto"></div>
              <motion.div 
                className="w-full max-w-3xl mx-auto overflow-hidden rounded-t-xl border border-gray-200 dark:border-gray-800 shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.7 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 h-80 relative overflow-hidden">
                  <DashboardMockup />
                </div>
              </motion.div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
}

// Extracted dashboard mockup into separate component to reduce initial load
function DashboardMockup() {
  return (
    <div className="absolute top-0 left-0 w-full h-full p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center" 
               aria-hidden="true">
            <span className="text-indigo-600 dark:text-indigo-300 font-bold">U</span>
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-lg text-display">Ultimate Influencer</h3>
            <div className="text-sm text-gray-500" role="text">Level 42 • LinkedIn Pro</div>
          </div>
        </div>
        
        <FloatingElement amplitude={3} duration={4}>
          <div className="px-3 py-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white rounded-full text-sm font-medium will-change-transform">
            +500 XP Today
          </div>
        </FloatingElement>
      </div>
      
      {/* XP Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-display">Level Progress</span>
          <span>9,750 / 10,000 XP</span>
        </div>
        <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden" 
             role="progressbar" 
             aria-valuenow={97.5} 
             aria-valuemin={0} 
             aria-valuemax={100}>
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '97.5%' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ willChange: 'transform' }}
          />
        </div>
      </div>
      
      {/* Achievement Cards with simplified loading */}
      <div className="grid grid-cols-3 gap-4" role="list">
        <SimplifiedDashboardCard 
          label="New Followers"
          value="1.2K"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>
            </svg>
          }
        />
        
        <SimplifiedDashboardCard 
          label="Posting Streak"
          value="8 Days"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
          }
        />
        
        <SimplifiedDashboardCard 
          label="Post Impressions"
          value="43.5K"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2v4"/><path d="m6.8 6.8-2.8-2.8"/><path d="M6 12H2"/><path d="m6.8 17.2-2.8 2.8"/><path d="M12 22v-4"/><path d="m17.2 17.2 2.8 2.8"/><path d="M22 12h-4"/><path d="m17.2 6.8 2.8-2.8"/><circle cx="12" cy="12" r="4"/>
            </svg>
          }
        />
      </div>
      
      {/* Added upcoming task row */}
      <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-800/60 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-300">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Draft Weekly Post</div>
              <div className="text-xs text-gray-500">Tomorrow, 10:00 AM</div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-300 rounded-full">+100 XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simplified version of DashboardCard with minimal animations
function SimplifiedDashboardCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/30 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="text-sm font-semibold">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
} 