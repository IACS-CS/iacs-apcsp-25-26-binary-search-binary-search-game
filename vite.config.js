import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: "esnext",
    minify: false     // Disables minification
  },
  server: {
    host: '0.0.0.0'
  },
  base: process.env.NODE_ENV === 'production' ? '/iacs-apcsp-25-26-binary-search-binary-search-game/' : './'
});