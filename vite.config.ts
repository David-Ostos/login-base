import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  css: {
    preprocessorOptions:{
      scss: {
        additionalData: `
          @import "./src/scss/variables";
        `
      }
    },
    devSourcemap: true,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    }
  }
})
