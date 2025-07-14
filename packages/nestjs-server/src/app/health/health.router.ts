import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import { z } from 'zod'
import { HealthService } from './health.service'

const dogsSchema = z.object({
  name: z.string(),
  age2: z.number(),
  breed: z.enum(['Labrador', 'Corgi', 'Beagle', 'Golden Retriver']),
})

interface Dogs {
  name: string
  age2: number
  breed: string
}

@Router()
export class HealthRouter {
  constructor(@Inject(HealthService) private healthService: HealthService) {}

  @Query({ output: dogsSchema, input: dogsSchema })
  async getUser(@Input() input: Dogs): Promise<Dogs> {
    const dogs = await this.healthService.getUser(input.name)

    return {
      name: dogs.name,
      age2: 20,
      breed: 'Labrador',
    }
  }
}
