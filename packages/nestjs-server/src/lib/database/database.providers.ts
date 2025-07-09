import * as fs from 'fs';
import * as path from 'path';
import { DataSource, getMetadataArgsStorage } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions.js';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { ConstantEnum } from '../enums';
import { getConfig } from '../utils';
import { fileURLToPath } from 'url';

type DBConfigOptions = Partial<MysqlConnectionOptions>;

const GetDBConfig = (options?: DBConfigOptions) => {
  const { DB_CONFIG } = getConfig();
  const entities = options?.entities || [
    path.resolve(basePath, '**/entities/*.entity{.js,.ts}'),
    path.resolve(basePath, '**/entities/**/*.entity{.js,.ts}') // 添加对子文件夹的支持
  ];

  return {
    type: DB_CONFIG.type, // 数据库链接类型
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database, // 后面改成 scid
    synchronize: DB_CONFIG.synchronize, // 是否开启同步数据表功能
    namingStrategy: new SnakeNamingStrategy(),
    entities: entities as any,
    logging: true,
    charset: 'utf8mb4',
    autoLoadEntities: true, // 添加自动加载实体
    // timezone: '+08:00',
    migrations: options?.migrations || [],
    subscribers: [],
    // // @ts-expect-error 类型错误
    // keepConnectionAlive: true,
    // retryDelay: DB_CONFIG.retryDelay,
    // retryAttempts: DB_CONFIG.retryAttempts,
  };
}

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const basePath = path.resolve(dirname, '../../');

export const DB_CONFIG_OPTIONS = GetDBConfig({
  migrations: ['migrations/*.ts'],
  entities: [
    path.resolve(basePath, '**/entities/*.entity{.js,.ts}'),
    path.resolve(basePath, '**/entities/**/*.entity{.js,.ts}')
  ],
})

export const DB_DATA_SOURCE = (options?: DBConfigOptions) => {
  const config = GetDBConfig(options)
  return new DataSource(config);
};



// 数据库注入
export const DatabaseProviders = [
  {
    provide: ConstantEnum.DB_DATA_SOURCE,
    useFactory: () => {
      return DB_DATA_SOURCE().initialize();
    },
  },
];

// 获取目录文件夹列表
export default DB_DATA_SOURCE({
  migrations: ['migrations/*.ts'],
  entities: [
    path.resolve(basePath, '**/entities/*.entity{.js,.ts}')],
});
