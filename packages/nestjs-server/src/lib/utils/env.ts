import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { merge } from 'lodash-es'
import { parse } from 'yaml'
// 获取项目运行环境
export function getEnv() {
  return process.env.NODE_ENV
}

export const isDev = getEnv() === 'development'
export const isTest = getEnv() === 'test'
export const isPro = getEnv() === 'production'

type ConfigType
  = | 'FEISHU_CONFIG'
    | 'KEY'
    | 'DB_CONFIG'
    | 'REDIS_CONFIG'
    | 'DD'
    | 'NEST'
    | 'ATM'

interface EnvConfig {
  ATM: { mcuid: string }
  DD: {
    DD_AppKey: string
    DD_AppSecret: string
  }

  DB_CONFIG: {
    type: 'mysql' | 'mariadb'
    host: string
    port: number
    username: string
    password: string
    database: string
    retryDelay: number
    retryAttempts: number
    synchronize: boolean
    autoLoadEntities: boolean
  }

  REDIS_CONFIG: {
    host: string
    password: string
    port: number
    db: number
  }

  NEST: {
    port: number
  }

  JWT: {
    secret: string
    access_token_expires_time: string
    refresh_token_expires_time: string
  }

  USER_MICROSERVICES: { host: string, port: number }

  LOG: {
    enable: boolean
    level: string
  }
}

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

// docker部署路径
// const basePath = path.resolve(dirname, "../../../../app");
const basePath = path.resolve(dirname, '../../../')

function commonConfig(): EnvConfig {
  const p = path.resolve(basePath, `./.config/.common.yaml`)
  const file = fs.readFileSync(p, 'utf8')
  const config = parse(file)
  return config
}

let envConfig: any = {}

// 读取项目配置
export function getConfig(type?: ConfigType): EnvConfig {
  if (!Object.keys(envConfig).length) {
    const environment = getEnv() || 'dev'
    const p = path.resolve(basePath, `./.config/.${environment}.yaml`)
    const file = fs.readFileSync(p, 'utf8')
    const config = parse(file)

    const common = commonConfig()
    envConfig = merge(common, config)
  }

  if (type) {
    return envConfig[type]
  }

  return envConfig
}
