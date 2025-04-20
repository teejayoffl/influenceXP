"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

export function WaitListForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [queuePosition, setQueuePosition] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch current waitlist count directly via Supabase client
  useEffect(() => {
    async function fetchCount() {
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('id', { count: 'exact', head: true });
        if (error) {
          console.error('Error fetching waitlist count:', error);
        } else if (count !== null) {
          setQueuePosition(count);
        }
      } catch (err) {
        console.warn('Failed to parse waitlist count response:', err);
      }
    }
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || 'Failed to join waitlist');
        return;
      }
      setMessage(result.message || 'Thank you for joining the waitlist!');
      setSubmitted(true);
      // Refresh queue position directly via Supabase client
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('id', { count: 'exact', head: true });
        if (error) console.error('Error fetching waitlist count after signup:', error);
        else if (count !== null) setQueuePosition(count);
      } catch (err) {
        console.warn('Failed to fetch waitlist count after signup:', err);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md p-6 shadow-xl bg-white dark:bg-gray-900 border-0 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-teal-100 dark:bg-teal-900/20 blur-3xl opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-center">Be an Early Adopter</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-4">
                Join the waitlist to get exclusive early access and founder pricing.
              </p>
              
              <div className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-blue-200 dark:border-blue-800 focus:ring-blue-500"
                  required
                />
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium shadow-md h-11"
                  >
                    {isHovered ? "Unlock Your Growth" : "Secure your spot"}
                  </Button>
                </motion.div>
              </div>
              
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              {message && <p className="text-green-500 text-sm mt-1">{message}</p>}
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-2 mt-4 border-t border-gray-100 dark:border-gray-800">
                <span>Queue Position</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  #{queuePosition ?? '...'}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs text-blue-600 dark:text-blue-400">
                  3-month discount
                </div>
                <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs text-blue-600 dark:text-blue-400">
                  Early access
                </div>
                <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs text-blue-600 dark:text-blue-400">
                  Founder badge
                </div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30">
                <AlertDescription>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="m9 11 3 3L22 4"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-gray-100">You're in! 🎉</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      You're position #{queuePosition} in the wait-list. We'll notify you when it's your turn to join the InfluenceXP community.
                    </p>
                    
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "20%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      20% to launch • {queuePosition} people in line
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
} 