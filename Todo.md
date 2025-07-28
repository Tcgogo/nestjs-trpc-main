## server
- 处理全局返回(需要和 client 同步输出格式，是否需要处理待验证)
- 处理 model 数据
- [trpc-panel](https://github.com/KROT47/trpc-panel/tree/main/packages/trpc-panel)

## adapter
- 采用 swc 编译（已完成）
- 支持 esmodule（已完成）
- 升级 trpc v11，nestjs v11（已完成）
- 支持 ZodType 默认导入、导入重命名、导入属性访问的扫描与读取（已完成）
- 支持 ts-morph tsConfigFilePath（已完成）
- 支持请求走 nestjs 全局生命周期（已完成）
  express / fastify 注册重构，走 nestjs controller 注册路由

- 采用 vite 做热重载
- 支持注释生成

## client
- 顶部菜单渲染

## main
- 依赖统一管理（已完成）
- 代码规范统一于约束
