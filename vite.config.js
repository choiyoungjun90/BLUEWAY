import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // '/' 대신 './' 로 변경
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})