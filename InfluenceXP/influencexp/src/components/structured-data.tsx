'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Add the structured data script during client-side rendering
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Clean up when the component unmounts
      document.head.removeChild(script);
    };
  }, [data]);

  return null; // This component doesn't render anything visible
}

export function WebsiteStructuredData() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'InfluenceXP',
    url: 'https://influencexp.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://influencexp.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={websiteData} />;
}

export function OrganizationStructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InfluenceXP',
    url: 'https://influencexp.com',
    logo: 'https://influencexp.com/logo.svg',
    sameAs: [
      'https://twitter.com/influencexp',
      'https://www.linkedin.com/company/influencexp',
      'https://www.instagram.com/influencexp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@influencexp.com',
      contactType: 'customer service',
    },
  };

  return <StructuredData data={organizationData} />;
}

export function ProductStructuredData() {
  const productData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'InfluenceXP',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '29.00',
      priceCurrency: 'USD',
    },
    description: 'A gamified dashboard for ambitious professionals that combines AI post planning with habit-forming mechanics for LinkedIn growth.',
    operatingSystem: 'Web',
    screenshot: 'https://influencexp.com/og-image.jpg',
    softwareVersion: '1.0',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '125',
    },
  };

  return <StructuredData data={productData} />;
}

export function FAQStructuredData() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is InfluenceXP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'InfluenceXP is a gamified LinkedIn growth platform that helps professionals grow their influence through habit-forming mechanics and AI-powered content planning.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does InfluenceXP cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'InfluenceXP costs $29 per month for regular users. However, founding members get the first 3 months at just $19.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does InfluenceXP help me grow on LinkedIn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'InfluenceXP combines AI-powered content suggestions, gamification elements like XP and badges, and analytics to help you build consistent posting habits and optimize your LinkedIn content strategy.',
        },
      },
    ],
  };

  return <StructuredData data={faqData} />;
} 