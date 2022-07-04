export const qiankun = {
  // 注册子应用信息
  apps: [
    {
      name: 'qian', // 唯一 id
      entry: '//localhost:8001', // html entry
    },
  ],
  routes: [
    {
      path: '/qian',
      microApp: 'qian',
    },
  ],
};
