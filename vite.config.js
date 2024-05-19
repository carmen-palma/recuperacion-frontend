import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// configuración vite 
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:6000', 
    },
  },
});