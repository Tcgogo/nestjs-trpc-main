// import type { RouteRecordRaw } from 'vue-router'

// // 重写 component 类型
// type CustomRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'children'> & {
//   component?: string // 可选字符串
//   children?: CustomRouteRecordRaw[]
// }

interface Meta {
  /** 标题 */
  title?: string | (() => string)
  /** 图标 */
  icon?: string
  /** 权限 */
  auth?: string | string[]
}

declare namespace Model {

  interface CustomRouteRecordRaw {
    /** 路径 */
    path?: string
    /** 名称 */
    name?: string
    /** 元数据 */
    meta?: Meta
    /** 组件 */
    component?: string
    /** 子路由 */
    children?: CustomRouteRecordRaw[]
  }

  /** 原始路由 */
  interface recordMainRaw {
    /** 路径 */
    path?: string
    /** 名称 */
    name?: string
    /** 元数据 */
    meta?: Meta
    /** 子路由 */
    children?: CustomRouteRecordRaw[]
  }

  /** 模型 */
  interface Info {
    /** 模型名称 */
    title: string
    /** 模型唯一标识 */
    model: string
    /** 模型菜单 */
    menu?: recordMainRaw[]
  }
}
