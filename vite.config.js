import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import react from '@vitejs/plugin-react';
import pkg from './package.json';
// https://vitejs.dev/config/
export default defineConfig({
  base: new URL(pkg.homepage).pathname,
  server: {
    port: 3006,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
      },
    },
  },
});
