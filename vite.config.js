import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },

  //Required for Shadcn UI
  //See https://ui.shadcn.com/docs/installation/vite
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
    },
  },
})
