const path = require('path')
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      root: path.resolve(__dirname, 'src'),
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'src/index.html'),
            orderForm: resolve(__dirname, 'src/orderForm/index.html'),
            design: resolve(__dirname, 'src/designForm/index.html'),
            review: resolve(__dirname, 'src/orderReview/index.html')
          },
        },
        outDir: '../dist'
      },
      server: {
        port: 8080,
        hot: true
      }
    })