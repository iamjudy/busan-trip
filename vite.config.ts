import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Fix: Updated base path for Busan edition deployment
  base: '/busan-trip/',
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist',
  }
});
