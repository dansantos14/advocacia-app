import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <- corrige erro MIME no deploy
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});


