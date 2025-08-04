const config: Model.Info = {
  model: 'buiness',
  title: '电商系统',
  menu: [
    {
      meta: {
        title: '商品管理',
        icon: 'simple-icons:shopify',
      },
      children: [
        {
          path: '/dashboard/schema',
          component: 'Schema',
          schemaConfig: {
            title: '商品列表',
          },
          name: 'goodsList',
          meta: {
            title: '商品列表',
          },
        },
      ],
    },
    {
      meta: {
        title: '店铺管理',
        icon: 'uim:box',
      },
      children: [
        {
          path: '/dashboard/iframe',
          component: 'Iframe',
          iframeConfig: {
            path: 'http://localhost:9000/#/login',
          },
          name: 'shopList',
          meta: {
            title: '店铺列表',
          },
        },
      ],
    },
    {
      meta: {
        title: '订单管理',
        icon: 'uim:box',
      },
      children: [
        {
          path: '/multilevel_menu_example',
          component: { path: 'multilevel_menu_example/level2/level3/page2.vue' },
          name: 'orderList',
          meta: {
            title: '订单列表',
            icon: 'material-symbols:receipt-long-outline',
          },
        },
        {
          path: '/multilevel_menu_example',
          component: { path: 'multilevel_menu_example/level2/level3/page2.vue' },
          name: 'orderList',
          meta: {
            title: '订单统计',
            icon: 'material-symbols:analytics-outline',
          },
        },
      ],
    },
  ],
}

export default config
