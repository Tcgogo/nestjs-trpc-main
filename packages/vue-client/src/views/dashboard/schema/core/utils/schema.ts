import type { JSONSchema } from '../types'
import { isObject } from '@vueuse/core'
import Ajv from 'ajv'

// 切割分为多个数组
export function cutOff(target: any[], cutOffPointIndex: number) {
  return target.reduce((preVal, curVal, curIndex) => {
    preVal[curIndex > cutOffPointIndex ? 1 : 0].push(curVal)
    return preVal
  }, [[], []])
}

// array additionalItems
// https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation
export function allowAdditionalItems(schema: JSONSchema) {
  // if (schema.additionalItems === true) {
  //   console.warn('additionalItems=true is currently not supported')
  // }
  return isObject(schema.additionalItems)
}

export function replaceArrayIndex({ schema, uiSchema }: any, index: number) {
  const itemUiOptions = getUiOptions({
    schema,
    uiSchema,
    containsSpec: false,
  })

  return ['title', 'description'].reduce((preVal, curItem) => {
    if (itemUiOptions[curItem]) {
      preVal[`ui:${curItem}`] = String(itemUiOptions[curItem]).replace(/\$index/g, `${index + 1}`)
    }
    return preVal
  }, {} as any)
}

// 计算当前节点path
export function computedCurPath(prePath: string, curKey: string) {
  return prePath === '' ? curKey : [prePath, curKey].join('.')
}

export function toConstant(schema: JSONSchema) {
  if (Array.isArray(schema.enum) && schema.enum.length === 1) {
    return schema.enum[0]
  } if (Object.prototype.hasOwnProperty.call(schema, 'const')) {
    return schema.const
  }
  throw new Error('schema cannot be inferred as a constant')
}

// 字符串首字母小写
export function lowerCase(str: string) {
  if (undefined === str) { return str }
  return String(str).replace(/^./, s => s.toLocaleLowerCase())
}

// nodePath 转css类名
export function nodePath2ClassName(path: string) {
  const rootPathName = '__pathRoot'
  return path ? `${rootPathName}.${path}`.replace(/\./g, '_') : rootPathName
}

// 判断是否为Arguments对象
function isArguments(object: any) {
  return Object.prototype.toString.call(object) === '[object Arguments]'
}

// 深度相等对比
export function deepEquals(a: any, b: any, ca: any[] = [], cb: any[] = []) {
  // Partially extracted from node-deeper and adapted to exclude comparison
  // checks for functions.
  // https://github.com/othiym23/node-deeper
  if (a === b) {
    return true
  } if (typeof a === 'function' || typeof b === 'function') {
    // Assume all functions are equivalent
    // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
    return true
  } if (typeof a !== 'object' || typeof b !== 'object') {
    return false
  } if (a === null || b === null) {
    return false
  } if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime()
  } if (a instanceof RegExp && b instanceof RegExp) {
    return (
      a.source === b.source
      && a.global === b.global
      && a.multiline === b.multiline
      && a.lastIndex === b.lastIndex
      && a.ignoreCase === b.ignoreCase
    )
  } if (isArguments(a) || isArguments(b)) {
    if (!(isArguments(a) && isArguments(b))) {
      return false
    }
    const slice = Array.prototype.slice
    return deepEquals(slice.call(a), slice.call(b), ca, cb)
  }
  if (a.constructor !== b.constructor) {
    return false
  }

  const ka = Object.keys(a)
  const kb = Object.keys(b)
  // don't bother with stack acrobatics if there's nothing there
  if (ka.length === 0 && kb.length === 0) {
    return true
  }
  if (ka.length !== kb.length) {
    return false
  }

  let cal = ca.length

  while (cal--) {
    if (ca[cal] === a) {
      return cb[cal] === b
    }
  }
  ca.push(a)
  cb.push(b)

  ka.sort()
  kb.sort()

  for (let j = ka.length - 1; j >= 0; j--) {
    if (ka[j] !== kb[j]) {
      return false
    }
  }

  let key

  for (let k = ka.length - 1; k >= 0; k--) {
    key = ka[k]
    if (!deepEquals(a[key], b[key], ca, cb)) {
      return false
    }
  }

  ca.pop()
  cb.pop()

  return true
}

