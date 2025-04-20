"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'custom';
  customColors?: string;
  animate?: boolean;
  blur?: number;
  opacity?: number;
}

export function GradientBackground({
  className,
  variant = 'primary',
  customColors,
  animate = true,
  blur = 40,
  opacity = 0.15
}: GradientBackgroundProps) {
  const getGradient = () => {
    switch (variant) {
      case 'primary':
        return 'from-primary to-purple-500';
      case 'secondary':
        return 'from-blue-400 to-cyan-300';
      case 'accent':
        return 'from-orange-500 to-amber-300';
      case 'custom':
        return customColors || 'from-gray-300 to-gray-100';
      default:
        return 'from-primary to-purple-500';
    }
  };

  const baseClasses = cn(
    'absolute inset-0 -z-10 bg-gradient-to-br rounded-full',
    getGradient(),
    className
  );

  return animate ? (
    <motion.div
      className={baseClasses}
      animate={{
        scale: [0.95, 1.05, 0.95],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        filter: `blur(${blur}px)`,
        opacity
      }}
    />
  ) : (
    <div 
      className={baseClasses}
      style={{
        filter: `blur(${blur}px)`,
        opacity
      }}
    />
  );
} 