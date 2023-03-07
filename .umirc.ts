import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@hexagrams/plugin-ice-stark'],
  history: {
    type: 'browser',
  },
  base: '/login',
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
      target: 'https://linshenglong.cn',
    },
  },
});
