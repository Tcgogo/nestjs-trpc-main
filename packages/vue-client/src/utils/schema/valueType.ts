interface IValueTypeProps {
  [type: string]: any
}

export const BUILT_IN_VALUE_TYPES: IValueTypeProps = {
  /**
   * 代码块
   */
  code: {},
  /**
   * 百分比
   */
  percent: {},
  /**
   * 状态开关
   */
  switch: {},
  /**
   * 标签
   */
  tags: {},
  /**
   * 评分
   */
  rate: {},
  /**
   * 数字千分位
   */
  'comma-number': {},
  /**
   * 图片显示
   */
  images: {},
  /**
   * 长文案 Tooltips 方式显示
   */
  'long-text': {},
  /**
   * 长文案点击弹窗方式显示
   */
  'long-text-modal': {},
}
