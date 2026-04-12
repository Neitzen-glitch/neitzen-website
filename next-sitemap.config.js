/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://neitzen.tech',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily', // High frequency for a new launch
  priority: 0.7,
  exclude: ['/auth/*'], // Don't index your private auth routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/auth'],
      },
    ],
  },
}

module.exports = config;