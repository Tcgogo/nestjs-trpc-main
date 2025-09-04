import type { AppRouter } from '@/src/@generated/server'

// 提供类型提示
export function getApiName(api: keyof AppRouter) {
  return api
}