/**
 * When merging defaults and form data, we want to merge in this specific way:
 * - objects are deeply merged
 * - arrays are merged in such a way that:
 *   - when the array is set in form data, only array entries set in form data
 *     are deeply merged; additional entries from the defaults are ignored
 *   - when the array is not set in form data, the default is copied over
 * - scalars are overwritten/set by form data
 */
function mergeDefaultsWithFormData(defaults: any, formData: any): any {
  if (Array.isArray(formData)) {
    if (!Array.isArray(defaults)) {
      console.warn('无效的formData，已覆盖数据', formData)
      return defaults
    }
    return formData.map((value, idx) => {
      if (defaults[idx]) {
        return mergeDefaultsWithFormData(defaults[idx], value)
      }
      return value
    })
  } if (isObject(formData)) {
    const acc = Object.assign({}, defaults) // Prevent mutation of source object.
    return Object.keys(formData).reduce((preAcc, key) => {
      preAcc[key] = mergeDefaultsWithFormData(
        defaults ? defaults[key] : {},
        formData[key as keyof typeof formData],
      )
      return preAcc
    }, acc)
  }
  return formData
}

// 数组填充对象
export function fillObj(target: any, data: any) {
  // 简单复制 异常直接抛错
  try {
    if (typeof data === 'object') {
      return target.fill(null).map(() => JSON.parse(JSON.stringify(data)))
    }
  }
  catch (e) {
    // nothing ...
  }

  // 默认返回一个 undefined
  return undefined
}

/**
 * 单个匹配
 * 常量，或者只有一个枚举
 */
export function isConstant(schema: JSONSchema) {
  return (
    (Array.isArray(schema.enum) && schema.enum.length === 1)
    || Object.prototype.hasOwnProperty.call(schema, 'const')
  )
}

/**
 * 是否为选择列表
 * 枚举 或者 oneOf anyOf 每项都只有一个固定常量值
 * @param _schema
 * @param rootSchema
 * @returns {boolean|*}
 */
export function isSelect(_schema: JSONSchema, rootSchema: JSONSchema = {}) {
  const schema = retrieveSchema(_schema, rootSchema)
  const altSchemas = schema.oneOf || schema.anyOf
  if (Array.isArray(schema.enum)) {
    return true
  } if (Array.isArray(altSchemas)) {
    return altSchemas.every(altSchemasItem => isConstant(altSchemasItem))
  }
  return false
}

// 是否为多选
export function isMultiSelect(schema: JSONSchema, rootSchema: JSONSchema = {}) {
  if (!schema.uniqueItems || !schema.items) {
    return false
  }
  return isSelect(schema.items as JSONSchema, rootSchema)
}

// 定义的数据推导出schema 类型
export function guessType(value: any) {
  if (Array.isArray(value)) {
    return 'array'
  } if (typeof value === 'string') {
    return 'string'
  } if (value == null) {
    return 'null'
  } if (typeof value === 'boolean') {
    return 'boolean'
  } if (!Number.isNaN(value)) {
    return 'number'
  } if (typeof value === 'object') {
    return 'object'
  }
  // Default to string if we can't figure it out
  return 'string'
};

// 获取给定 schema 类型。
export function getSchemaType(schema: JSONSchema) {
  const { type } = schema

  // 通过const 申明的常量 做类型推断
  if (!type && schema.const) {
    return guessType(schema.const)
  }

  // 枚举默认字符串
  if (!type && schema.enum) {
    return 'string'
  }

  // items 推断为 array 类型
  if (!type && (schema.items)) {
    return 'array'
  }

  // anyOf oneOf 不申明 type 字段
  if (!type && (schema.properties || schema.additionalProperties)) {
    return 'object'
  }

  if (Array.isArray(type) && type.length === 2 && type.includes('null')) {
    return type.find(curType => curType !== 'null')
  }

  return type
}

