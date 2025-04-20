"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeaturedPostProps {
  title: string;
  slug: string;
  excerpt: string;
  authorName: string;
  date: string;
  readTime: string;
  category: string;
  color: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  title,
  slug,
  excerpt,
  authorName,
  date,
  readTime,
  category,
  color
}) => {
  // Define color mappings for different categories
  const colorMappings: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string}} = {
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      darkBg: 'dark:bg-purple-900',
      darkText: 'dark:text-purple-300'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      darkBg: 'dark:bg-blue-900',
      darkText: 'dark:text-blue-300'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      darkBg: 'dark:bg-green-900',
      darkText: 'dark:text-green-300'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      darkBg: 'dark:bg-indigo-900',
      darkText: 'dark:text-indigo-300'
    },
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      darkBg: 'dark:bg-teal-900',
      darkText: 'dark:text-teal-300'
    }
  };

  const colorClasses = colorMappings[color] || colorMappings.blue;

  return (
    <motion.div 
      className="mb-16 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text} ${colorClasses.darkBg} ${colorClasses.darkText}`}>
            Featured
          </span>
        </div>
        
        <div className="h-64 md:h-80 relative bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="relative z-20 text-center px-6">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-white/80 max-w-2xl mx-auto">{excerpt}</p>
            <Link href={`/blog/${slug}`} className={`mt-4 inline-block px-6 py-2 rounded-full font-medium ${colorClasses.bg} ${colorClasses.text} hover:opacity-90 transition-opacity`}>
              Read Article
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${colorClasses.bg} ${colorClasses.text}`}>
              {authorName.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="font-medium">{authorName}</p>
              <p className="text-sm text-gray-500">{date} · {readTime}</p>
            </div>
          </div>
          
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text} ${colorClasses.darkBg} ${colorClasses.darkText}`}>
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPost; 