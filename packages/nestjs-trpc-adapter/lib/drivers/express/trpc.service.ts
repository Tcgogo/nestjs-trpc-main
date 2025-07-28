import type { AnyRouter } from '@trpc/server'
import type { ContextOptions, TRPCContext } from '../../interfaces'
// src/trpc/trpc.service.ts
import { Injectable } from '@nestjs/common'

@Injectable()
export class ExpressTRPCService {
  private router!: AnyRouter
  private createContext?: (opts: ContextOptions) => any

  setConfig(router: AnyRouter, createContext?: TRPCContext['create']) {
    this.router = router
    this.createContext = createContext
  }

  getConfig() {
    return {
      router: this.router,
      createContext: this.createContext,
    }
  }
}