export function createAjvInstance() {
  const ajvInstance = new Ajv({
    allErrors: true,
    multipleOfPrecision: 8,
  })

  // 添加base-64 format
  ajvInstance.addFormat(
    'data-url',
    /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/,
  )

  // 添加color format
  ajvInstance.addFormat(
    'color',

    // eslint-disable-next-line regexp/no-misleading-capturing-group, regexp/no-useless-assertions
    /^(#?([0-9A-Fa-f]{3,4}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgba?|hsla?)\(.*\))$/,
  )
  return ajvInstance
}

const ajv = createAjvInstance()

/**
 * 根据模式验证数据，如果数据有效则返回true，否则返回* false。如果模式无效，那么这个函数将返回* false。
 * @param schema
 * @param data
 * @returns {boolean|PromiseLike<any>}
 */
export function isValid(schema: JSONSchema, data: any) {
  try {
    return ajv.validate(schema, data)
  }
  catch (e) {
    return false
  }
}

// 数组交集
export function intersection(arr1: any[], arr2: any[]) {
  return arr1.filter(item => arr2.includes(item))
}

// 最大公约数
export function gcd(a: number, b: number) {
  if (b === 0) { return a }
  return gcd(b, a % b)
}

// 最小公倍数
export function scm(a: number, b: number) {
  return (a * b) / gcd(a, b)
}

// $ref 引用
function getPathVal(obj: JSONSchema, pathStr: string) {
  const pathArr = pathStr.split('/')
  for (let i = 0; i < pathArr.length; i += 1) {
    if (obj === undefined) { return undefined }
    obj = pathArr[i] === '' ? obj : obj[pathArr[i] as keyof typeof obj]
  }
  return obj
}

// 合并对象数据
export function mergeObjects(obj1: any, obj2: any, concatArrays = false) {
  // Recursively merge deeply nested objects.
  const preAcc = Object.assign({}, obj1) // Prevent mutation of source object.
  if (!isObject(obj2)) { return preAcc }

  return Object.keys(obj2).reduce((acc, key) => {
    const left = obj1 ? obj1[key] : {}
    const right = obj2[key as keyof typeof obj2]
    if (obj1 && Object.prototype.hasOwnProperty.call(obj1, key) && isObject(right)) {
      acc[key] = mergeObjects(left, right, concatArrays)
    }
    else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right)
    }
    else {
      acc[key] = right
    }
    return acc
  }, preAcc)
}

// items 都为一个对象
export function isFixedItems(schema: JSONSchema): schema is JSONSchema & { items: JSONSchema[] } {
  return (
    Array.isArray(schema.items)
    && schema.items.length > 0
    && schema.items.every(item => isObject(item))
  )
}

// 如果查找不到
// return -1
export function getMatchingIndex(formData: any, options: any, rootSchema: JSONSchema = {}, haveAllFields = false) {
  for (let i = 0; i < options.length; i++) {
    const option = retrieveSchema(options[i], rootSchema, formData)

    // If the schema describes an object then we need to add slightly more
    // strict matching to the schema, because unless the schema uses the
    // "requires" keyword, an object will match the schema as long as it
    // doesn't have matching keys with a conflicting type. To do this we use an
    // "anyOf" with an array of requires. This augmentation expresses that the
    // schema should match if any of the keys in the schema are present on the
    // object and pass validation.
    if (option.properties) {
      // Create an "anyOf" schema that requires at least one of the keys in the
      // "properties" object
      const requiresAnyOf = {
        // 如果后代节点存在 $ref 需要正常引用
        ...(rootSchema.definitions
          ? {
              definitions: rootSchema.definitions,
            }
          : {}),
        anyOf: Object.keys(option.properties).map(key => ({
          required: [key],
        })),
      }

      let augmentedSchema

      // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"
      if (option.anyOf) {
        // Create a shallow clone of the option
        const { ...shallowClone } = option

        if (!shallowClone.allOf) {
          shallowClone.allOf = []
        }
        else {
          // If "allOf" already exists, shallow clone the array
          shallowClone.allOf = shallowClone.allOf.slice()
        }

        shallowClone.allOf.push(requiresAnyOf)

        augmentedSchema = shallowClone
      }
      else {
        augmentedSchema = Object.assign({}, option, requiresAnyOf)
      }

      // Remove the "required" field as it's likely that not all fields have
      // been filled in yet, which will mean that the schema is not valid

      // 如果编辑回填数据的场景 可直接使用 required 判断
      if (!haveAllFields) { delete augmentedSchema.required }

      if (isValid(augmentedSchema, formData)) {
        return i
      }
    }
    else if (isValid(option, formData)) {
      return i
    }
  }

  // 尝试查找const 配置
  if (options[0] && options[0].properties) {
    const constProperty = Object.keys(options[0].properties).find(k => options[0].properties[k].const)
    if (constProperty) {
      for (let i = 0; i < options.length; i++) {
        if (
          options[i].properties
          && options[i].properties[constProperty]
          && options[i].properties[constProperty].const === formData[constProperty]) {
          return i
        }
      }
    }
  }
  return -1
}

