import React from 'react';
import { Logo } from './logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t border-indigo-100 dark:border-indigo-800/20 bg-gradient-to-b from-white to-indigo-50/30 dark:from-gray-950 dark:to-indigo-950/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gamified LinkedIn growth for ambitious professionals
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} InfluenceXP. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <Link href="/privacy" className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
              Terms
            </Link>
            <Link href="/blog" className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
              Blog
            </Link>
            <a href="mailto:hello@influencexp.com" className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 