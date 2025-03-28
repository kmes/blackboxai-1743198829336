import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@babel/runtime']
  },
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false
    }
  },
  server: {
    allowedHosts: 'sg6jcy-5203.csb.app'
  }
})
