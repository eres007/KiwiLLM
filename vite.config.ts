import { defineConfig } from 'vite'

export default defineConfig({
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:3000',
    },
  },
})
