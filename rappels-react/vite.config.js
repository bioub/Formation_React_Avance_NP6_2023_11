import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // fourni l'API de vitest sous forme de variables globale pour que le cleanup de testing-library se fasse
    environment: 'happy-dom',
    setupFiles: './src/setupTests.js'
  }
})
