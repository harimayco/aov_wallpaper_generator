import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets for GitHub Pages deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
