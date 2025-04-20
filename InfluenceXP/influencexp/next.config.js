/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig; 