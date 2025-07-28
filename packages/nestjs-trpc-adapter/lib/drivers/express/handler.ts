// @trpc/server
import type { AnyRouter } from '@trpc/server'
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
import type { Request, Response } from 'express'
import { incomingMessageToRequest } from '@trpc/server/adapters/node-http'
import { resolveResponse } from '@trpc/server/http'

export type ExpressHandlerOptions<
  TRouter extends AnyRouter,
  TRequest extends Request,
  TResponse extends Response,
> = HTTPBaseHandlerOptions<TRouter, TRequest>
  & NodeHTTPCreateContextOption<TRouter, TRequest, TResponse>

type ExpressRequestHandlerOptions<
  TRouter extends AnyRouter,
  TRequest extends Request,
  TResponse extends Response,
> = ExpressHandlerOptions<TRouter, TRequest, TResponse> & {
  req: TRequest
  res: TResponse
  path: string
}

export async function expressRequestHandler<
  TRouter extends AnyRouter,
  TRequest extends Request,
  TResponse extends Response,
>(opts: ExpressRequestHandlerOptions<TRouter, TRequest, TResponse>) {
  const createContext: ResolveHTTPRequestOptionsContextFn<TRouter> = async (
    innerOpts,
  ) => {
    return await opts.createContext?.({
      ...opts,
      ...innerOpts,
    })
  }

  const incomingMessage: NodeHTTPRequest = opts.req as any

  // monkey-patch body to the IncomingMessage
  if ('body' in opts.req) {
    (incomingMessage as any).body = opts.req.body
  }
  const req = incomingMessageToRequest(incomingMessage, opts.res as any, {
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
  // const res2 = await opts.res.send(res)

  return res
}
