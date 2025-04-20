import { getServerSideSitemap } from 'next-sitemap';
import type { ISitemapField } from 'next-sitemap';

export async function GET() {
  // Generate a dynamic sitemap for your routes that may change
  // This could fetch from a CMS, database, or other dynamic sources
  
  const pages: ISitemapField[] = [
    {
      loc: 'https://influencexp.com',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: 'https://influencexp.com/learn-more',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    // Add more dynamic routes as needed
  ];
  
  return getServerSideSitemap(pages);
}

export const dynamic = 'force-dynamic'; 