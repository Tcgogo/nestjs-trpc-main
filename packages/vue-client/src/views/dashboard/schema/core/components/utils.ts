import { isObject } from '@vueuse/core'
import i18n from '../i18n'
import { createAjvInstance, deepEquals } from '../utils/schema'

// 内部使用 . ，配置数据key不能出现.
export const pathSeparator = '.'

let formerCustomFormats: any = null
let formerMetaSchema: any = null
let ajv = createAjvInstance()

// 获取当前path值
export function getPathVal(obj: any, path: string, leftDeviation = 0): any {
  const pathArr = path.split(pathSeparator)

  for (let i = 0; i < pathArr.length - leftDeviation; i += 1) {
    // 错误路径或者undefined中断查找
    if (obj === undefined) { return undefined }
    obj = pathArr[i] === '' ? obj : obj[pathArr[i]]
  }
  return obj
}

// 设置当前path值
export function setPathVal(obj: any, path: string, value: any) {
  const pathArr = path.split(pathSeparator)
  for (let i = 0; i < pathArr.length; i += 1) {
    if (pathArr.length - i < 2) {
      // 倒数第一个数据
      obj[pathArr[pathArr.length - 1]] = value
      break
    }
    obj = obj[pathArr[i]]
  }
}

// 是否为根节点
export function isRootNodePath(path: string) {
  return path === ''
}

export function fallbackLabel(oriLabel: string, isFallback: boolean, curNodePath: string) {
  if (oriLabel) { return oriLabel }
  if (isFallback) {
    const backLabel = curNodePath.split('.').pop()

    // 过滤纯数字字符串
    if (backLabel && (backLabel !== `${Number(backLabel)}`)) { return backLabel }
  }

  return ''
}

// path 等于props
export function path2prop(path: string) {
  return path
}

// 解析用户配置的 errorSchema options
export function getUserErrOptions({
  schema = {},
  uiSchema = {},
  errorSchema = {},
}: any) {
  return Object.assign({}, ...[schema, uiSchema, errorSchema].map(itemSchema => Object.keys(itemSchema)
    .reduce((options, key) => {
      const value = itemSchema[key as keyof typeof itemSchema]
      // options 内外合并
      if (key === 'err:options' && isObject(value)) {
        return { ...options, ...value }
      }

      if (key.indexOf('err:') === 0) {
        return { ...options, [key.substring(4)]: value }
      }

      return options
    }, {})))
}

/**
 * 将错误输出从ajv转换为jsonschema使用的格式
 * At some point, components should be updated to support ajv.
 */
function transformAjvErrors(errors: any[] = []) {
  if (errors === null) {
    return []
  }

  return errors.map((e) => {
    const {
      dataPath,
      keyword,
      message,
      params,
      schemaPath,
    } = e
    const property = `${dataPath}`

    // put data in expected format
    return {
      name: keyword,
      property,
      message,
      params, // specific to ajv
      stack: `${property} ${message}`.trim(),
      schemaPath,
    }
  })
}

/**
 * 通过 schema校验formData并返回错误信息
 * @param formData 校验的数据
 * @param schema
 * @param transformErrors function - 转换错误, 如个性化的配置
 * @param additionalMetaSchemas 数组 添加 ajv metaSchema
 * @param customFormats 添加 ajv 自定义 formats
 * @returns {{errors: ([]|{stack: string, schemaPath: *, name: *, property: string, message: *, params: *}[])}}
 */
