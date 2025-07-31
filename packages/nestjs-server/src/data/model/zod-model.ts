import { z } from 'zod'

const customRouteRecordRaw: z.ZodSchema<Model.CustomRouteRecordRaw> = z.object({
  path: z.string().optional(),
  name: z.string().optional(),
  meta: z.object({
    title: z.string().optional(),
    icon: z.string().optional(),
    auth: z.string().optional(),
  }).optional(),
})

const MenuItemSchema: z.ZodSchema<Model.recordMainRaw> = z.object({
  path: z.string().optional(),
  name: z.string().optional(),
  meta: z.object({
    title: z.string().optional(),
    icon: z.string().optional(),
    auth: z.string().optional(),
  }).optional(),
  children: z.array(customRouteRecordRaw).optional(),
})

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
