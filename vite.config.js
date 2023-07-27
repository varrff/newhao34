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
  // devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://api.newhao2021.top:3001',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '' 
    //     }
    //   }
    // }
  // }
  // build: {

  //   rollupOptions: {

  //     external: ['/newhao44/1.PNG',
  //     'https://mp-fdbc9db4-eb1b-456f-984f-47ee229039f3.cdn.bspapp.com/newhao44/video/kinect.webm',
  //     ''
  //   ] 

  //   }

  // }
});
