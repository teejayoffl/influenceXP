// Replace native oxide plugin with pure JS tailwindcss + autoprefixer
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// Force oxide to use WASM fallback (disable native binding)
process.env.TAILWIND_OXIDE_DISABLE_NODE_BINDING = 'true';
const config = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};

export default config;
