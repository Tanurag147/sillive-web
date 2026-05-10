import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-markdown') || id.includes('remark') || id.includes('gray-matter') || id.includes('micromark') || id.includes('mdast') || id.includes('hast') || id.includes('unist') || id.includes('vfile')) return 'markdown'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('react/') || id.endsWith('react') || id.includes('react-helmet-async') || id.includes('scheduler')) return 'react-vendor'
          }
        }
      }
    }
  }
})
