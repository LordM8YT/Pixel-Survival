import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  server: {
    host: true,
    open: true,
    port: 3000
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
});