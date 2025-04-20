/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: false,
  },
  webpack: (config) => {
    // Skip CSS processing completely
    config.module.rules.forEach(rule => {
      if (rule.oneOf) {
        rule.oneOf.forEach(oneOf => {
          if (oneOf.test && oneOf.test.toString().includes('css')) {
            oneOf.use = [{ loader: 'null-loader' }];
          }
        });
      }
    });
    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 