import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'arun-raj-qa-portfolio' to your actual GitHub repository name
// If deploying to https://<username>.github.io/<repo-name>/ keep this as '/<repo-name>/'
// If deploying to https://<username>.github.io/ (user/org root site) set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/arun-raj-qa-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
