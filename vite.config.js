import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: "esnext",
    minify: false     // Disables minification
  },
  server: {
    host: '0.0.0.0'
  },
  // Dynamically set base path for GitHub Pages deployment
  // In production (GitHub Pages), use the repository name from environment variable
  // In development, use relative paths
  base: process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : './'
});