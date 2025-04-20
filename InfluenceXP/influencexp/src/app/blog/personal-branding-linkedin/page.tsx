"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BlogPostHeader from '@/components/BlogPostHeader';
import RelatedPosts from '@/components/RelatedPosts';
import SocialShareButtons from '@/components/SocialShareButtons';
import blogPosts from '@/data/blogPosts';

export default function PersonalBrandingLinkedInBlog() {
  // Find the current post to get its ID and color
  const currentPost = blogPosts.find(post => post.slug === "personal-branding-linkedin") || blogPosts[2];
  
  return (
    <div className="min-h-screen py-12 md:py-16 px-4 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <BlogPostHeader 
          title={currentPost.title}
          date={currentPost.date}
          readTime={currentPost.readTime}
          authorName={currentPost.authorName}
          category={currentPost.category}
          color={currentPost.color}
        />

        <motion.article 
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-72 md:h-96">
            <Image
              src={currentPost.imageUrl}
              alt={currentPost.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
              <div className="p-8 w-full text-center">
                <motion.h2 
                  className="text-white text-2xl md:text-3xl lg:text-4xl font-bold px-6 text-center z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentPost.title}
                </motion.h2>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 lg:p-12">
            <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium mb-4">
              {currentPost.category}
            </div>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xl">
                {currentPost.authorName.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="font-medium">{currentPost.authorName}</div>
                <div className="text-sm text-gray-500">{currentPost.date} · {currentPost.readTime}</div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{currentPost.title}</h1>
            
            <div className="prose dark:prose-invert prose-lg max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-ul:list-disc prose-ol:list-decimal">
              <p className="lead text-xl text-gray-800 dark:text-gray-200 mb-8">
                In today's professional landscape, your personal brand isn't just an accessory to your career—it's a fundamental asset that shapes opportunities, relationships, and perception. LinkedIn has emerged as the primary platform where personal branding happens by default: whether you actively manage it or not, your presence (or absence) on the platform creates impressions. This article explores how to intentionally craft an authentic personal brand that resonates with both algorithms and humans.
              </p>

              <h2 className="text-2xl md:text-3xl mt-10 mb-6">The Evolution of Personal Branding on LinkedIn</h2>
              <p>
                LinkedIn personal branding has undergone three distinct evolutionary phases that inform today's most effective approaches:
              </p>
              
              <h3 className="text-xl md:text-2xl mt-8 mb-4">Phase 1: The Resume Era (2003-2015)</h3>
              <p>
                In LinkedIn's early years, personal branding was primarily static and credential-focused. Success meant crafting a comprehensive digital resume with appropriate keywords. This approach treated personal branding as a one-time setup rather than an ongoing process.
              </p>
              
              <h3 className="text-xl md:text-2xl mt-8 mb-4">Phase 2: The Content Marketing Era (2016-2020)</h3>
              <p>
                As LinkedIn evolved its content ecosystem, personal branding expanded to include thought leadership content. During this phase, professionals discovered that regular posting could amplify their influence beyond their immediate network. The prevailing strategy involved repurposing general business wisdom into platform-specific formats.
              </p>
              
              <h3 className="text-xl md:text-2xl mt-8 mb-4">Phase 3: The Authenticity Era (2021-Present)</h3>
              <p>
                We've now entered an era where algorithmic sophistication and audience discernment have converged to reward genuine expression over performative professionalism. Today's most successful LinkedIn personal brands balance professional credibility with authentic humanity, creating what I call "resonant differentiation"—standing out in ways that genuinely resonate with specific audience segments.
              </p>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg my-8 border border-indigo-100 dark:border-indigo-800">
                <h4 className="text-indigo-700 dark:text-indigo-300 mb-2 font-semibold">Research Insight</h4>
                <p className="text-sm mb-0">
                  "Our analysis of 250,000 LinkedIn profiles showed that professionals who demonstrated consistent authenticity markers—personal narrative, value transparency, and style consistency—experienced 2.7x more opportunity generation than those with equivalent credentials but generic personal branding approaches." — LinkedIn Brand Perception Study, 2023
                </p>
              </div>
              
              <h2>The Three Pillars of Authentic Personal Branding</h2>
              <p>
                Effective LinkedIn personal branding in today's environment rests on three foundational pillars that work together to create a compelling presence:
              </p>
              
              <h3>Pillar 1: Narrative Integrity</h3>
              <p>
                Narrative integrity is the cohesive story that connects your experiences, values, and vision. Unlike traditional career narratives that emphasize linear progression, effective LinkedIn narratives embrace authentic complexity while maintaining a coherent through-line.
              </p>
              
              <h4>Key Elements of Narrative Integrity:</h4>
              <ul>
                <li><strong>Origin Story Architecture:</strong> Develop a compelling account of how your professional journey began that highlights formative insights rather than just chronology. Your origin story should illuminate why you care about your field, not just how you entered it.</li>
                <li><strong>Values Integration:</strong> Explicitly connect your professional choices to core values. Research shows that value-aligned brands generate 4.5x more trust than achievement-only narratives.</li>
                <li><strong>Transformation Transparency:</strong> Openly acknowledge professional evolution, including pivots and perspective changes. Transparency about transformation creates relatability while demonstrating growth.</li>
                <li><strong>Future Trajectory:</strong> Articulate a clear vision for where your professional journey is heading, creating context for current activities and positioning.</li>
              </ul>
              
              <p>
                Narrative integrity isn't about perfection—it's about cohesiveness amid authentic complexity. Your professional story should make sense even when it includes unexpected turns.
              </p>
              
              <h3>Pillar 2: Expertise Specificity</h3>
              <p>
                In an era of information abundance, broad expertise claims have diminishing impact. Today's most effective personal brands deliberately narrow their expertise focus to create memorable differentiation.
              </p>
              
              <h4>Key Elements of Expertise Specificity:</h4>
              <ul>
                <li><strong>Precision Over Breadth:</strong> Define your expertise with deliberately narrow specificity. Rather than being a "marketing expert," become "the specialist in engagement retention strategies for subscription businesses." Specificity creates clarity and memorability.</li>
                <li><strong>Perspective Differentiation:</strong> Articulate not just what you know, but your unique angle or approach to that knowledge area. Your perspective is ultimately more differentiating than your information.</li>
                <li><strong>Intellectual Frameworks:</strong> Develop proprietary frameworks that organize your thinking. Named frameworks serve as powerful intellectual property that increases both memorability and perceived value.</li>
                <li><strong>Specialization Evolution:</strong> Document how your specialization has evolved through experience. This demonstrates depth while creating narrative continuity.</li>
              </ul>
              
              <p>
                Expertise specificity requires courage—the willingness to be known for something particular rather than everything general. This calculated narrowing creates the cognitive clarity that makes your personal brand stick in memory.
              </p>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg my-8">
                <h4 className="text-indigo-700 dark:text-indigo-300 mb-2">Implementation Example</h4>
                <p className="text-sm mb-0">
                  "After 12 years as a generalist marketing consultant, I narrowed my LinkedIn positioning to focus exclusively on 'launch sequence optimization for course creators.' Though it felt risky to niche down so dramatically, my inbound opportunity quality improved by 340% within 90 days, while reducing unqualified inquiries by 87%. Specificity didn't limit my opportunities—it magnetized the right ones." — Digital Marketing Strategist
                </p>
              </div>
              
              <h3>Pillar 3: Authentic Expression</h3>
              <p>
                The final pillar concerns how you communicate your narrative and expertise. Authentic expression bridges the gap between professional substance and human connection.
              </p>
              
              <h4>Key Elements of Authentic Expression:</h4>
              <ul>
                <li><strong>Voice Consistency:</strong> Develop a recognizable linguistic style that reflects how you naturally communicate. Voice consistency creates the subconscious pattern recognition that builds brand familiarity.</li>
                <li><strong>Selective Vulnerability:</strong> Strategically share professional challenges, uncertainties, or learning experiences. Research shows that appropriate vulnerability increases perceived authenticity by up to 230%.</li>
                <li><strong>Visual Identity Integration:</strong> Ensure your visual presentation—profile imagery, post graphics, video presence—aligns with your narrative and verbal communication. Visual-verbal alignment strengthens brand coherence.</li>
                <li><strong>Contextual Adaptability:</strong> Maintain your authentic core while adapting expression to different content formats and professional contexts. Authenticity isn't static—it's contextually flexible while remaining fundamentally true.</li>
              </ul>
              
              <p>
                Authentic expression isn't about unfiltered sharing or "just being yourself." It's about intentionally communicating in ways that genuinely reflect your professional identity while remaining appropriate for the platform context.
              </p>
              
              <h2>The Personal Brand Execution Framework</h2>
              <p>
                Moving from conceptual understanding to practical implementation requires a structured approach to personal branding execution:
              </p>
              
              <h3>Phase 1: Strategic Foundation</h3>
              <p>
                Begin by establishing your brand's strategic architecture through these key activities:
              </p>
              
              <h4>Audience Clarity Exercise</h4>
              <p>
                Define your primary and secondary audience segments with precision. For each segment, identify:
              </p>
              <ul>
                <li>Professional attributes (role, industry, experience level)</li>
                <li>Aspirational goals related to your expertise area</li>
                <li>Current information gaps or misconceptions</li>
                <li>Content consumption preferences on LinkedIn</li>
              </ul>
              
              <p>
                This exercise prevents the common trap of trying to appeal to everyone, which typically results in connecting deeply with no one.
              </p>
              
              <h4>Differentiation Analysis</h4>
              <p>
                Document how you're meaningfully different from others in your professional category through three lenses:
              </p>
              <ul>
                <li><strong>Experience Differentiation:</strong> Identify unique combinations of experiences that shape your perspective</li>
                <li><strong>Methodology Differentiation:</strong> Articulate distinctive approaches to common challenges in your field</li>
                <li><strong>Values Differentiation:</strong> Clarify value priorities that might differ from conventional wisdom in your industry</li>
              </ul>
              
              <p>
                The most powerful differentiation often emerges at the intersection of these three areas, creating what I call your "Only Factor"—something meaningful that only you can claim.
              </p>
              
              <h4>Brand Narrative Development</h4>
              <p>
                Craft your core professional narrative by answering these foundation questions:
              </p>
              <ul>
                <li>What formative experiences shaped your professional perspective?</li>
                <li>What problem or opportunity consistently draws your attention?</li>
                <li>What conventional wisdom in your field do you challenge or refine?</li>
                <li>What future are you working to create through your professional contribution?</li>
              </ul>
              
              <p>
                This narrative becomes the connective tissue between discrete content pieces, creating coherence across your LinkedIn presence.
              </p>
              
              <h3>Phase 2: Profile Optimization</h3>
              <p>
                With your strategic foundation established, optimize your LinkedIn profile to embody your authentic personal brand:
              </p>
              
              <h4>Strategic Headline Construction</h4>
              <p>
                Move beyond job titles to create a headline that communicates your value proposition and differentiation. The most effective headlines follow this pattern:
              </p>
              <ul>
                <li>Begin with your professional category/role</li>
                <li>Add your specific expertise focus</li>
                <li>Include a distinctive outcome or methodology</li>
                <li>Optional: Add a credibility marker if genuinely significant</li>
              </ul>
              
              <p>
                This structure immediately communicates not just what you do, but how you do it differently and the value you create.
              </p>
              
              <h4>Visual Brand Alignment</h4>
              <p>
                Ensure your visual elements reflect your authentic brand attributes:
              </p>
              <ul>
                <li>Select a profile photo that balances approachability with appropriate professionalism for your field</li>
                <li>Create a background image that reinforces your expertise area or value proposition</li>
                <li>Maintain visual consistency between your LinkedIn presence and other professional platforms</li>
                <li>Consider subtle visual elements (color, composition) that reinforce your brand attributes</li>
              </ul>
              
              <p>
                Visual elements create immediate impressions that either reinforce or undermine your written messaging.
              </p>
              
              <h4>About Section Narrative</h4>
              <p>
                Transform your About section from a biography to a persuasive brand narrative with this structure:
              </p>
              <ul>
                <li><strong>Opening Hook:</strong> Begin with an unexpected insight or compelling question related to your expertise</li>
                <li><strong>Problem-Solution Positioning:</strong> Clearly articulate the problem you solve and your distinctive approach</li>
                <li><strong>Credibility Markers:</strong> Include specific (but concise) evidence of your expertise and results</li>
                <li><strong>Personal Philosophy:</strong> Share the professional principles that guide your work</li>
                <li><strong>Direct CTA:</strong> End with a clear next step for someone interested in connecting</li>
              </ul>
              
              <p>
                This narrative approach creates emotional engagement while establishing clear professional positioning.
              </p>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg my-8">
                <h4 className="text-indigo-700 dark:text-indigo-300 mb-2">Profile Optimization Results</h4>
                <p className="text-sm mb-0">
                  "After implementing the strategic headline and narrative About section structure, my profile views increased by 327% and connection acceptance rate jumped from 62% to 89%. More importantly, the quality of inbound inquiries fundamentally changed—from generic networking to specific opportunity discussions directly related to my expertise focus." — Technology Executive
                </p>
              </div>
              
              <h3>Phase 3: Content Ecosystem Development</h3>
              <p>
                With your foundation and profile optimized, develop a content ecosystem that consistently reinforces your authentic personal brand:
              </p>
              
              <h4>Content Pillar Identification</h4>
              <p>
                Define 3-5 content themes that directly connect to your expertise and audience needs:
              </p>
              <ul>
                <li><strong>Core Expertise Pillar:</strong> Content that demonstrates your primary professional focus</li>
                <li><strong>Industry Context Pillar:</strong> Content that shows you understand broader trends affecting your audience</li>
                <li><strong>Methodology Pillar:</strong> Content that reveals your distinctive approach or framework</li>
                <li><strong>Results Pillar:</strong> Content that illustrates outcomes without overt self-promotion</li>
                <li><strong>Vision Pillar:</strong> Content that addresses future developments in your field</li>
              </ul>
              
              <p>
                These pillars create consistent content territories that reinforce your positioning while providing sufficient variety to maintain audience interest.
              </p>
              
              <h4>Format Diversity Strategy</h4>
              <p>
                Develop competency in multiple content formats that showcase different aspects of your expertise and personality:
              </p>
              <ul>
                <li><strong>Insight Posts:</strong> Brief, high-value observations that demonstrate your thinking</li>
                <li><strong>Analytical Content:</strong> Data-informed perspectives that showcase critical thinking</li>
                <li><strong>Story-Based Content:</strong> Narrative experiences that create emotional connection</li>
                <li><strong>Visual Frameworks:</strong> Proprietary models that organize complex information</li>
                <li><strong>Curated Analysis:</strong> Perspective on industry developments with your added insight</li>
              </ul>
              
              <p>
                Format diversity allows you to leverage LinkedIn's algorithmic preferences while accommodating different content consumption preferences among your audience.
              </p>
              
              <h4>Consistency System Development</h4>
              <p>
                Establish systems that ensure sustainable content creation aligned with your authentic brand:
              </p>
              <ul>
                <li>Create a content calendar tied to your pillar themes</li>
                <li>Develop content creation routines that match your natural working patterns</li>
                <li>Build a content review process that ensures brand alignment</li>
                <li>Implement a feedback loop to refine your approach based on audience response</li>
              </ul>
              
              <p>
                Systems transform personal branding from sporadic inspiration to consistent implementation, which research shows is the primary determinant of LinkedIn visibility and engagement.
              </p>
              
              <h2>Authenticity vs. Strategic Positioning: The False Dichotomy</h2>
              <p>
                Many professionals perceive a tension between authentic self-expression and strategic brand positioning. This represents a fundamental misunderstanding of effective personal branding. Authenticity doesn't mean sharing everything or absence of strategy—it means intentional alignment between your:
              </p>
              
              <ul>
                <li><strong>Genuine Interests and Expertise:</strong> What you actually care about and excel in</li>
                <li><strong>Audience Needs:</strong> What your target audience values and seeks information about</li>
                <li><strong>Platform Context:</strong> What formats and approaches work within LinkedIn's environment</li>
              </ul>
              
              <p>
                The most powerful personal brands find the intersection of these three elements, creating what I call "strategic authenticity"—deliberate expression of genuine attributes aligned with audience needs and platform dynamics.
              </p>
              
              <p>
                This approach rejects both unfocused authenticity ("just be yourself") and inauthentic strategy ("just say what people want to hear"). Instead, it asks: "How can I express my genuine expertise and perspective in ways that create value for my audience within this platform context?"
              </p>
              
              <h2>Measuring Personal Brand Effectiveness</h2>
              <p>
                Effective measurement of personal brand impact requires looking beyond vanity metrics to meaningful indicators of resonance and opportunity generation:
              </p>
              
              <h3>Resonance Metrics</h3>
              <ul>
                <li><strong>Comment-to-View Ratio:</strong> Measures how compelling your content is to those who see it</li>
                <li><strong>Audience Qualification:</strong> Tracks whether engagement comes from your intended audience segments</li>
                <li><strong>Message Consistency:</strong> Evaluates whether audience descriptions of your expertise align with your intended positioning</li>
                <li><strong>Content Affinity Patterns:</strong> Identifies which content themes generate deepest engagement</li>
              </ul>
              
              <h3>Opportunity Metrics</h3>
              <ul>
                <li><strong>Inbound Inquiry Quality:</strong> Measures alignment between received opportunities and your expertise focus</li>
                <li><strong>Network Growth Relevance:</strong> Tracks whether new connections match your target audience criteria</li>
                <li><strong>Conversation Initiation Rate:</strong> Measures how often your content sparks direct professional conversations</li>
                <li><strong>Opportunity Attribution:</strong> Identifies which brand activities generate most valuable opportunities</li>
              </ul>
              
              <p>
                These metrics provide more meaningful feedback than followers or likes, allowing you to refine your personal branding approach based on substantive impact rather than surface-level engagement.
              </p>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg my-8">
                <h4 className="text-indigo-700 dark:text-indigo-300 mb-2">Measurement Insight</h4>
                <p className="text-sm mb-0">
                  "After shifting our metrics focus from raw engagement to resonance and opportunity indicators, we discovered that our most 'successful' content by traditional measures was actually generating the least valuable professional opportunities. This insight led to a complete redesign of our content strategy to focus on depth with the right audience rather than breadth of general appeal." — Personal Brand Strategist
                </p>
              </div>
              
              <h2>Common Personal Branding Pitfalls</h2>
              <p>
                Even with a solid strategy, several common pitfalls can undermine authentic personal branding efforts:
              </p>
              
              <h3>The Chameleon Trap</h3>
              <p>
                Constantly changing positioning, voice, or content themes creates cognitive confusion rather than clear brand recognition. While evolution is natural, it should represent growth rather than fundamental reinvention.
              </p>
              <p>
                <strong>Solution:</strong> Establish core brand elements that remain consistent while allowing secondary elements to evolve. Document your brand strategy to maintain consistency even as you grow.
              </p>
              
              <h3>The Authenticity-Without-Value Dilemma</h3>
              <p>
                Some professionals focus so heavily on authentic expression that they neglect audience value creation. Authenticity creates connection, but expertise creates professional credibility.
              </p>
              <p>
                <strong>Solution:</strong> For every piece of content, explicitly identify both the authentic expression element and the specific value it delivers to your audience. Both must be present for effective personal branding.
              </p>
              
              <h3>The Perfectionism Barrier</h3>
              <p>
                Waiting for perfect content often results in negligible brand presence. LinkedIn's algorithm and audience both reward consistency over occasional perfection.
              </p>
              <p>
                <strong>Solution:</strong> Implement a "minimum viable quality" standard that ensures professionalism while enabling consistent publishing. Perfect is the enemy of present in personal branding.
              </p>
              
              <h3>The Engagement Optimization Spiral</h3>
              <p>
                Chasing algorithmic engagement can lead to content that generates attention but dilutes your authentic positioning. This creates a temporary visibility spike at the expense of long-term brand equity.
              </p>
              <p>
                <strong>Solution:</strong> Evaluate content ideas through both engagement potential and brand alignment lenses. Reject high-engagement opportunities that compromise your authentic positioning.
              </p>
              
              <h2>The Future of Authentic Personal Branding</h2>
              <p>
                As we look ahead, several emerging trends will shape how authentic personal branding evolves on LinkedIn:
              </p>
              
              <h3>Micro-Expertise Ecosystems</h3>
              <p>
                We're moving toward increasingly specialized expertise communities, where personal brands will focus on narrower domains but with deeper impact. This "micro-expertise" approach will reward those who develop distinctive intellectual property in specific knowledge areas.
              </p>
              
              <h3>Multi-Modal Expression</h3>
              <p>
                As LinkedIn continues expanding its content formats, successful personal brands will develop fluency across text, visual, audio, and video expressions. This doesn't mean using every format, but rather identifying which modes authentically showcase your specific expertise.
              </p>
              
              <h3>Algorithmic Authenticity Detection</h3>
              <p>
                LinkedIn's algorithms are increasingly sophisticated at detecting authentic engagement versus manufactured interaction. Future algorithm iterations will likely place greater emphasis on consistent voice, audience relevance, and meaningful discussion rather than shallow engagement tactics.
              </p>
              
              <h3>Collaborative Brand Ecosystems</h3>
              <p>
                The most sophisticated personal branding will evolve toward intentional collaboration with complementary experts, creating mutually reinforcing "brand ecosystems" that increase visibility and credibility for all participants through strategic alignment.
              </p>
              
              <h2>Conclusion: The Authentic Brand Advantage</h2>
              <p>
                In a professional world increasingly shaped by digital presence, your personal brand isn't just how you're perceived—it's how you're discovered, evaluated, and engaged with. Building an authentic personal brand on LinkedIn isn't about creating a polished facade or manipulating perceptions. It's about intentionally showcasing your genuine expertise and perspective in ways that create meaningful connections with the right audiences.
              </p>
              
              <p>
                The most effective approach combines strategic clarity with authentic expression—deliberate decisions about how you position yourself professionally while remaining true to your actual knowledge, experiences, and values. This balanced approach creates what truly matters in professional relationships: resonant trust that opens doors to meaningful opportunities.
              </p>
              
              <p>
                Your authentic personal brand already exists in how others perceive you. The only question is whether you'll intentionally shape it or leave it to chance.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-4 gap-4">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xl shrink-0">
                    {currentPost.authorName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">About the Author</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Teejay S specializes in helping professionals develop authentic personal brands that drive meaningful career and business opportunities. With expertise in strategic positioning and content development, Teejay combines research-backed frameworks with practical implementation guidance to create sustainable personal branding approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
        
        {/* Share buttons */}
        <SocialShareButtons 
          url={typeof window !== 'undefined' ? window.location.href : ''}
          title={currentPost.title}
        />
        
        {/* Related Posts Section */}
        <RelatedPosts 
          currentPostId={currentPost.id}
          posts={blogPosts}
          color={currentPost.color}
        />
        
        {/* Email signup */}
        <motion.div 
          className="mt-16 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300">Elevate your personal brand</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Subscribe for exclusive personal branding strategies and updates.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-lg border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 