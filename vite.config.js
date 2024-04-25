import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import shopify from 'vite-plugin-shopify'
import shopifyModules from 'vite-plugin-shopify-modules'
import cleanup from '@by-association-only/vite-plugin-shopify-clean'
import dynamicImport from 'vite-plugin-dynamic-import'
import babel from 'vite-plugin-babel';

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`
      }
    },
    sourcemap: false
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  publicDir: 'public',
  plugins: [
    babel(),
    dynamicImport(),
    /**
     * Copy plain static assets to the root of the dist directory as-is.
     * - During build, vite knows how to handle it
     * - During dev, use rollup-plugin-copy
     */
    copy({
      targets: [
        {
          src: 'public/*',
          dest: 'assets'
        }
      ],
      flatten: true,
      hook: 'buildStart'
    }),
    cleanup(),
    shopify(),
    shopifyModules({
      modulesDir: 'modules'
    })
  ]
})
