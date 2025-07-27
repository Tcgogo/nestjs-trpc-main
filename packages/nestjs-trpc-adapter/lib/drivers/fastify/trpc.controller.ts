import type { Request, Response } from 'express'
import { All, Controller, Get, HttpException, HttpStatus, Inject, Req, Res } from '@nestjs/common'

import { TRPCService } from './trpc.service'
import { fastifyRequestHandler } from './handler'

@Controller('trpc')
export class TRPCController {
  constructor(
    @Inject(TRPCService) private readonly trpcService: TRPCService,
  ) {}

  @All(':path')
  async handleRequest(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { router, createContext } = this.trpcService.getConfig()

    // 获取路径参数
    const path = (req.params as any).path

    // 处理content-type
    if (req.headers['content-type'] === 'application/json') {
      // 确保JSON body被正确解析
      if (typeof req.body === 'string') {
        try {
          req.body = JSON.parse(req.body)
        }
        catch (error) {
          throw new HttpException(error as any, HttpStatus.BAD_REQUEST)
        }
      }
    }

    const data = await fastifyRequestHandler({
      router,
      createContext: createContext ? opts => createContext(opts) : undefined,
      req: req as any,
      res: res as any,
      path,
    })

    // 处理tRPC响应 - 使用passthrough模式
    if (data && data.body) {
      // 设置响应头
      if (data.headers) {
        Object.entries(data.headers).forEach(([key, value]) => {
          res.setHeader(key, value)
        })
      }

      const body = await new Response(data.body).json()

      if (data.status !== 200) {
        throw new HttpException(body, data.status)
      }

      // 设置状态码
      res.status(200)
      // 返回响应体，让NestJS处理, 将Readable 流转换为 JSON 对象
      return body
    }
    else {
      res.status(204)
      return null
    }
  }
}
