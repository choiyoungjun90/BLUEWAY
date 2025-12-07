import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true, // 빌드 시 dist 폴더를 깨끗하게 비움
  }
})