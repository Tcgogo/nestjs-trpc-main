import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Shop } from './dto'
import { ShopRouter } from './shop.router'
import { ShopService } from './shop.service'

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [],
  providers: [ShopService, ShopRouter],
})
export class ShopModule {}
