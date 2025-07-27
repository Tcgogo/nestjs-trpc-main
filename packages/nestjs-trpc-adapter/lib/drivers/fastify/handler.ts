// @trpc/server
import type { AnyRouter, CreateContextCallback, inferRouterContext } from '@trpc/server'
import type { NodeHTTPCreateContextOption, NodeHTTPRequest } from '@trpc/server/adapters/node-http'
import type { HTTPBaseHandlerOptions, ResolveHTTPRequestOptionsContextFn } from '@trpc/server/http'
/**
 * If you're making an adapter for tRPC and looking at this file for reference, you should import types and functions from `@trpc/server` and `@trpc/server/http`
 *
 * @example
 * ```ts
 * import type { AnyTRPCRouter } from '@trpc/server'
 * import type { HTTPBaseHandlerOptions } from '@trpc/server/http'
 * ```
 */
import type { FastifyReply, FastifyRequest } from 'fastify'
import { incomingMessageToRequest } from '@trpc/server/adapters/node-http'
import { resolveResponse } from '@trpc/server/http'

export type FastifyHandlerOptions<
  TRouter extends AnyRouter,
  TRequest extends FastifyRequest,
  TResponse extends FastifyReply,
> = HTTPBaseHandlerOptions<TRouter, TRequest>
  & NodeHTTPCreateContextOption<TRouter, TRequest, TResponse>

type FastifyRequestHandlerOptions<
  TRouter extends AnyRouter,
  TRequest extends FastifyRequest,
  TResponse extends FastifyReply,
> = FastifyHandlerOptions<TRouter, TRequest, TResponse> & {
  req: TRequest
  res: TResponse
  path: string
}

export async function fastifyRequestHandler<
  TRouter extends AnyRouter,
  TRequest extends FastifyRequest,
  TResponse extends FastifyReply,
>(opts: FastifyRequestHandlerOptions<TRouter, TRequest, TResponse>) {
  const createContext: ResolveHTTPRequestOptionsContextFn<TRouter> = async (
    innerOpts,
  ) => {
    return await opts.createContext?.({
      ...opts,
      ...innerOpts,
    })
  }

  const incomingMessage: NodeHTTPRequest = opts.req.raw

  // monkey-path body to the IncomingMessage
  if ('body' in opts.req) {
    incomingMessage.body = opts.req.body
  }
  const req = incomingMessageToRequest(incomingMessage, opts.res.raw, {
    maxBodySize: null,
  })

  const res = await resolveResponse({
    ...opts,
    req,
    error: null,
    createContext,
    onError(o) {
      opts?.onError?.({
        ...o,
        req: opts.req,
      })
    },
  })
  console.log('%c [ res ]-68', 'font-size:13px; background:pink; color:#bf2c9f;', res)

  // const res2 = await opts.res.send(res)

  return res
}
