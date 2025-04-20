"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

interface BlogFeaturedPostProps {
  post: BlogPost;
}

const BlogFeaturedPost: React.FC<BlogFeaturedPostProps> = ({ post }) => {
  // Define color mappings for different categories
  const colorMappings: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string, gradient: string, hover: string}} = {
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      darkBg: 'dark:bg-purple-900/30',
      darkText: 'dark:text-purple-300',
      gradient: 'from-purple-400 to-pink-500',
      hover: 'hover:bg-purple-700'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      darkBg: 'dark:bg-blue-900/30',
      darkText: 'dark:text-blue-300',
      gradient: 'from-blue-400 to-teal-500',
      hover: 'hover:bg-blue-700'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      darkBg: 'dark:bg-green-900/30',
      darkText: 'dark:text-green-300',
      gradient: 'from-green-400 to-emerald-500',
      hover: 'hover:bg-green-700'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      darkBg: 'dark:bg-indigo-900/30',
      darkText: 'dark:text-indigo-300',
      gradient: 'from-indigo-400 to-violet-500',
      hover: 'hover:bg-indigo-700'
    },
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      darkBg: 'dark:bg-teal-900/30',
      darkText: 'dark:text-teal-300',
      gradient: 'from-teal-400 to-cyan-500',
      hover: 'hover:bg-teal-700'
    }
  };

  const colorClasses = colorMappings[post.color] || colorMappings.blue;
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="md:flex">
        {/* Left content - Image/Gradient */}
        <div className="md:w-2/5 h-64 md:h-auto relative">
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Image with overlay */}
            <div className="absolute inset-0">
              <Image 
                src={post.imageUrl}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover mix-blend-overlay"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
          </motion.div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-8 z-10">
            <motion.span 
              className={`px-3 py-1 rounded-full text-xs font-medium bg-white/90 ${colorClasses.text} mb-4 self-start`}
              variants={item}
            >
              {post.category}
            </motion.span>
            
            <motion.h2 
              className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow-md"
              variants={item}
            >
              Editor's Pick
            </motion.h2>
            
            <motion.div
              className="mt-4 md:mt-auto"
              variants={item}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="text-white font-medium underline-offset-4 hover:underline flex items-center"
              >
                Read Featured Post
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Right content - Text */}
        <div className="md:w-3/5 p-6 md:p-8">
          <motion.div 
            className="flex flex-col h-full"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h3 
              className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white"
              variants={item}
            >
              {post.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6 flex-grow"
              variants={item}
            >
              {post.excerpt}
            </motion.p>
            
            <motion.div className="mt-auto" variants={item}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${colorClasses.bg} ${colorClasses.text}`}>
                    {post.authorName.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-white">{post.authorName}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                
                <span className="text-sm text-gray-500">
                  {post.readTime}
                </span>
              </div>
              
              <Link 
                href={`/blog/${post.slug}`}
                className={`mt-2 inline-flex items-center px-5 py-2.5 rounded-lg bg-${post.color}-600 ${colorClasses.hover} text-white font-medium transition-colors`}
              >
                Read Full Article
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogFeaturedPost; 