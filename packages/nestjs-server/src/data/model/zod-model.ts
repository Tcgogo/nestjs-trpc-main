import { z } from 'zod'

// 基础字段定义
const baseFields = {
  path: z.string().optional(),
  name: z.string().optional(),
  meta: z.object({
    title: z.string().optional(),
    icon: z.string().optional(),
    auth: z.string().optional(),
  }).optional(),
}

// 使用 z.lazy() 处理递归结构
const MenuItemSchema: z.ZodSchema<Model.recordMainRaw> = z.lazy(() => z.union([
  // recordMainRawIframe - component 为 'Iframe' 时必须有 iframeConfig
  z.object({
    ...baseFields,
    component: z.literal('Iframe'),
    iframeConfig: z.object({
      path: z.url(),
    }),
    children: z.array(MenuItemSchema).optional(),
  }),

  // recordMainRawSchema - component 为 'Schema' 时必须有 schemaConfig
  z.object({
    ...baseFields,
    component: z.literal('Schema'),
    schemaConfig: z.object({
      title: z.string().optional(),
      api: z.string().optional(),
      description: z.string().optional(),
      jsonSchema: z.object({
        title: z.string(),
        type: z.literal('object'),
        properties: z.record(z.string(), z.any()),
      }),
    }),
    children: z.array(MenuItemSchema).optional(),
  }),

  // recordMainRawOther - component 为对象或不存在
  z.object({
    ...baseFields,
    component: z.object({ path: z.string() }).or(z.literal('Layout')).optional(),
    children: z.array(MenuItemSchema).optional(),
  }),
]))

export const ModelInfoSchema: z.ZodSchema<Model.Info> = z.object({
  title: z.string(),
  model: z.string(),
  menu: z.array(MenuItemSchema).optional(),
})

const ModelEasySchema = z.object({
  title: z.string(),
  model: z.string(),
})

export const ModelListSchema = z.array(ModelEasySchema)
