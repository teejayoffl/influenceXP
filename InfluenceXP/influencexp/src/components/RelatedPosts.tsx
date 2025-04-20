"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  color: string;
  imageUrl: string;
  imageAlt: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  posts: BlogPost[];
  color: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId, posts, color }) => {
  // Filter out the current post and get at most 3 related posts
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  // Define color mappings for different categories
  const colorMappings: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string, gradient: string, hoverBg: string, darkHoverBg: string}} = {
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      darkBg: 'dark:bg-purple-900',
      darkText: 'dark:text-purple-300',
      gradient: 'from-purple-400 to-pink-500',
      hoverBg: 'hover:bg-purple-50',
      darkHoverBg: 'dark:hover:bg-purple-900/50'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      darkBg: 'dark:bg-blue-900',
      darkText: 'dark:text-blue-300',
      gradient: 'from-blue-400 to-teal-500',
      hoverBg: 'hover:bg-blue-50',
      darkHoverBg: 'dark:hover:bg-blue-900/50'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      darkBg: 'dark:bg-green-900',
      darkText: 'dark:text-green-300',
      gradient: 'from-green-400 to-emerald-500',
      hoverBg: 'hover:bg-green-50',
      darkHoverBg: 'dark:hover:bg-green-900/50'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      darkBg: 'dark:bg-indigo-900',
      darkText: 'dark:text-indigo-300',
      gradient: 'from-indigo-400 to-violet-500',
      hoverBg: 'hover:bg-indigo-50',
      darkHoverBg: 'dark:hover:bg-indigo-900/50'
    },
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      darkBg: 'dark:bg-teal-900',
      darkText: 'dark:text-teal-300',
      gradient: 'from-teal-400 to-cyan-500',
      hoverBg: 'hover:bg-teal-50',
      darkHoverBg: 'dark:hover:bg-teal-900/50'
    }
  };

  const colorClasses = colorMappings[color] || colorMappings.blue;

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-8">
        <h2 className={`text-2xl font-bold ${colorClasses.text}`}>Related Articles</h2>
        <div className={`ml-4 h-0.5 flex-grow bg-gradient-to-r ${colorClasses.gradient} rounded-full`}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => {
          const postColorClasses = colorMappings[post.color] || colorMappings.blue;
          
          return (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <motion.div
                className={`rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col h-full transition-all duration-300 ${postColorClasses.hoverBg} ${postColorClasses.darkHoverBg} hover:shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-40 md:h-48 relative">
                  <Image 
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${postColorClasses.bg} ${postColorClasses.text} ${postColorClasses.darkBg} ${postColorClasses.darkText}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${postColorClasses.bg} ${postColorClasses.text}`}>
                        {post.title.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                    </div>
                    <span className={`text-sm font-medium ${postColorClasses.text}`}>
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RelatedPosts; 