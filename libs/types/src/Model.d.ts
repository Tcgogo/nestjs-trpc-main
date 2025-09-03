/// <reference path="./JsonSchema.d.ts" />

declare namespace Model {
  interface Meta {
    /** 标题 */
    title?: string | (() => string)
    /** 图标 */
    icon?: string
    /** 权限 */
    auth?: string | string[]
  }

  // iframe 配置
  interface IframeConfig {
    /** 路径 */
    path: string
  }

  // schema 配置
  interface SchemaConfig {
    /** 标题 */
    title?: string
    /** 描述 */
    description?: string

    /** JSON Schema */
    jsonSchema: JsonSchema.ObjectProperty

    /** API Name */
    api?: string
  }

  // 基础接口保持不变
  interface recordMainRawBase {
    path?: string
    name?: string
    meta?: Meta
    children?: recordMainRaw[]
  }

  // 使用互斥属性确保类型安全
  interface recordMainRawIframe extends recordMainRawBase {
    component: 'Iframe'
    iframeConfig: IframeConfig // Iframe 必须配置
  }

  interface recordMainRawSchema extends recordMainRawBase {
    component: 'Schema'
    schemaConfig: SchemaConfig // Schema 必须配置
  }

  interface recordMainRawOther extends recordMainRawBase {
    component?: { path: string } | 'Layout'
  }

  // 最终联合类型
  type recordMainRaw = recordMainRawIframe | recordMainRawSchema | recordMainRawOther

  // 模型接口保持不变
  interface Info {
    title: string
    model: string
    menu?: recordMainRaw[]
  }
}
