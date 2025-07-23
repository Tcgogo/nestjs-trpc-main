import type { SourceMapping } from '../interfaces/scanner.interface'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { Injectable } from '@nestjs/common'

function fileUrlToPath(fileUrl: string | null) {
  if (!fileUrl) { return '' }

  // 判断是否为 windows 路径
  if (!process.platform.startsWith('win')) {
    return fileUrl.replace(/^file:\/\//i, '')
  }

  // 1. 移除 "file:///" 协议前缀
  let path = fileUrl.replace(/^file:\/\/\//i, '')

  // 2. 处理 Windows 路径中的盘符重复问题（如 E:/E:/）
  // 检测连续重复的盘符（例如 "E:/E:/"）
  const driveLetterRepeat = /^([a-z]:)\/(\1\/)/i
  if (driveLetterRepeat.test(path)) {
    path = path.replace(driveLetterRepeat, '$2')
  }

  return path
}

/**
 * For this specific file, using a static reference is desirable since `getCallerFilePath` uses a stack-trace to figure out the caller.
 * If this class is injected through dependency injection, that stack-trace will vary!
 */
@Injectable()
export class FileScanner {
  public getCallerFilePath(skip: number = 2): string {
    const originalPrepareStackTrace = Error.prepareStackTrace

    Error.prepareStackTrace = (_, stack) => stack
    const error = new Error()
    const stack = error.stack as unknown as NodeJS.CallSite[]

    Error.prepareStackTrace = originalPrepareStackTrace

    const caller = stack[skip]

    // const jsFilePath = caller?.getFileName();
    const jsFilePath = fileUrlToPath(caller?.getFileName()) // ESM support
    console.log('%c [caller?.getFileName()]-41', 'font-size:13px; background:#336699; color:#fff;', caller?.getFileName())
    console.log('%c [jsFilePath]-41', 'font-size:13px; background:#336699; color:#fff;', jsFilePath)

    if (jsFilePath == null) {
      throw new Error(`Could not find caller file: ${caller}`)
    }

    try {
      // Attempt to find the source map file and extract the original TypeScript path
      const sourceMap = this.getSourceMapFromJSPath(jsFilePath)
      return this.normalizePath(
        path.resolve(jsFilePath, '..', sourceMap.sources[0]),
      )
    }
    catch (error) {
      // Suppress the warning if in test environment
      if (process.env.NODE_ENV !== 'test') {
        console.warn(
          `Warning: Could not resolve source map for ${jsFilePath}. Falling back to default path resolution.`,
        )
      }
      return this.normalizePath(jsFilePath)
    }
  }

  private normalizePath(p: string): string {
    return path.resolve(p.replace(/\\/g, '/'))
  }

  private getPlatformPath(p: string): string {
    const exec = /^\/(\w*):(.*)/.exec(p)
    return process.platform.startsWith('win') && exec
      ? `${exec[1]}:\\${exec[2].replace(/\//g, '\\')}`
      : p
  }

  private getSourceMapFromJSPath(sourcePath: string): SourceMapping {
    const SOURCE_MAP_REGEX = /\/\/# sourceMappingURL=(.*\.map)$/m
    const filePath = this.getPlatformPath(sourcePath)

    let content: string
    try {
      content = fs.readFileSync(filePath, { encoding: 'utf8' })
    }
    catch (error) {
      throw new Error(`Could not read source file at path: ${filePath}`)
    }

    const exec = SOURCE_MAP_REGEX.exec(content)
    if (exec == null) {
      throw new Error(
        `Could not find source map comment in file at path ${sourcePath}. Make sure "sourceMap" is enabled in your tsconfig.`,
      )
    }

    const sourceMapPath = path.resolve(filePath, '..', exec[1])
    let sourceMapContent: string
    try {
      sourceMapContent = fs.readFileSync(sourceMapPath, { encoding: 'utf8' })
    }
    catch (error) {
      throw new Error(
        `Could not read source map file at path: ${sourceMapPath}`,
      )
    }

    try {
      return JSON.parse(sourceMapContent)
    }
    catch (error) {
      throw new Error(
        `Failed to parse source map content from: ${sourceMapPath}`,
      )
    }
  }
}
