const path = require('path')
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    build: {
      rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        page2: resolve(__dirname, 'src/page2/index.html'),
        orderForm: resolve(__dirname, 'src/orderForm/index.html')
      },
    },
    outDir: '../dist'
  },
  server: {
    port: 8080,
    hot: true
  }
})