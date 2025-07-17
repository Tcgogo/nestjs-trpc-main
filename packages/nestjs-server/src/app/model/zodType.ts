import tz from 'ts-to-zod'
import { getModelConfigStr } from '.'
import { writeFileSync } from 'node:fs'

async function generateZod() {
  const modelConfig = await getModelConfigStr()


  modelConfig.forEach(([path, value]) => {
    const sourceText = value.replace('const', 'type').replace(/,/g, '')
    const zodSchema = tz.generate({
      sourceText: sourceText,
    })
    const zodSchemasFile = zodSchema.getZodSchemasFile('').replace('const', 'export const')
    writeFileSync(path, zodSchemasFile, 'utf-8')
  })


  // return zodSchema
}

generateZod()
