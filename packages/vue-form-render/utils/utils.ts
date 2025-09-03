export function isUrl(string: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  const protocolRE = /^(?:\w+:)?\/\/(\S+)$/
  // const domainRE = /^[^\s\.]+\.\S{2,}$/;
  if (typeof string !== 'string') { return false }
  return protocolRE.test(string)
}

export function isEmail(value: string) {
  const regex = '^[.\\w-]+@[\\w-]+(.[\\w-]+)+$' // eslint-disable-line
  if (value && new RegExp(regex, '').test(value)) {
    return true
  }
  return false
}

export function hasRepeat(list: any[]) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y)),
  )
}

function toKey(value: any) {
  if (typeof value === 'string') {
    return value
  }
  const result = `${value}`
  return result === '0' && 1 / value === -Infinity ? '-0' : result
}

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

function isKey(value: any, object: any) {
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  if (type === 'number' || type === 'boolean' || value == null) {
    return true
  }
  return (
    reIsPlainProp.test(value)
    || !reIsDeepProp.test(value)
    || (object != null && value in new Object(object))
  )
}

function castPath(value: any, object: any) {
  if (Array.isArray(value)) {
    return value
  }
  return isKey(value, object) ? [value] : value.match(/([^\.\[\]"']+)/g); // eslint-disable-line
}

export function isEmptyObject(obj: any) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

// getValueByKey(formData, 'a.b.c')
export function baseGet(object: any, path: any) {
  path = castPath(path, object)

  let index = 0
  const length = path.length

  while (object != null && index < length) {
    object = object[toKey(path[index++])]
  }
  return index && index === length ? object : undefined
}
