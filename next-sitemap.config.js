/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.celestialpet.com.br",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: false,
};
