import type { Model } from '@tcgogo/types'
import { getApiName } from '../utils'

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
            title: '商品列表1',
            api: getApiName('tablesShop'),
            jsonSchema: {
              type: 'object',
              title: '商品',
              'ui:VxeTable': {
                border: true,
                round: true,
                align: 'center',
                stripe: true,
                columnConfig: {
                  resizable: true,
                },
              },
              properties: {
                nameList: {
                  type: 'array',
                  title: '商品名称',
                  enum: [{
                    value: '1',
                    label: '火龙果',
                  }, {
                    value: '2',
                    label: '香蕉',
                  }, {
                    value: '3',
                    label: '苹果',
                  }],
                },
                price: {
                  type: 'number',
                  title: '商品价格',
                  valueFormatter: (value) => {
                    return `${value}%`
                  },
                  valueType: 'tags',
                  'ui:VxeColumn': {
                    sortable: true,
                    cellRender: {
                      props: {
                        type: 'success',
                      }
                    }
                  },
                },
                stock: {
                  type: 'number',
                  title: '商品库存',
                  valueType: 'percent',
                  'ui:VxeColumn': {
                    cellRender: {
                      props: {
                        type: 'success',
                      },
                    },
                  },
                },
                description: {
                  type: 'string',
                  title: '商品描述',
                  valueType: 'code',
                  'ui:VxeColumn': {
                    width: 300,
                    cellRender: {
                      props: {
                        class: 'min-h-50',
                      }
                    },
                  },
                },
                isActive: {
                  type: 'boolean',
                  title: '是否上架',
                },
              },
            },
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
