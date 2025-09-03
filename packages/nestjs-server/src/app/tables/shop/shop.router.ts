import { Inject } from '@nestjs/common'
import { Input, Mutation, Query, Router } from 'nestjs-trpc-adapter'
import { z } from 'zod'

import { getShopListInput, getShopListOutput, shopCreateInput } from './dto/zod'
import { ShopService } from './shop.service'

@Router({ alias: 'tablesShop' })
export class ShopRouter {
  constructor(@Inject(ShopService) private shopService: ShopService) { }

  @Query({ input: getShopListInput, output: getShopListOutput })
  async index() {
    return this.shopService.index()
  }

  @Mutation({ input: shopCreateInput, output: z.any() })
  async create(@Input() input: z.infer<typeof shopCreateInput>) {
    return this.shopService.create(input)
  }
}
