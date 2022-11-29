import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
const localEnabled = !!process.env.USE_MOCK || false
console.log('mock 是否开启', localEnabled)
export default defineConfig(({ command }) => {
  console.log(command)
  return {
    base: './',
    plugins: [
      tsconfigPaths(),
      vue(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      }),
      eslint({
        cache: false,
        fix: false,
        include: ['src/**/*.ts', 'src/**/*.vue']
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      // mock 服务
      viteMockServe({
        mockPath: './src/mock', // 设置mock 文件存储位置
        localEnabled,
        prodEnabled: false,
        supportTs: false, // 打开后，可以读取 ts ⽂件模块。请注意，打开后将⽆法监视.js ⽂件。
        watchFiles: true // 监视⽂件更改，并重新加载 mock 数据
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    build: {
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            // elementPlus: ['element-plus'],
            vue: ['vue'],
            vueRouter: ['vue-router']
          }
          // manualChunks(id) {
          //   console.log(id)
          //   return ''
          //   // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
          //   // if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
          //   //   return 'vendor'
          //   // }
          // }
        }
      }
    }
  }
})
