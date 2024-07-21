import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: { pattern: '[name]_[local]' }
    }
  },
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: (path) =>
          path.split('/').reverse()[
            path.split('/').reverse().indexOf('node_modules') - 1
          ]
      }
    }
  }
})
