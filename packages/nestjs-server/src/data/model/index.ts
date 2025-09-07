import type { Model } from '@tcgogo/types'
import { readdirSync, readFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

function pathAdapter(url: string) {
  return pathToFileURL(url).href
}

export async function getModelConfig() {
  const __filename = fileURLToPath(import.meta.url)

  const rootPath = __filename

  const dirList = readdirSync(dirname(rootPath), {
    recursive: true,
    withFileTypes: true,
  })

  // 获取 model.ts 文件
  const modelList = dirList.filter(item => ['model.ts', 'model.js'].includes(item.name))

  // 获取 model.ts 文件中的配置
  const asyncModelConfig = await Promise.all(modelList.map(async (item) => {
    // item.path 兼容 node 20 以下版本
    // Alias for dirent.parentPath.
    // @since — v20.1.0
    const res = await import(pathAdapter(resolve(rootPath, item.parentPath || item.path, item.name)))
    const parentFolderName = basename(item.parentPath || item.path)

    return [parentFolderName, res.default]
  }))
  // 构建模型配置
  const modelConfig = Object.fromEntries(asyncModelConfig)

  return modelConfig as Record<string, Model.Info>
}

export async function getModelConfigStr() {
  const rootPath = '.'

  const dirList = readdirSync(rootPath, {
    recursive: true,
    withFileTypes: true,
  })

  // 获取 model.ts 文件
  const modelList = dirList.filter(item => item.name === 'model.ts')

  // 获取 model.ts 文件中的配置
  const asyncModelConfig = await Promise.all(modelList.map(async (item) => {
    const res = await readFileSync(resolve(rootPath, item.parentPath, item.name), 'utf-8')
    return [`./${item.parentPath}/zod-${item.name}`, res]
  }))

  return asyncModelConfig
}