// oneOf anyOf 通过formData的值来找到当前匹配项索引
export function getMatchingOption(formData: any, options: any, rootSchema: JSONSchema = {}, haveAllFields = false) {
  const index = getMatchingIndex(formData, options, rootSchema, haveAllFields)
  return index === -1 ? 0 : index
}

// 找到ref引用的schema
export function findSchemaDefinition($ref = '', rootSchema: JSONSchema = {}) {
  const origRef = $ref
  if ($ref.startsWith('#')) {
    // Decode URI fragment representation.
    $ref = decodeURIComponent($ref.substring(1))
  }
  else {
    throw new Error(`Could not find a definition for ${origRef}.`)
  }
  const current = getPathVal(rootSchema, $ref)

  if (current === undefined) {
    throw new Error(`Could not find a definition for ${origRef}.`)
  }
  if (Object.prototype.hasOwnProperty.call(current, '$ref')) {
    return findSchemaDefinition(current.$ref, rootSchema)
  }
  return current
}

function resolveReference(schema: JSONSchema, rootSchema: JSONSchema = {}, formData: any = {}) {
  const $refSchema = findSchemaDefinition(schema.$ref, rootSchema)
  const { $ref, ...localSchema } = schema

  return retrieveSchema(
    { ...$refSchema, ...localSchema },
    rootSchema,
    formData,
  )
}

// 深度递归合并 合并allOf的每2项
function mergeSchemaAllOf(...args: any[]) {
  if (args.length < 2) { return args[0] }

  let preVal = {}
  const copyArgs = [...args]
  while (copyArgs.length >= 2) {
    const obj1: any = isObject(copyArgs[0]) ? copyArgs[0] : {}
    const obj2: any = isObject(copyArgs[1]) ? copyArgs[1] : {}

    preVal = Object.assign({}, obj1)
    Object.keys(obj2).reduce((acc, key) => {
      const left = obj1[key]
      const right = obj2[key]

      // 左右一边为object
      if (isObject(left) || isObject(right)) {
        // 两边同时为object
        if (isObject(left) && isObject(right)) {
          acc[key] = mergeSchemaAllOf(left, right)
        }
        else {
          // 其中一边为 object
          const [objTypeData, baseTypeData] = isObject(left) ? [left, right] : [right, left]

          if (key === 'additionalProperties') {
            // 适配类型： 一边配置了对象一边没配置或者true false
            // {
            //     additionalProperties: {
            //         type: 'string',
            //     },
            //     additionalProperties: false
            // }
            acc[key] = baseTypeData === true ? objTypeData : false // default false
          }
          else {
            acc[key] = objTypeData
          }
        }
        // 一边为array
      }
      else if (Array.isArray(left) || Array.isArray(right)) {
        // 同为数组取交集
        if (Array.isArray(left) && Array.isArray(right)) {
          // 数组里面嵌套对象不支持 因为我不知道该怎么合并
          if (isObject(left[0]) || isObject(right[0])) {
            throw new Error('暂不支持如上数组对象元素合并')
          }

          // 交集
          const intersectionArray = intersection([...left], [...right])

          // 没有交集
          if (intersectionArray.length <= 0) {
            throw new Error('无法合并如上数据')
          }

          if (intersectionArray.length === 0 && key === 'type') {
            // 自己取出值
            acc[key] = intersectionArray[0]
          }
          else {
            acc[key] = intersectionArray
          }
        }
        else {
          // 其中一边为 Array
          // 查找包含关系
          const [arrayTypeData, baseTypeData] = Array.isArray(left) ? [left, right] : [right, left]
          // 空值直接合并另一边
          if (baseTypeData === undefined) {
            acc[key] = arrayTypeData
          }
          else {
            if (!arrayTypeData.includes(baseTypeData)) {
              throw new Error('无法合并如下数据')
            }
            acc[key] = baseTypeData
          }
        }
      }
      else if (left !== undefined && right !== undefined) {
        // 两边都不是 undefined - 基础数据类型 string number boolean...
        if (key === 'maxLength' || key === 'maximum' || key === 'maxItems' || key === 'exclusiveMaximum' || key === 'maxProperties') {
          acc[key] = Math.min(left, right)
        }
        else if (key === 'minLength' || key === 'minimum' || key === 'minItems' || key === 'exclusiveMinimum' || key === 'minProperties') {
          acc[key] = Math.max(left, right)
        }
        else if (key === 'multipleOf') {
          // 获取最小公倍数
          acc[key] = scm(left, right)
        }
        else {
          // if (left !== right) {
          //     throw new Error('无法合并如下数据');
          // }
          acc[key] = left
        }
      }
      else {
        // 一边为undefined
        acc[key] = left === undefined ? right : left
      }
      return acc
    }, preVal as any)

    // 先进先出
    copyArgs.splice(0, 2, preVal)
  }

  return preVal
}

