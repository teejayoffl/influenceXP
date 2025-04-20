"use client";

import React from 'react';
import { motion } from 'framer-motion';

type TextRevealProps = {
  text: string;
  className?: string;
  textClassName?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
};

export function TextReveal({
  text,
  className = '',
  textClassName = '',
  delay = 0,
  staggerChildren = 0.02,
  once = true,
}: TextRevealProps) {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren, 
        delayChildren: delay * i,
      },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block mr-1 ${textClassName}`}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
} 