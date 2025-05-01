import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'images',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        lending: 'lending.html',
        savings: 'savings.html',
        deps: 'deps.html',
        ecosystem: 'ecosystem.html',
        association: 'association.html',
        'what-is-deuro': 'what-is-deuro.html',
      }
    }
  },
});