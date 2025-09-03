import { z } from 'zod'

export const getShopListInput = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
})

export const getShopListOutput = z.array(z.object({
  id: z.number(),
  name: z.string(),
}))

export const shopCreateInput = z.object({
  name: z.string(),
})
