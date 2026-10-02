import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // relative paths so the build works on GitHub Pages (username.github.io/<repo>/)
  base: './',
  server: { port: 3000 },
});
