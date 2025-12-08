import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Netlify 루트 배포에 맞게 변경
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
})