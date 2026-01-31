import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add fetchpriority="high" to CSS link
    {
      name: 'css-fetchpriority',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/,
          '<link rel="stylesheet" crossorigin href="$1" fetchpriority="high">'
        )
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Optimize production build
    minify: 'esbuild', // Using esbuild (default, faster than terser)
    target: 'es2015', // Support modern browsers
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'vendor': ['react', 'react-dom', 'react-i18next', 'i18next', 'i18next-browser-languagedetector'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  }
})
