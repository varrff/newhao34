// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
  assetsInclude: ['**/*.PNG','**/*.svg'], // 在这里添加 .PNG 文件的设置
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://api.newhao2021.top:3001', // 设置你的后端 API 地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '') // 重写请求路径，如果你的 API 地址不包含 '/api' 前缀，可以去掉这一行
  //     },
  //   },
  // },
});
