import { sveltekit } from '@sveltejs/kit/vite';

const pkg = require('./package.json');

/** @type {import('vite').UserConfig} */
const config = {
  ssr: {
    noExternal: Object.keys(pkg.dependencies || {})
  },
  optimizeDeps: {
    exclude: Object.keys(pkg.dependencies || {}),
  },
  plugins: [sveltekit()],
};

export default config;
