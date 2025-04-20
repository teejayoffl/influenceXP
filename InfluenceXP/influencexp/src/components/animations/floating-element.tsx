"use client";

import React from 'react';
import { motion } from 'framer-motion';

type FloatingElementProps = {
  children: React.ReactNode;
  className?: string;
  amplitude?: number; // How much it moves
  duration?: number; // How long the animation takes
};

export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 3,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0, amplitude, 0],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  );
} 