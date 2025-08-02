import { z } from 'zod'

// 使用 z.lazy() 处理递归结构
const MenuItemSchema: z.ZodSchema<Model.recordMainRaw> = z.lazy(() => z.object({
  path: z.string().optional(),
  name: z.string().optional(),
  meta: z.object({
    title: z.string().optional(),
    icon: z.string().optional(),
    auth: z.string().optional(),
  }).optional(),
  children: z.array(MenuItemSchema).optional(),
}))

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
