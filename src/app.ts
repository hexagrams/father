export const qiankun = {
  // 注册子应用信息
  apps: [
    {
      path: '/qian',
      microApp: 'qian',
      name: 'qian', // 唯一 id
      entry: '//localhost:8001', // html entry
    },
  ],
  routes: [
    {
      name: 'qian', // 唯一 id
      entry: '//localhost:8001', // html entry
      path: '/qian',
      microApp: 'qian',
    },
  ],
};
