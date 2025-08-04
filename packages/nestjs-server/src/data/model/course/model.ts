const config: Model.Info = {
  model: 'course',
  title: '课程系统',
  menu: [
    {
      meta: {
        title: '课程管理',
        icon: 'uim:box',
      },
      children: [
        {
          path: '/multilevel_menu_example',
          component: 'Layout',
          name: 'courseList',
          meta: {
            title: '课程列表',
            icon: 'heroicons-solid:menu-alt-3',
          },
          children: [
            {
              path: 'page',
              name: 'courseList1',
              component: { path: 'multilevel_menu_example/page.vue' },
              meta: {
                title: '课程列表1',
              },
            },
            {
              path: 'page',
              name: 'courseList2',
              component: { path: 'multilevel_menu_example/page.vue' },
              meta: {
                title: '课程列表2',
              },
            },
          ],
        },
      ],
    },
    {
      meta: {
        title: '课程分类',
        icon: 'uim:box',
      },
      children: [
        {
          path: '/page',
          name: 'courseCategoryList',
          component: { path: 'multilevel_menu_example/page.vue' },
          meta: {
            title: '课程分类列表',
          },
        },
      ],
    },
    {
      meta: {
        title: '课程标签',
        icon: 'uim:box',
      },
      children: [
        {
          path: '/page',
          name: 'courseTagList',
          component: { path: 'multilevel_menu_example/page.vue' },
          meta: {
            title: '课程标签列表',
          },
        },
      ],
    },
  ],
}

export default config
