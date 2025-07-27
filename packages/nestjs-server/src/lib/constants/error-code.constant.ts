export enum ErrorCodeEnum {
  /** 未知错误 */
  Default = 1,
  /** 服务器错误 */
  ServerError = 500,

  /** JWT无效 */
  JWTInvalid = 1103,
  /** 认证失败 */
  AuthFail = 1000,
  /** 没有权限 */
  NoPermission = 1001,
  /** 资源不存在 */
  ResourceNotFound = 1102,

  /** 请求过于频繁 */
  RequestTooFast = 1200,

  /** 用户不存在 */
  UserNotFound = 2001,
  /** 用户已存在 */
  UserExist = 2002,
  /** 密码错误 */
  PasswordMismatch = 2003,

  /** 验证码无效 */
  VerificationCodeError = 3000,
  /** 验证码发送失败 */
  VerificationCodeSendFail = 3001,
  /** 一天最多发送5个验证码 */
  MaximumFiveVerificationCodesPerDay = 3002,
}

export const ErrorCode: Record<ErrorCodeEnum, string> = {
  [ErrorCodeEnum.Default]: '未知错误',
  [ErrorCodeEnum.ServerError]: '服务器错误, 请稍后再试',

  [ErrorCodeEnum.JWTInvalid]: 'JWT无效',
  [ErrorCodeEnum.AuthFail]: '认证失败',
  [ErrorCodeEnum.NoPermission]: '没有权限',
  [ErrorCodeEnum.ResourceNotFound]: '资源不存在',
  [ErrorCodeEnum.RequestTooFast]: '请求过于频繁',

  [ErrorCodeEnum.UserNotFound]: '用户不存在',
  [ErrorCodeEnum.UserExist]: '用户已存在',
  [ErrorCodeEnum.PasswordMismatch]: '密码错误',

  [ErrorCodeEnum.VerificationCodeError]: '验证码无效',
  [ErrorCodeEnum.VerificationCodeSendFail]: '验证码发送失败',
  [ErrorCodeEnum.MaximumFiveVerificationCodesPerDay]: '一天最多发送5个验证码',
}
