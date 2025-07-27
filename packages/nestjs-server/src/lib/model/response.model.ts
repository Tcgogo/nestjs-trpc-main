import {
  RESPONSE_SUCCESS_CODE,
  RESPONSE_SUCCESS_MSG,
} from '@/lib/constants'

export interface IBaseResponse<T = any> {
  ok?: boolean
  code?: number
  message?: string
  data?: T
}

export class ResOp<T = any> {
  ok: boolean

  code: number

  message: string

  data?: T

  constructor({
    code,
    message,
    ok,
    data,
  }: IBaseResponse<T>) {
    this.code = code ?? RESPONSE_SUCCESS_CODE
    this.message = message ?? RESPONSE_SUCCESS_MSG
    this.ok = ok ?? true

    if (data) { this.data = data }
  }
}
