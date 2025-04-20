// Replace core plugin import with official PostCSS plugin
import postcssPlugin from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

// Force oxide to use WASM fallback (disable native binding)
process.env.TAILWIND_OXIDE_DISABLE_NODE_BINDING = 'true';
const config = {
  plugins: [
    postcssPlugin(),
    autoprefixer(),
  ],
};

export default config;