// resolve Schema - allOf
export function resolveAllOf(schema: JSONSchema, rootSchema: JSONSchema = {}, formData: any = {}) {
  // allOf item中可能存在 $ref
  const resolvedAllOfRefSchema = {
    ...schema,
    allOf: schema.allOf?.map(allOfItem => retrieveSchema(allOfItem, rootSchema, formData)),
  }

  try {
    const { allOf = [], ...originProperties } = resolvedAllOfRefSchema
    return mergeSchemaAllOf(originProperties, ...allOf)
  }
  catch (e) {
    console.error(`无法合并allOf，丢弃allOf配置继续渲染: \n${e}`)

    const { allOf: errAllOf, ...resolvedSchemaWithoutAllOf } = resolvedAllOfRefSchema
    return resolvedSchemaWithoutAllOf
  }
}

// resolve Schema
function resolveSchema(schema: JSONSchema, rootSchema: JSONSchema = {}, formData: any = {}) {
  // allOf 、$ref、dependencies 可能被同时配置

  // allOf
  if (Object.prototype.hasOwnProperty.call(schema, 'allOf')) {
    schema = resolveAllOf(schema, rootSchema, formData)
  }

  // $ref
  if (Object.prototype.hasOwnProperty.call(schema, '$ref')) {
    schema = resolveReference(schema, rootSchema, formData)
  }

  return schema
}

// 索引当前节点
export function retrieveSchema(schema: JSONSchema, rootSchema: JSONSchema = {}, formData: any = {}) {
  if (!isObject(schema)) {
    return {}
  }

  return resolveSchema(schema, rootSchema, formData)
}

