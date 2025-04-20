// Force oxide to use WASM fallback (disable native binding)
process.env.TAILWIND_OXIDE_DISABLE_NODE_BINDING = 'true';
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
