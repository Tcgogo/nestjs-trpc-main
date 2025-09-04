import { z } from 'zod'

export const getShopListInput = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
})

export const getShopListOutput = z.array(z.object({
  id: z.number(),
  name: z.string(),
  stock: z.number(),
  price: z.number(),
  description: z.string(),
  isActive: z.number(),
}))

export const shopCreateInput = z.object({
  name: z.string(),
  stock: z.number(),
  price: z.number(),
  description: z.string(),
  isActive: z.number(),
})
