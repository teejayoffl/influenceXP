"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  rotate?: number;
  className?: string;
  duration?: number;
}

export function HoverScale({
  children,
  scale = 1.05,
  rotate = 0,
  className = "",
  duration = 0.2
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: scale,
        rotate: rotate,
      }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
} 