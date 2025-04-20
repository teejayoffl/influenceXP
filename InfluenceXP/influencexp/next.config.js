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
    // Replace ALL CSS rules with a no-op module
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf) {
        return {
          ...rule,
          oneOf: rule.oneOf.map(oneOf => {
            if (oneOf.test && oneOf.test.toString().includes('css')) {
              return {
                ...oneOf,
                use: [{
                  loader: 'null-loader'
                }]
              };
            }
            return oneOf;
          })
        };
      }
      return rule;
    });

    // Add a rule at the beginning to short-circuit all CSS files
    config.module.rules.unshift({
      test: /\.css$/,
      use: {
        loader: 'null-loader',
      },
    });
    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 