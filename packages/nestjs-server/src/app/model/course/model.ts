const config = {
  name: 'bilibili',
  desc: 'bilibili管理系统',
  // key => 默认 menu key
  homePage: {
    path: '/todo',
    query: {
      menuKey: '',
    },
  },
  menu: [
    {
      key: 'traffic',
      name: '流量管理',
      menuType: 'module',
      moduleType: 'sider',
      sideConfig: {
        menu: [
          {
            key: 'student',
            name: '学员流量',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
        ],
      },
    },
  ],
}

export default config
