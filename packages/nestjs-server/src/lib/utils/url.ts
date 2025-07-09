/**
 * 将对象转换为URL编码的查询字符串
 * @param obj 需要转换的对象
 * @returns 返回URL编码后的字符串
 * @example
 * convertObjToUrlencoded({name: 'test', age: 18}) // 返回 "name=test&age=18"
 */
export function convertObjToUrlencoded(obj: {
  [key: string]: any;
}): string {
  return new URLSearchParams(Object.entries(obj)).toString();
}

/**
 * 将URL编码的查询字符串转换为对象
 * @param str URL编码的查询字符串
 * @returns 返回解码后的对象
 * @example
 * convertUrlencodedToObj("name=test&age=18") // 返回 {name: 'test', age: '18'}
 */
export function convertUrlencodedToObj<T = Record<string, any>>(str: string): T {
  const searchParams = new URLSearchParams(str);
  const obj: Record<string, any> = {};
  
  for (const [key, value] of searchParams.entries()) {
    try {
      // 尝试解析 JSON 字符串
      obj[key] = JSON.parse(value);
    } catch {
      // 如果解析失败，则保持原始字符串
      obj[key] = value;
    }
  }
  
  return obj as T;
}

/**
 * 解码单个URL编码的字符串
 * @param str URL编码的字符串
 * @returns 返回解码后的字符串
 * @example
 * decodeUrlString("hello%20world") // 返回 "hello world"
 */
export function decodeUrlString(str: string): string {
  return decodeURIComponent(str);
}

/**
 * 将对象转换为JSON字符串，可以处理循环引用
 * @param obj 要序列化的对象
 * @param replacer 可选的替换函数或数组
 * @param spaces 缩进空格数
 * @param cycleReplacer 可选的循环引用处理函数
 * @returns 返回JSON字符串
 */
export function stringify(
  obj: any,
  replacer?: ((key: string, value: any) => any) | (string | number)[] | null,
  spaces?: number | string,
  cycleReplacer?: (key: string, value: any) => any
): string {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

/**
 * 创建一个序列化函数，用于处理循环引用
 * @param replacer 可选的替换函数或数组
 * @param cycleReplacer 可选的循环引用处理函数
 * @returns 返回序列化函数
 */
function serializer(
  replacer?: ((key: string, value: any) => any) | (string | number)[] | null,
  cycleReplacer?: (key: string, value: any) => any
): (key: string, value: any) => any {
  const stack: any[] = [];
  const keys: string[] = [];

  if (cycleReplacer == null) {
    cycleReplacer = (key: string, value: any): string => {
      if (stack[0] === value) return "[Circular ~]";
      return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
  }

  return function(this: any, key: string, value: any): any {
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    if (replacer) {
      if (typeof replacer === 'function') {
        return replacer.call(this, key, value);
      }
      if (Array.isArray(replacer)) {
        return replacer.includes(key) ? value : undefined;
      }
    }
    return value;
  };
}