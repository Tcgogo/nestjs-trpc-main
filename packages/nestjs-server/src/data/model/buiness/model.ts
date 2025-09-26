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
              'ui:HandleColumn': {
                width: 150,
                fixed: 'right',
                align: 'center',
                title: '操作2',
              },
              properties: {
                arraySelect: {
                  type: 'array',
                  title: '数组选择',
                  createOption: {
                    field: 'select',
                    props: {
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                        },
                        {
                          value: '2',
                          label: '香蕉',
                        },
                      ],
                    },
                  },
                },
                arrayCheckboxGroup: {
                  type: 'array',
                  title: '数组多选',
                  createOption: {
                    field: 'checkbox-group',
                    props: {
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                        },
                        {
                          value: '2',
                          label: '香蕉',
                        },
                      ],
                    },
                  },
                },
                arrayCascader: {
                  type: 'array',
                  title: '数组级联',
                  createOption: {
                    field: 'cascader',
                    props: {
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                          children: [
                            {
                              value: '1-1',
                              label: '火龙果1',
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                arrayTimeSelect: {
                  type: 'array',
                  title: '数组时间',
                  createOption: {
                    field: 'time-select',
                  },
                },
                arrayTimePicker: {
                  type: 'array',
                  title: '数组时间',
                  createOption: {
                    field: 'time-picker',
                  },
                },
                object: {
                  type: 'object',
                  title: '对象2',
                  properties: {
                    name: {
                      type: 'string',
                      title: '名称',
                      createOption: {},
                    },
                    age: {
                      type: 'string',
                      title: '年龄',
                      createOption: {},
                    },
                    isActive: {
                      type: 'boolean',
                      title: '是否上架',
                      createOption: {},
                    },
                  },
                },

                checkboxGroup: {
                  type: 'string',
                  title: '多选',
                  createOption: {
                    field: 'checkbox-group',
                    props: {
                      props: {
                        value: 'value',
                        label: 'label',
                        disabled: 'disabled',
                      },
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                        },
                        {
                          value: '2',
                          label: '香蕉',
                          disabled: true,
                        },
                        {
                          value: '3',
                          label: '苹果',
                        },
                      ],
                    },
                  },
                },
                cascader: {
                  type: 'string',
                  title: '级联',
                  createOption: {
                    field: 'cascader',
                    props: {
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                          children: [
                            {
                              value: '1-1',
                              label: '火龙果1',
                            },
                          ],
                        },
                        {
                          value: '2',
                          label: '香蕉',
                          children: [
                            {
                              value: '2-1',
                              label: '香蕉1',
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                timeSelect: {
                  type: 'string',
                  title: '时间',
                  createOption: {
                    field: 'time-select',
                  },
                },
                timePicker: {
                  type: 'string',
                  title: '时间',
                  createOption: {
                    field: 'time-picker',
                  },
                },
                radio: {
                  type: 'string',
                  title: '单选',
                  createOption: {
                    field: 'radio-group',
                    props: {

                      props: {
                        value: 'value',
                        label: 'label',
                        disabled: 'disabled',
                      },
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                        },
                        {
                          value: '2',
                          label: '香蕉',
                          disabled: true,
                        },
                        {
                          value: '3',
                          label: '苹果',
                        },
                      ],
                    },
                  },
                },
                mention: {
                  type: 'string',
                  title: '提及',
                  createOption: {
                    field: 'mention',
                    props: {
                      options: [
                        {
                          value: '火龙果',
                          label: '火龙果',
                        },
                        {
                          value: '香蕉',
                          label: '香蕉',
                        },
                      ],
                    },
                  },
                },
                date: {
                  type: 'string',
                  title: '日期',
                  createOption: {
                    field: 'date-picker',
                    props: {
                      type: 'daterange',
                      rangeSeparator: 'To',
                      startPlaceholder: 'Start date',
                      endPlaceholder: 'End date',
                    },
                  },
                },
                color: {
                  type: 'string',
                  title: '颜色',
                  createOption: {
                    field: 'color-picker',
                  },
                },
                title: {
                  type: 'string',
                  title: '标题',
                  createOption: {
                    field: 'select',
                    props: {
                      border: true,
                      options: [
                        {
                          value: '1',
                          label: '火龙果',
                        },
                        {
                          value: '2',
                          label: '香蕉',
                          disabled: true,
                        },
                        {
                          value: '3',
                          label: '苹果',
                        },
                      ],
                    },
                  },
                },
                isActive2: {
                  type: 'boolean',
                  title: '是否上架2',
                  createOption: {
                    field: 'radio',
                    props: {
                      border: true,
                    },
                  },
                },
                switch: {
                  type: 'boolean',
                  title: '开关',
                  createOption: {
                    field: 'switch',
                  },
                },
                checkbox: {
                  type: 'boolean',
                  title: 'checkbox',
                  createOption: {
                    field: 'checkbox',
                  },
                },
                radio2: {
                  type: 'boolean',
                  title: '单选',
                  createOption: {
                    field: 'radio',
                  },
                },
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
                      },
                    },
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
                  required: true,
                  valueType: 'long-text',
                  'ui:VxeColumn': {
                    width: 300,
                    cellRender: {
                      props: {

                      },
                    },
                  },
                  createOption: {},
                },
                isActive: {
                  type: 'boolean',
                  title: '是否上架',
                },
                test1: {
                  type: 'string',
                  title: '测试1',
                },
                test2: {
                  type: 'string',
                  title: '测试2',
                },
                test3: {
                  type: 'string',
                  title: '测试3',
                },
                test4: {
                  type: 'string',
                  title: '测试4',
                },
                test5: {
                  type: 'string',
                  title: '测试5',
                },
                test6: {
                  type: 'string',
                  title: '测试6',
                },
                test7: {
                  type: 'string',
                  title: '测试7',
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
