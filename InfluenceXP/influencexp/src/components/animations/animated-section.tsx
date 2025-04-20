"use client";

import React from 'react';
import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 40 };
      case 'down': return { y: -40 };
      case 'left': return { x: 40 };
      case 'right': return { x: -40 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: 40 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 