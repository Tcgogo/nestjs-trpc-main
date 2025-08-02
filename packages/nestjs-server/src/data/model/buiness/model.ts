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
          path: '/multilevel_menu_example',
          component: 'Layout',
          name: 'multilevelMenuExample',
          meta: {
            title: '商品列表',
            icon: 'heroicons-solid:menu-alt-3',
          },
          children: [
            {
              path: 'page',
              name: 'productList1',
              component: 'multilevel_menu_example/page.vue',
              meta: {
                title: '商品列表1',
              },
            },
            {
              path: 'page',
              component: 'multilevel_menu_example/level2/page.vue',
              name: 'productList2',
              meta: {
                title: '商品列表2',
              },
              children: [
                {
                  path: 'page',
                  name: 'productList2-1',
                  component: 'multilevel_menu_example/level3/page.vue',
                  meta: {
                    title: '商品列表2-1',
                  },
                },
                {
                  path: 'page',
                  component: 'multilevel_menu_example/level3/page.vue',
                  name: 'productList2-2',
                  meta: {
                    title: '商品列表2-2',
                  },
                },
              ],
            },
          ],
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
          path: '/page',
          component: 'multilevel_menu_example/level2/level3/page1.vue',
          name: 'shopSetting',
          meta: {
            title: '店铺设置',
            icon: 'material-symbols:settings-suggest-outline',
          },
        },
        {
          path: '/page',
          component: 'multilevel_menu_example/level2/level3/page1.vue',
          name: 'shopList',
          meta: {
            title: '店铺列表',
            icon: 'material-symbols:store-outline',
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
          path: '/page',
          component: 'multilevel_menu_example/level2/level3/page2.vue',
          name: 'orderList',
          meta: {
            title: '订单列表',
            icon: 'material-symbols:receipt-long-outline',
          },
        },
        {
          path: '/page',
          component: 'multilevel_menu_example/level2/level3/page2.vue',
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
