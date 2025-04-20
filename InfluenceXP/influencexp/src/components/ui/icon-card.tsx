"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HoverScale } from '../animations/hover-scale';

export interface IconCardProps {
  icon: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  iconContainerClassName?: string;
  showDecorationElements?: boolean;
  children?: React.ReactNode;
}

export function IconCard({
  icon,
  badge,
  className = "",
  iconClassName = "text-indigo-600 dark:text-indigo-300",
  iconContainerClassName = "w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full",
  showDecorationElements = true,
  children
}: IconCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <HoverScale rotate={5}>
        <div className="relative">
          <motion.div 
            className={`${iconContainerClassName} flex items-center justify-center mb-4 relative overflow-hidden`}
            whileHover={{ 
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            {showDecorationElements && (
              <>
                <motion.div 
                  className="absolute -top-6 -left-6 w-12 h-12 bg-cyan-200 dark:bg-cyan-600/30 rounded-full opacity-40"
                  animate={{ 
                    rotate: [0, 45, 0],
                    x: [0, 2, 0],
                    y: [0, -2, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-200 dark:bg-blue-600/30 rounded-full opacity-40"
                  animate={{ 
                    rotate: [0, -30, 0],
                    x: [0, -2, 0],
                    y: [0, 2, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
              </>
            )}
            <div className={`relative z-10 ${iconClassName}`}>
              {icon}
            </div>
          </motion.div>
          
          {badge && (
            <div className="absolute -top-2 -right-2">
              {badge}
            </div>
          )}
        </div>
      </HoverScale>
      
      {children}
    </div>
  );
} 