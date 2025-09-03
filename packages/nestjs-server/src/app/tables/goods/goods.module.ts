import { Module } from '@nestjs/common'

import { GoodsRouter } from './goods.router'
import { GoodsService } from './goods.service'

@Module({
  controllers: [],
  providers: [GoodsService, GoodsRouter],
})
export class ModelServiceModule {}
