import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // Adicionado para funcionar corretamente no Vercel
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});

