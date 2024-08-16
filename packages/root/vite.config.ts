import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        'root-config': './src/main.ts',
      },
      output: {
        format: 'system',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]',
        globals: {
          'single-spa': 'singleSpa',
          'single-spa-layout': 'singleSpaLayout',
        },
      },
      preserveEntrySignatures: 'strict',
      external: [
        'single-spa',
        'single-spa-layout',
        'node_modules/regenerator-runtime/runtime.js',
      ],
    },
  },
  plugins: [
    ViteEjsPlugin((config) => {
      return {
        root: config.root,
      };
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/regenerator-runtime/runtime.js',
          dest: 'assets',
          rename: 'regenerator-runtime.js',
        },
        {
          src: 'node_modules/bluebird/js/browser/bluebird.core.min.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/whatwg-fetch/dist/fetch.umd.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/single-spa-layout/dist/system/single-spa-layout.min.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/single-spa/lib/es5/system/single-spa.min.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/import-map-overrides/dist/import-map-overrides.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/vue/dist/vue.global.prod.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/vue-router/dist/vue-router.global.prod.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/systemjs/dist/system.min.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/systemjs/dist/extras/amd.min.js',
          dest: 'assets',
          rename: 'system.amd.min.js',
        },
        {
          src: 'node_modules/pinia/dist/pinia.iife.prod.js',
          dest: 'assets',
        },
        {
          src: 'node_modules/single-spa-vue/dist/umd/single-spa-vue.min.js',
          dest: 'assets',
        },
      ],
    }),
  ],
});
