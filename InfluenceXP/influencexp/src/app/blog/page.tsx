import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BlogFeaturedPost from '@/components/BlogFeaturedPost';
import blogPosts from '@/data/blogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LinkedIn Growth Tips & Strategies | InfluenceXP Blog",
  description: "Expert insights, practical strategies, and actionable advice to grow your LinkedIn presence and build personal brand influence.",
  alternates: {
    canonical: "https://influencexp.com/blog",
  },
  openGraph: {
    title: "LinkedIn Growth Tips & Strategies | InfluenceXP Blog",
    description: "Expert insights, practical strategies, and actionable advice to grow your LinkedIn presence.",
    url: "https://influencexp.com/blog",
    type: "website",
  }
};

// Client component wrapper to handle animations
"use client";

// Blog page with animations
function BlogPageClient() {
  // Select the most recent post as featured
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            LinkedIn Growth Strategies & Tips
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Insights, strategies, and practical guidance to elevate your professional influence and LinkedIn presence.
          </motion.p>
        </div>

        {/* Featured Post */}
        <BlogFeaturedPost post={featuredPost} />
        
        {/* Blog Posts Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Latest LinkedIn Growth Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => {
              // Define color mappings for different categories
              const colorMap: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string, gradient: string}} = {
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
              
              const colorClasses = colorMap[post.color] || colorMap.blue;
              
              return (
                <motion.div 
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`h-48 bg-gradient-to-r ${colorClasses.gradient} relative`}>
                    <div className="absolute inset-0">
                      <Image 
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-lg font-bold px-4 text-center z-10">
                        {post.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text} ${colorClasses.darkBg} ${colorClasses.darkText}`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${colorClasses.bg} ${colorClasses.text}`}>
                          {post.authorName.charAt(0)}
                        </div>
                        <span className="ml-2 text-sm font-medium">{post.authorName}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className={`mt-5 inline-flex items-center ${colorClasses.text} font-medium text-sm hover:underline`}
                    >
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Get LinkedIn Growth Tips</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Subscribe to our newsletter for expert LinkedIn and personal branding strategies delivered to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Server component wrapper for metadata
export default function BlogPage() {
  return <BlogPageClient />;
} 