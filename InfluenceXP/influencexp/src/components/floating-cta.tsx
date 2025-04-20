"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { scrollToElement, addThrottledScrollListener } from '@/lib/scroll-utils';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  
  // Show CTA after scrolling past a certain point
  useEffect(() => {
    const threshold = window.innerHeight * 0.5;
    
    // Use the throttled scroll listener
    const cleanup = addThrottledScrollListener((scrollPosition) => {
      setVisible(scrollPosition > threshold);
    });
    
    // Cleanup when component unmounts
    return cleanup;
  }, []);
  
  const handleClick = () => {
    scrollToElement('waitlist');
  };
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Button
            onClick={handleClick}
            className="rounded-full w-14 h-14 p-0 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 hover:from-indigo-700 hover:via-blue-600 hover:to-cyan-500 shadow-lg"
            aria-label="Join Waitlist"
          >
            <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white/80 animate-spin-slow" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10">
              <path d="m12 5 7 7-7 7"></path>
              <path d="M5 12h14"></path>
            </svg>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 