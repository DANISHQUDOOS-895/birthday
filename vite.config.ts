import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/birthday_00101/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
