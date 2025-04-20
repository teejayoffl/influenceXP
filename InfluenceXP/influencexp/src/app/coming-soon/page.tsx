"use client";

import React from 'react';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-screen py-20 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 text-indigo-600 dark:text-indigo-400">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-24 w-24 mx-auto" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Coming Soon
        </h1>
        
        <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">
          We're working hard to bring you something amazing. This feature will be available soon.
        </p>
        
        <div className="mb-12 w-full max-w-md mx-auto">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-3/4 rounded-full"></div>
          </div>
          <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
            75% Complete
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
          
          <Link 
            href="/blog"
            className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-lg font-medium transition-colors"
          >
            Visit our Blog
          </Link>
        </div>
        
        <div className="mt-16 text-gray-500 dark:text-gray-400 text-sm">
          Want to be notified when we launch?
          <Link 
            href="/#waitlist" 
            className="ml-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Join our waitlist
          </Link>
        </div>
      </div>
    </div>
  );
} 