import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served at the domain root (vikassrinivasa.dev), so use an absolute base.
  // This is required for clean URLs with BrowserRouter on nested routes.
  base: '/',
  // Static assets (favicon, CNAME) live here and are copied as-is into dist/.
  publicDir: 'root/public',
});
