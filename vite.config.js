import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createBabelPlugin } from 'vite-plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createBabelPlugin({
      babelConfig: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }
    })
  ],
  resolve: {
    preserveSymlinks: true
  }
})
