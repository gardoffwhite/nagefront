import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/src/App.jsx',  // ทำให้เส้นทาง URL ถูกต้อง
});