function computeDefaults(
  _schema: JSONSchema,
  parentDefaults: any,
  rootSchema: JSONSchema = {},
  rawFormData: any = {},
  includeUndefinedValues = false,
  haveAllFields = false,
) {
  let schema = isObject(_schema) ? _schema : {}
  const formData = isObject(rawFormData) ? rawFormData : {}

  // allOf 处理合并数据
  if ('allOf' in schema) {
    schema = resolveAllOf(schema, rootSchema, formData)
  }

  // Compute the defaults recursively: give highest priority to deepest nodes.
  let defaults = parentDefaults
  if (isObject(defaults) && isObject(schema.default)) {
    // For object defaults, only override parent defaults that are defined in
    // schema.default.
    defaults = mergeObjects(defaults, schema.default)
  }
  else if ('default' in schema) {
    // Use schema defaults for this node.
    defaults = schema.default
  }
  else if ('$ref' in schema) {
    // Use referenced schema defaults for this node.
    const refSchema = findSchemaDefinition(schema.$ref, rootSchema)
    return computeDefaults(
      refSchema,
      defaults,
      rootSchema,
      formData,
      includeUndefinedValues,
      haveAllFields,
    )
  }
  else if /* ('dependencies' in schema) {
      const resolvedSchema = resolveDependencies(schema, rootSchema, formData);
      return computeDefaults(
          resolvedSchema,
          defaults,
          rootSchema,
          formData,
          includeUndefinedValues,
          haveAllFields
      );
  } else if */ (isFixedItems(schema)) {
    defaults = schema.items?.map((itemSchema: JSONSchema, idx: number) => computeDefaults(
      itemSchema,
      Array.isArray(parentDefaults) ? parentDefaults[idx] : undefined,
      rootSchema,
      formData,
      includeUndefinedValues,
      haveAllFields,
    ))
  }
  else if ('oneOf' in schema) {
    const matchSchema = retrieveSchema(
      schema.oneOf![getMatchingOption(formData, schema.oneOf, rootSchema, haveAllFields)],
      rootSchema,
      formData,
    )

    schema = mergeObjects(schema, matchSchema)
    delete schema.oneOf

    // if (schema.properties && matchSchema.properties) {
    //     // 对象 oneOf 需要合并原属性和 oneOf 属性
    //     const mergeSchema = mergeObjects(schema, matchSchema);
    //     delete mergeSchema.oneOf;
    //     schema = mergeSchema;
    // } else {
    //     schema = matchSchema;
    // }
  }
  else if ('anyOf' in schema) {
    const matchSchema = retrieveSchema(
      schema.anyOf![getMatchingOption(formData, schema.anyOf, rootSchema, haveAllFields)],
      rootSchema,
      formData,
    )

    schema = mergeObjects(schema, matchSchema)
    delete schema.anyOf

    // if (schema.properties && matchSchema.properties) {
    //     // 对象 anyOf 需要合并原属性和 anyOf 属性
    //     const mergeSchema = mergeObjects(schema, matchSchema);
    //     delete mergeSchema.anyOf;
    //     schema = mergeSchema;
    // } else {
    //     schema = matchSchema;
    // }
  }
  // Not defaults defined for this node, fallback to generic typed ones.
  if (typeof defaults === 'undefined') {
    defaults = schema.default
  }

  switch (getSchemaType(schema)) {
    case 'null':
      return null

      // We need to recur for object schema inner default values.
    case 'object':
      return Object.keys(schema.properties || {}).reduce((acc, key) => {
        // Compute the defaults for this node, with the parent defaults we might
        // have from a previous run: defaults[key].
        const computedDefault = computeDefaults(
          schema.properties![key],
          (defaults || {})[key as keyof typeof defaults],
          rootSchema,
          (formData || {})[key as keyof typeof formData],
          includeUndefinedValues,
          haveAllFields,
        )
        if (includeUndefinedValues || computedDefault !== undefined) {
          acc[key] = computedDefault
        }
        return acc
      }, {} as any)

    case 'array':
      // Inject defaults into existing array defaults
      if (Array.isArray(defaults)) {
        defaults = defaults.map((item: any, idx: number) => computeDefaults(
          (Array.isArray(schema.items) && schema.items[idx]) || schema.additionalItems || {},
          item,
          rootSchema,
          {},
          includeUndefinedValues,
          haveAllFields,
        ))
      }

      // Deeply inject defaults into already existing form data
      if (Array.isArray(rawFormData)) {
        defaults = rawFormData.map((item, idx) => computeDefaults(
          schema.items || (defaults || {})[idx],
          rootSchema,
          item,
          {},
          includeUndefinedValues,
          haveAllFields,
        ))
      }
      if (schema.minItems) {
        if (!isMultiSelect(schema, rootSchema)) {
          const defaultsLength = defaults ? defaults.length : 0
          if (schema.minItems > defaultsLength) {
            const defaultEntries = defaults || []
            // populate the array with the defaults
            const fillerSchema = Array.isArray(schema.items)
              ? schema.additionalItems
              : schema.items

            const fillerEntries = fillObj(
              Array.from({ length: schema.minItems - defaultsLength }),
              computeDefaults(
                fillerSchema!,
                fillerSchema!.defaults!,
                rootSchema,
                {},
                includeUndefinedValues,
                haveAllFields,
              ),
            )
            return defaultEntries.concat(fillerEntries)
          }
        }
        else {
          return defaults || []
        }
      }

      // undefined 默认一个空数组
      defaults = defaults === undefined ? [] : defaults
  }
  return defaults
}

// 获取默认form data
export function getDefaultFormState(
  _schema: JSONSchema,
  formData: any,
  rootSchema: JSONSchema = {},
  includeUndefinedValues = true,
  haveAllFields = false,
) {
  if (!isObject(_schema)) {
    throw new Error(`Invalid schema: ${_schema}`)
  }
  const schema = retrieveSchema(_schema, rootSchema, formData)

  const defaults = computeDefaults(
    schema,
    _schema.default,
    rootSchema,
    formData,
    includeUndefinedValues,
    haveAllFields,
  )

  if (typeof formData === 'undefined') {
    // No form data? Use schema defaults.
    return defaults
  }

  // 传入formData时，合并传入数据
  if (isObject(formData) || Array.isArray(formData)) {
    return mergeDefaultsWithFormData(defaults, formData)
  }
  if (formData === 0 || formData === false || formData === '') {
    return formData
  }
  return formData || defaults
}

