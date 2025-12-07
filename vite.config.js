import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/', // 기본값이므로 생략 가능하지만, 혹시 다른 값으로 되어 있다면 확인 필요
})
