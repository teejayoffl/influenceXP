/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 