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
  title: '畅游-管旅游·用畅游',
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
