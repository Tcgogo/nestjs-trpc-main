import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common'
import type { Observable } from 'rxjs'
import {
  Injectable,
  Logger,
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import { RESPONSE_SUCCESS_MSG } from '@/lib/constants'

interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T>
implements NestInterceptor<T, Response<T>> {
  private readonly logger = new Logger(TransformInterceptor.name)

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    this.logger.warn('TransformInterceptor')
    return next.handle().pipe(
      map((data) => {
        // TODO: 如果这里处理了数据，对应的 Trpc/client 也需要处理
        return data
      }),
    )
  }
}
