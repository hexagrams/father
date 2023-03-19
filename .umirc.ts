import { defineConfig } from 'umi';
import baseConfig from '@hexagrams/base-config';

export default defineConfig({
  ...baseConfig.umi,
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
  ignoreMomentLocale: true,
  webpack5: {},
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'https://linshenglong.cn',
    },
  },
});
