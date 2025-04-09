import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // กำหนดให้ root เป็น directory หลักของโปรเจค
  build: {
    outDir: 'dist', // ตั้งค่า output directory
  },
});
