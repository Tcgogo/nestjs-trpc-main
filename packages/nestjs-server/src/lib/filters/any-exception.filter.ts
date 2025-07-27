import type {
  ArgumentsHost,
  ExceptionFilter,
} from '@nestjs/common'
import type { FastifyReply, FastifyRequest } from 'fastify'

import {
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common'

import { BizException } from '@/lib/exceptions/biz.exception'
import { ResOp } from '@/lib/model/response.model'

interface myError {
  readonly status: number
  readonly statusCode?: number

  readonly message?: string
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name)

  constructor() {
    this.registerCatchAllExceptionsHook()
  }

  catch(exception: unknown, host: ArgumentsHost) {
    console.log('%c [ exception ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', exception)

    const ctx = host.switchToHttp()
    const request = ctx.getRequest<FastifyRequest>()
    const response = ctx.getResponse<FastifyReply>()

    if (request.method === 'OPTIONS') { return response.status(HttpStatus.OK).send() }

    const url = request.raw.url!

    const status
      = exception instanceof HttpException
        ? exception.getStatus()
        : (exception as myError)?.status
          || (exception as myError)?.statusCode
          || HttpStatus.INTERNAL_SERVER_ERROR

    let message
      = (exception as any)?.response?.message
        || (exception as myError)?.message
        || `${exception}`

    const zodErrorMessage = (exception as any)?.getResponse?.()
    const isZodError = Array.isArray(zodErrorMessage) && zodErrorMessage[0]?.error?.errmsg

    // 系统内部错误时
    if (isZodError) {
      message = zodErrorMessage[0]?.error?.errmsg
      Logger.error(zodErrorMessage, undefined, 'Catch')
    }
    else if (
      status === HttpStatus.INTERNAL_SERVER_ERROR
      && !(exception instanceof BizException)
    ) {
      Logger.error(exception, undefined, 'Catch')

      // 生产环境下隐藏错误信息
      // if (!isDev) { message = ErrorCode[ErrorCodeEnum.ServerError] }
    }
    else {
      this.logger.warn(
        `错误信息：(${status}) ${message} Path: ${decodeURI(url)}`,
      )
    }

    const errorCode: number
      = exception instanceof BizException ? exception.bizCode : status

    // 返回基础响应结果
    const resBody = new ResOp({
      code: errorCode,
      message,
      ok: false,
    })

    response.status(status).type('application/json').send(resBody)
  }

  registerCatchAllExceptionsHook() {
    process.on('unhandledRejection', (reason) => {
      console.error('unhandledRejection: ', reason)
    })

    process.on('uncaughtException', (err) => {
      console.error('uncaughtException: ', err)
    })
  }
}
