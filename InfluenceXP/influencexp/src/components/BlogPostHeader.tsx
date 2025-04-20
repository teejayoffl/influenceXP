"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface BlogPostHeaderProps {
  title: string;
  date: string;
  readTime?: string;
  authorName: string;
  category: string;
  color: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  date,
  readTime,
  authorName,
  category,
  color
}) => {
  // Define color mappings for different categories
  const colorMappings: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string, gradient: string}} = {
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      darkBg: 'dark:bg-purple-900',
      darkText: 'dark:text-purple-300',
      gradient: 'from-purple-400 to-pink-500'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      darkBg: 'dark:bg-blue-900',
      darkText: 'dark:text-blue-300',
      gradient: 'from-blue-400 to-teal-500'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      darkBg: 'dark:bg-green-900',
      darkText: 'dark:text-green-300',
      gradient: 'from-green-400 to-emerald-500'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      darkBg: 'dark:bg-indigo-900',
      darkText: 'dark:text-indigo-300',
      gradient: 'from-indigo-400 to-violet-500'
    },
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      darkBg: 'dark:bg-teal-900',
      darkText: 'dark:text-teal-300',
      gradient: 'from-teal-400 to-cyan-500'
    }
  };

  const colorClasses = colorMappings[color] || colorMappings.blue;

  return (
    <motion.div 
      className="relative mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back to Blog</span>
      </Link>
      
      {/* Category tag */}
      <div className="mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text} ${colorClasses.darkBg} ${colorClasses.darkText}`}>
          {category}
        </span>
      </div>
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        {title}
      </h1>
      
      {/* Author info and date */}
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${colorClasses.bg} ${colorClasses.text}`}>
          {authorName.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium">{authorName}</p>
          <p className="text-sm text-gray-500">
            {date}{readTime ? ` · ${readTime}` : ''}
          </p>
        </div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="mt-8 h-1 w-full bg-gradient-to-r rounded-full overflow-hidden">
        <div className={`h-full w-full bg-gradient-to-r ${colorClasses.gradient}`}></div>
      </div>
    </motion.div>
  );
};

export default BlogPostHeader; 