// 获取当前path值
export function getPathVal2(obj: any, path: string, leftDeviation = 0) {
  const pathArr = path.split('.')

  for (let i = 0; i < pathArr.length - leftDeviation; i += 1) {
    // 错误路径或者undefined中断查找
    if (obj === undefined) { return undefined }
    obj = pathArr[i] === '' ? obj : obj[pathArr[i]]
  }
  return obj
}

// 通用的处理表达式方法
// 这里打破 JSON Schema 规范
const regExpression = /\{\{(.*)\}\}/
function handleExpression(rootFormData: any, curNodePath: string, expression: string, fallBack: () => any) {
  // 未配置
  if (undefined === expression) {
    return undefined
  }

  // 配置了 mustache 表达式
  const matchExpression = regExpression.exec(expression)
  regExpression.lastIndex = 0 // 重置索引
  if (matchExpression) {
    const code = matchExpression[1].trim()

    const fn = new Function('parentFormData', 'rootFormData', `return ${code}`)

    return fn(getPathVal2(rootFormData, curNodePath, 1), rootFormData)
  }

  // 回退
  return fallBack()
}

// 是否为 hidden Widget
export function isHiddenWidget({
  schema = {},
  uiSchema = {},
  curNodePath = '',
  rootFormData = {},
}: any) {
  const widget = uiSchema['ui:widget'] || schema['ui:widget']
  const hiddenExpression = uiSchema['ui:hidden'] || schema['ui:hidden']

  // 支持配置 ui:hidden 表达式
  return widget === 'HiddenWidget'
    || widget === 'hidden'
    || !!handleExpression(rootFormData, curNodePath, hiddenExpression, () => {
      // 配置了函数 function
      if (typeof hiddenExpression === 'function') {
        return hiddenExpression(getPathVal2(rootFormData, curNodePath, 1), rootFormData)
      }

      // 配置了常量 ？？
      return hiddenExpression
    })
}

// 解析当前节点 ui field
export function getUiField(FIELDS_MAP: any, {
  schema = {},
  uiSchema = {},
}: any) {
  const field = schema['ui:field'] || uiSchema['ui:field']

  // vue 组件，或者已注册的组件名
  if (typeof field === 'function' || typeof field === 'object' || typeof field === 'string') {
    return {
      field,
      fieldProps: uiSchema['ui:fieldProps'] || schema['ui:fieldProps'], // 自定义field ，支持传入额外的 props
    }
  }

  // 类型默认 field
  const fieldCtor = FIELDS_MAP[getSchemaType(schema)]
  if (fieldCtor) {
    return {
      field: fieldCtor,
    }
  }

  // 如果包含 oneOf anyOf 返回空不异常
  // SchemaField 会附加onyOf anyOf信息
  if (!fieldCtor && (schema.anyOf || schema.oneOf)) {
    return {
      field: null,
    }
  }

  // 不支持的类型
  console.error('当前schema:', schema)
  throw new Error(`不支持的field类型, type: ${schema.type}`)
}

// 解析用户配置的 uiSchema options
export function getUserUiOptions({
  schema = {},
  uiSchema = {},
  curNodePath, // undefined 不处理 表达式
  rootFormData = {},
}: any) {
  // 支持 uiSchema配置在 schema文件中
  return Object.assign({}, ...[schema, uiSchema].map(itemSchema => Object.keys(itemSchema)
    .reduce((options, key) => {
      const value = itemSchema[key]
      // options 内外合并
      if (key === 'ui:options' && isObject(value)) {
        return { ...options, ...value }
      }

      // https://github.com/lljj-x/vue-json-schema-form/issues/170
      // ui:hidden需要作为内置属性使用，不能直接透传给widget组件，如果组件需要只能在ui:options 中使用hidden传递
      if (key !== 'ui:hidden') {
        // 处理 ui:xxx  参数
        if (key.indexOf('ui:') === 0) {
          // 只对 ui:xxx 配置形式支持表达式
          return {
            ...options,
            [key.substring(3)]: curNodePath === undefined ? value : handleExpression(rootFormData, curNodePath, value, () => value),
          }
        }

        // 处理 fui:xxx 参数，支持所有的options 通过function配置
        if (key.indexOf('fui:') === 0) {
          return {
            ...options,
            // eslint-disable-next-line no-useless-call
            [key.substring(4)]: value.call(
              null,
              getPathVal2(rootFormData, curNodePath, 1),
              rootFormData,
              curNodePath,
            ),
          }
        }
      }

      return options
    }, {})))
}

