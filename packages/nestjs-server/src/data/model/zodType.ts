import { readFileSync, writeFileSync } from 'node:fs'
import tz from 'ts-to-zod'
import { getModelConfigStr } from '.'

async function generateZod() {
  const modelConfig = await getModelConfigStr()

  modelConfig.forEach(([path, value]) => {
    const sourceText = value.replace('const', 'type').replace(/,/g, '')
    const zodSchema = tz.generate({
      sourceText,
    })
    const zodSchemasFile = zodSchema.getZodSchemasFile('').replace('const', 'export const')
    writeFileSync(path, zodSchemasFile, 'utf-8')
  })

  // return zodSchema
}

async function generateZod2() {
  const path = './type.ts'
  const targetPath = './zod-model.ts'
  const sourceText = readFileSync(path, 'utf-8')
  const zodSchema = tz.generate({
    sourceText,
  })

  const zodSchemasFile = zodSchema.getZodSchemasFile('')
  writeFileSync(targetPath, zodSchemasFile, 'utf-8')
}

generateZod2()
