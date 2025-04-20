"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative"
      >
        <div className="relative z-10 bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 p-[10px] rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm tracking-wider">XP</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 via-blue-500/20 to-cyan-400/20 rounded-lg blur-md opacity-70"></div>
      </motion.div>
      
      <div className="flex items-baseline">
        <motion.div className="flex">
          <motion.span 
            className="font-sans text-xl font-medium tracking-tight"
          >
            <span className="font-light mr-[1px]">influence</span>
            <motion.span 
              className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 500 }
              }}
            >
              XP
            </motion.span>
          </motion.span>
        </motion.div>
      </div>
    </Link>
  );
} 