// 下拉选项
export function optionsList(schema: JSONSchema, uiSchema: JSONSchema, curNodePath: string, rootFormData: any) {
  // enum
  if (schema.enum) {
    const uiOptions = getUserUiOptions({
      schema,
      uiSchema,
      curNodePath,
      rootFormData,
    })

    // ui配置 enumNames 优先
    const enumNames = uiOptions.enumNames || schema.enumNames
    return schema.enum.map((value, i) => {
      const label = (enumNames && enumNames[i]) || String(value)
      return { label, value }
    })
  }

  // oneOf | anyOf
  const altSchemas = schema.oneOf || schema.anyOf
  const altUiSchemas = uiSchema.oneOf || uiSchema.anyOf
  return altSchemas?.map((curSchema, i) => {
    const uiOptions = (altUiSchemas && altUiSchemas[i])
      ? getUserUiOptions({
          schema: curSchema,
          uiSchema: altUiSchemas[i],
          curNodePath,
          rootFormData,
        })
      : {}
    const value = toConstant(curSchema)
    const label = uiOptions.title || curSchema.title || String(value)
    return { label, value }
  })
}

// 解析当前节点的ui options参数
export function getUiOptions({
  schema = {},
  uiSchema = {},
  containsSpec = true,
  curNodePath,
  rootFormData,
}: any) {
  const spec: any = {}
  if (containsSpec) {
    spec.readonly = !!schema.readOnly
    if (undefined !== schema.multipleOf) {
      // 组件计数器步长
      spec.step = schema.multipleOf
    }
    if (schema.minimum || schema.minimum === 0) {
      spec.min = schema.minimum
    }
    if (schema.maximum || schema.maximum === 0) {
      spec.max = schema.maximum
    }

    if (schema.minLength || schema.minLength === 0) {
      spec.minlength = schema.minLength
    }
    if (schema.maxLength || schema.maxLength === 0) {
      spec.maxlength = schema.maxLength
    }

    if (schema.format === 'date-time' || schema.format === 'date') {
      // 数组类型 时间区间
      // 打破了schema的规范，type array 配置了 format
      if (schema.type === 'array') {
        spec.isRange = true
        spec.isNumberValue = !(schema.items && schema.items.type === 'string')
      }
      else {
        // 字符串 ISO 时间
        spec.isNumberValue = !(schema.type === 'string')
      }
    }
  }

  if (schema.title) { spec.title = schema.title }
  if (schema.description) { spec.description = schema.description }

  // 计算ui配置
  return {
    ...spec,

    // 用户配置最高优先级
    ...getUserUiOptions({
      schema,
      uiSchema,
      curNodePath,
      rootFormData,
    }),
  }
}

// 获取当前节点的ui 配置 （options + widget）
// 处理成 Widget 组件需要的格式
export function getWidgetConfig({
  schema = {},
  uiSchema = {},
  curNodePath,
  rootFormData,
}: any, fallback: any = null) {
  const uiOptions = getUiOptions({
    schema,
    uiSchema,
    curNodePath,
    rootFormData,
  })

  // 没有配置 Widget ，各个Field组件根据类型判断
  if (!uiOptions.widget && fallback) {
    Object.assign(uiOptions, fallback({
      schema,
      uiSchema,
    }))
  }

  const {
    widget,
    title: label,
    labelWidth,
    description,
    attrs: widgetAttrs,
    class: widgetClass,
    style: widgetStyle,
    widgetListeners,
    fieldAttrs,
    fieldStyle,
    fieldClass,
    emptyValue,
    width,
    getWidget,
    renderScopedSlots,
    renderChildren,
    onChange,
    required: uiRequired,
    ...uiProps
  } = uiOptions

  return {
    widget,
    label,
    labelWidth,
    description,
    widgetAttrs,
    widgetClass,
    widgetStyle,
    fieldAttrs,
    width,
    fieldStyle,
    fieldClass,
    emptyValue,
    getWidget,
    renderScopedSlots,
    renderChildren,
    onChange,
    widgetListeners,
    uiProps,
    uiRequired,
  }
}
