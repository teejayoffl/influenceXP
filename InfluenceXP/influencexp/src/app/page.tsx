import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { Roadmap } from '@/components/roadmap';
import { WaitListForm } from '@/components/wait-list-form';
import { FoundersNote } from '@/components/founders-note';
import { TextReveal } from '@/components/animations/text-reveal';
import { HoverScale } from '@/components/animations/hover-scale';
import { AnimatedSection } from '@/components/animations/animated-section';
import { 
  WebsiteStructuredData, 
  OrganizationStructuredData, 
  ProductStructuredData, 
  FAQStructuredData 
} from '@/components/structured-data';
import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "InfluenceXP - Gamified LinkedIn Growth Platform | Home",
  description: "Rack up XP, unlock badges, and watch your LinkedIn reach explode with our gamified dashboard for ambitious LinkedIn professionals.",
  alternates: {
    canonical: "https://influencexp.com",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <WebsiteStructuredData />
      <OrganizationStructuredData />
      <ProductStructuredData />
      <FAQStructuredData />
      
      <Hero />
      
      <HowItWorks />
      
      <Roadmap />
      
      <section id="waitlist" className="w-full py-16 bg-gradient-to-b from-white to-indigo-50/30 dark:from-gray-950 dark:to-indigo-950/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="flex-1" direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-display text-balance">
                Join the Founding Members
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 lead text-body">
                Be among the first to experience InfluenceXP and get exclusive perks:
              </p>
              <ul className="space-y-4 mb-8">
                <AnimatedSection delay={0.1} direction="left">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span className="text-body text-gray-700 dark:text-gray-200">First 3 months at <span className="font-semibold text-display">$19</span> (instead of $29)</span>
                  </li>
                </AnimatedSection>
                <AnimatedSection delay={0.2} direction="left">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span className="text-body text-gray-700 dark:text-gray-200">Early access to <span className="font-semibold text-display">new features</span></span>
                  </li>
                </AnimatedSection>
                <AnimatedSection delay={0.3} direction="left">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span className="text-body text-gray-700 dark:text-gray-200">Exclusive <span className="font-semibold text-display">Founding Member</span> badge</span>
                  </li>
                </AnimatedSection>
              </ul>
              
              <FoundersNote />
            </AnimatedSection>
            
            <AnimatedSection className="w-full max-w-md" direction="right">
              <WaitListForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
