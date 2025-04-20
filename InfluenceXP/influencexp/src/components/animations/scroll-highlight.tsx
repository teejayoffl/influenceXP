"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ScrollHighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollHighlight({ children, className = '' }: ScrollHighlightProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.98, 1.02, 1.02, 0.98]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, scale }}
    >
      {children}
    </motion.div>
  );
} 