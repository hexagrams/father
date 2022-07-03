import { defineConfig } from 'umi';

export default defineConfig({
  title: false,
  history: {
    type: 'browser',
  },
  favicon: 'https://s1.ax1x.com/2022/07/03/jGJ4bD.png',
  hash: false,
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
  webpack5: {}, // 启动webpack5
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  externals: {},
  scripts: [],
  alias: {
    '@': './src',
  },
  chainWebpack(config) {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      // pathRewrite: { '^/igate': '' },
    },
  },
});
