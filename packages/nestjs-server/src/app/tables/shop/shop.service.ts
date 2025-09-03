import type { Repository } from 'typeorm'
import type z from 'zod'
import type { shopCreateInput } from './dto/zod'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Shop } from './dto'

interface User {
  name: string
  email: string
  password: string
}

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepositroy: Repository<Shop>,
  ) {}

  async index() {
    const shops = await this.shopRepositroy.find()
    console.log('%c [ shops ]-21', 'font-size:13px; background:pink; color:#bf2c9f;', shops)
    return shops
  }

  async create(input: z.infer<typeof shopCreateInput>) {
    const shop = this.shopRepositroy.create(input)
    await this.shopRepositroy.save(shop)
    return shop
  }
}
