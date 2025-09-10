import { isNil, isPlainObject, isString } from "es-toolkit";

/** 是否图片格式
 * @param {Object} value
 */
export function isImage(value = '') {
  const newValue = value.split('?')[0];
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
 * 是否视频格式
 * @param {Object} value
 */
export function isVideo(value = '') {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|webm)/i;
  return VIDEO_REGEXP.test(value);
}

/**
 * 是否文档格式格式
 * @param {Object} value
 */
export function isDoc(val = '') {
  const validExtensions = ['.doc', '.xls', '.ppt', '.pdf', '.docx', '.xlsx', '.pptx'];
  const fileExtension = val.toLowerCase().split('.').pop();
  return validExtensions.includes('.' + fileExtension);
}

/**
 * 数据是否为空，【null、undefined、空数组、空对象、空字符串】将被判断为空
 */
export const isEmpty = (data: any): boolean => {
  if (Array.isArray(data)) {
    return !data.length
  }

  if (isPlainObject(data)) {
    return !Object.keys(data).length
  }

  if (isString(data)) {
    return data.trim() === ''
  }

  return isNil(data)
}


export function parseStringToFunction(str: any) {
  try {
    if (typeof str === 'string') {
      return eval(`(function(){return ${str}})()`);
    }
  } catch (error) {
    return str
  }

  return str
}
