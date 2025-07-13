import type { AppRouter } from 'nestjs-server'
import { createTRPCProxyClient } from '@trpc/client'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'

const url = 'http://localhost:3000/trpc'

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url })],
})
