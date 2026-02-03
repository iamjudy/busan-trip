import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/busan-trip/',
  define: {
    'process.env.API_KEY': JSON.stringify(
      process.env.VITE_GOOGLE_API_KEY || 
      process.env.API_KEY || 
      ''
    )
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
