"use client";

import React from 'react';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { HoverScale } from './animations/hover-scale';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"]);
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"]
  );

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ boxShadow: shadow }}
      className="w-full py-4 px-4 md:px-6 border-b border-indigo-100 dark:border-indigo-800/20 backdrop-blur-sm bg-white/90 dark:bg-gray-950/90 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Logo />
        </motion.div>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Navigation */}
          <nav className="hidden md:flex items-center mr-4">
            <Link 
              href="/blog" 
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/learn-more" 
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors"
            >
              Learn More
            </Link>
            <Link 
              href="/coming-soon" 
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors"
            >
              Coming Soon
            </Link>
          </nav>
          
          <ThemeToggle />
          <HoverScale rotate={1} scale={1.05}>
            <Button 
              variant="outline" 
              className="hidden sm:flex border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => {
                const waitlistSection = document.getElementById('waitlist');
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Join Waitlist
            </Button>
          </HoverScale>
        </div>
      </div>
    </motion.header>
  );
} 