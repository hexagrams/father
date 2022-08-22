import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@hexagrams/plugin-ice-stark'],
  history: {
    type: 'hash',
  },
  iceStark: {
    master: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
    },
  },
});