export function ajvValidateFormData({
  formData,
  schema,
  transformErrors,
  additionalMetaSchemas = [],
  customFormats = {},
}: any = {}) {
  const hasNewMetaSchemas = !deepEquals(formerMetaSchema, additionalMetaSchemas)
  const hasNewFormats = !deepEquals(formerCustomFormats, customFormats)

  // 变更了 Meta或者调整了format配置重置新的实例
  if (hasNewMetaSchemas || hasNewFormats) {
    ajv = createAjvInstance()
  }

  // 添加更多要验证的模式
  if (
    additionalMetaSchemas
    && hasNewMetaSchemas
    && Array.isArray(additionalMetaSchemas)
  ) {
    ajv.addMetaSchema(additionalMetaSchemas)
    formerMetaSchema = additionalMetaSchemas
  }

  // 注册自定义的 formats - 没有变更只会注册一次 - 否则重新创建实例
  if (customFormats && hasNewFormats && isObject(customFormats)) {
    Object.keys(customFormats).forEach((formatName) => {
      ajv.addFormat(formatName, customFormats[formatName as keyof typeof customFormats])
    })

    formerCustomFormats = customFormats
  }

  let validationError: any = null
  try {
    ajv.validate(schema, formData)
  }
  catch (err) {
    validationError = err
  }

  // ajv 默认多语言处理
  i18n.getCurrentLocalize()(ajv.errors)

  let errors: any[] = transformAjvErrors(ajv.errors || [])

  // 清除错误
  ajv.errors = null

  // 处理异常
  const noProperMetaSchema = validationError
    && validationError.message
    && typeof validationError.message === 'string'
    && validationError.message.includes('no schema with key or ref ')

  if (noProperMetaSchema) {
    errors = [
      ...errors,
      {
        stack: validationError.message,
      },
    ]
  }

  // 转换错误, 如传入自定义的错误
  if (typeof transformErrors === 'function') {
    errors = transformErrors(errors)
  }

  return {
    errors,
  }
}

// 校验formData 并转换错误信息
export function validateFormDataAndTransformMsg({
  formData,
  schema,
  uiSchema,
  transformErrors,
  additionalMetaSchemas = [],
  customFormats = {},
  errorSchema = {},
  required = false,
  propPath = '',
  isOnlyFirstError = true, // 只取第一条错误信息
}: any) {
  // 是否过滤根节点错误 固定只能根
  const filterRootNodeError = true

  // 校验required信息 isEmpty 校验
  // 如果数组类型针对配置了 format 的特殊处理
  const emptyArray = (schema.type === 'array' && Array.isArray(formData) && formData.length === 0)
  const isEmpty = formData === undefined || emptyArray

  if (required) {
    if (isEmpty) {
      const requireErrObj = {
        keyword: 'required',
        params: {
          missingProperty: propPath,
        },
        message: '',
      }

      // 用户设置校验信息
      const errSchemaMsg = getUserErrOptions({
        schema,
        uiSchema,
        errorSchema,
      }).required
      if (errSchemaMsg) {
        requireErrObj.message = errSchemaMsg
      }
      else {
        // 处理多语言require提示信息 （ajv 修改原引用）
        i18n.getCurrentLocalize()([requireErrObj])
      }
      return [requireErrObj]
    }
  }
  else if (isEmpty && !emptyArray) {
    // 非required 为空 校验通过
    return []
  }

  // 校验ajv错误信息
  let ajvErrors = ajvValidateFormData({
    formData,
    schema,
    transformErrors,
    additionalMetaSchemas,
    customFormats,
  }).errors

  // 过滤顶级错误
  if (filterRootNodeError) {
    ajvErrors = ajvErrors.filter(
      item => (item.property === ''
        && (!item.schemaPath.includes('#/anyOf/') && !item.schemaPath.includes('#/oneOf/')))
      || item.name === 'additionalProperties',
    )
  }

  const userErrOptions = getUserErrOptions({
    schema,
    uiSchema,
    errorSchema,
  })

  return (isOnlyFirstError && ajvErrors.length > 0 ? [ajvErrors[0]] : ajvErrors).reduce((preErrors, errorItem) => {
    // 优先获取 errorSchema 配置
    errorItem.message = userErrOptions[errorItem.name] !== undefined ? userErrOptions[errorItem.name] : errorItem.message
    preErrors.push(errorItem)
    return preErrors
  }, [])
}
