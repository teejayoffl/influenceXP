"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NoSSR from '@/components/no-ssr';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animations/animated-section';
import { FloatingElement } from '@/components/animations/floating-element';

export default function LearnMore() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Features data
  const features = [
    {
      title: "AI Post Planning",
      description: "Our AI helps you craft perfect LinkedIn posts tailored to your audience. Get suggestions for tone, engagement hooks, and optimal posting times.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      stats: [
        { value: "93%", label: "Higher Engagement" },
        { value: "75%", label: "Time Saved" },
        { value: "3X", label: "More Consistency" }
      ],
      demoImage: "/ai-post-planner.svg"
    },
    {
      title: "Gamified Streaks",
      description: "Build consistent posting habits through gamification. Complete daily quests, maintain streaks, and earn XP to level up your LinkedIn influence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
          <path d="m2 12 5.25 5 2.625-5H16l-5.25-5L8 12H2Z" />
          <path d="m17 12 5 5" />
          <path d="m22 12-5-5" />
        </svg>
      ),
      stats: [
        { value: "42%", label: "Higher Profile Views" },
        { value: "8.3", label: "Average Streak Days" },
        { value: "12K", label: "Average Monthly XP" }
      ],
      demoImage: "/streak-dashboard.svg"
    },
    {
      title: "Badge System",
      description: "Unlock achievement badges as you grow your LinkedIn influence. Each badge represents a milestone in your journey to becoming a LinkedIn thought leader.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M6.8 21v-3.92a.11.11 0 0 1 .11-.11h10.18a.11.11 0 0 1 .11.11V21H6.8Z" />
          <rect width="14" height="18" x="5" y="3" rx="2" />
          <path d="M18 21h-1" />
          <path d="M7 21h-1" />
          <path d="m14.67 10.29-3.07 3.07L9.53 11.3" />
        </svg>
      ),
      stats: [
        { value: "24", label: "Unique Badges" },
        { value: "87%", label: "Completion Rate" },
        { value: "18%", label: "Follower Boost" }
      ],
      demoImage: "/badge-collection.svg"
    }
  ];
  
  // FAQs data
  const faqs = [
    {
      question: "How does the AI post planning work?",
      answer: "Our AI analyzes successful LinkedIn content patterns and helps you create engaging posts based on your expertise, audience, and goals. It suggests hooks, tones, and optimal posting times based on your audience's activity patterns."
    },
    {
      question: "Can I use InfluenceXP without posting directly from the app?",
      answer: "Absolutely! In our initial release, we're focusing on the draft workflow where you can compose content in InfluenceXP and then copy-paste to LinkedIn. We're working on direct publishing options via the LinkedIn API for future releases."
    },
    {
      question: "What makes the streak system more effective than regular reminders?",
      answer: "Our streak system is built on proven psychology and gamification techniques. By combining variable rewards, achievement unlocks, and visual progress indicators, we create stronger habit loops than simple reminders can achieve."
    },
    {
      question: "How does pricing work after the waitlist period?",
      answer: "After launch, InfluenceXP will be priced at $29/month. Waitlist members get the special founding member pricing of $19/month for the first 3 months, plus exclusive early access and a special founder's badge."
    }
  ];
  
  // Animations for page elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Simple version without animations for initial render
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <NoSSR>
        {/* Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-teal-200 dark:bg-teal-900/30 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Becoming a LinkedIn <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Thought Leader</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
                Discover how InfluenceXP transforms your LinkedIn presence through AI-powered content and gamified habit building
              </p>
              
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  href="/#waitlist" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Join the Waitlist
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Interactive Feature Showcase */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How InfluenceXP Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our platform combines three powerful systems to help you grow your LinkedIn influence consistently
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Feature Navigation */}
              <div className="md:col-span-4">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        activeFeature === index 
                          ? 'bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-200 dark:border-blue-800 shadow-md' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800/40'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg ${
                          activeFeature === index 
                            ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20' 
                            : 'bg-blue-100 dark:bg-blue-900/30'
                        } mr-4`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className={`font-semibold text-lg mb-2 ${
                            activeFeature === index 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : ''
                          }`}>
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Feature Demo */}
              <div className="md:col-span-8">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800"
                >
                  <div className="h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                          {features[activeFeature].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {features[activeFeature].description}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {features[activeFeature].stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <FloatingElement amplitude={3} duration={3 + idx * 0.5}>
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                  {stat.value}
                                </div>
                              </FloatingElement>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:w-1/2">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden">
                          <Image
                            src={features[activeFeature].demoImage}
                            alt={`Demo of ${features[activeFeature].title}`}
                            width={500}
                            height={300}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Animated Stats */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <AnimatedSection delay={0.1} direction="up">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2">120%</div>
                  <div className="text-blue-100">Average Profile Growth</div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} direction="up">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2">4.2K</div>
                  <div className="text-blue-100">New Connections Monthly</div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} direction="up">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2">87%</div>
                  <div className="text-blue-100">More Consistent Posters</div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} direction="up">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2">24K</div>
                  <div className="text-blue-100">Average Post Impressions</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Interactive FAQ */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about InfluenceXP
              </p>
            </AnimatedSection>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={0.1 * index} className="w-full">
                  <motion.div 
                    className={`border rounded-xl overflow-hidden ${
                      expandedFaq === index 
                        ? 'border-blue-200 dark:border-blue-900 shadow-md' 
                        : 'border-gray-200 dark:border-gray-800'
                    }`}
                  >
                    <button 
                      className="w-full p-6 text-left flex justify-between items-center"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <h3 className="font-medium text-lg">{faq.question}</h3>
                      <div className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    
                    <motion.div 
                      initial={false}
                      animate={{ 
                        height: expandedFaq === index ? 'auto' : 0,
                        opacity: expandedFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={0.6} className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have more questions? We'd love to hear from you.
              </p>
              <Link 
                href="mailto:hello@influencexp.com"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Contact Us
              </Link>
            </AnimatedSection>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-200 dark:bg-teal-900/30 blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Become a LinkedIn <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Thought Leader</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our waitlist today to get founding member pricing and early access to InfluenceXP.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/#waitlist" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium shadow-lg inline-block hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Join the Waitlist Now
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </NoSSR>
      
      {/* Static fallback content for initial server render */}
      <noscript>
        <div className="py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Becoming a LinkedIn Thought Leader</h1>
          <p className="mb-8">Please enable JavaScript to see the full interactive content.</p>
          <Link 
            href="/#waitlist" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Join the Waitlist
          </Link>
        </div>
      </noscript>
    </div>
  );
} 