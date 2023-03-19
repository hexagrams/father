import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'browser',
  },
  runtimePublicPath: true,
  dynamicImport: {
    loading: '@/components/Loading',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  inlineLimit: 30000,
  ignoreMomentLocale: true,
  webpack5: {},
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'https://linshenglong.cn',
    },
  },
});
