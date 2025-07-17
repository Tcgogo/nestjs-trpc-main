import type { ModelConfigTypeAll } from './send-type'
import { readdirSync, readFileSync } from 'node:fs'
import { basename, resolve, dirname } from 'node:path'
import { pathToFileURL, fileURLToPath } from 'node:url'

function pathAdapter(url: string) {
  return pathToFileURL(url).href
}

export async function getModelConfig() {

const __filename = fileURLToPath(import.meta.url);
  console.log('%c [ __filename ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', __filename)
  const rootPath = __filename;

  const dirList = readdirSync(dirname(rootPath), {
    recursive: true,
    withFileTypes: true,
  })


  // 获取 model.ts 文件
  const modelList = dirList.filter(item => ['model.ts', 'model.js'].includes(item.name))
  console.log('%c [ modelList ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', modelList)

  // 获取 model.ts 文件中的配置
  const asyncModelConfig = await Promise.all(modelList.map(async (item) => {
    const res = await import(pathAdapter(resolve(rootPath, item.parentPath, item.name)))
    const parentFolderName = basename(item.parentPath);

    return [parentFolderName, res.default]
  }))
  // 构建模型配置
  const modelConfig = Object.fromEntries(asyncModelConfig)

  return modelConfig as ModelConfigTypeAll
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


  return asyncModelConfig;
}
