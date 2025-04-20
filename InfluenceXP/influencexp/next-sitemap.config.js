/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://influencexp.com',
  generateRobotsTxt: true, // Overrides the existing robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/static/*'],
      },
    ],
    additionalSitemaps: [
      'https://influencexp.com/server-sitemap.xml',
    ],
  },
}; 