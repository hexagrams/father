import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@hexagrams/plugin-ice-stark'],
  history: {
    type: 'hash',
  },
  iceStark: {
    master: {},
  },
  publicPath: '/public/productList/father/',
  dynamicImport: {
    loading: '@/components/Loading',
  },
  inlineLimit: 30000,
  nodeModulesTransform: {
    type: 'none',
  },
  ignoreMomentLocale: true,
  webpack5: {},
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
    },
  },
});
