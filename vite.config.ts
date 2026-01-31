import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 確保 base 路徑與你的 GitHub 倉庫名稱一致
  base: '/busan-trip/',
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist',
  }
});
