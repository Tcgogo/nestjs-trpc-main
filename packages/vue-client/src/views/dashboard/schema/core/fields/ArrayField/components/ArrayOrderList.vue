<script setup lang="ts">
import type { VNode } from 'vue'
import { computed, h } from 'vue'
import {
  IconCaretDown,
  IconCaretUp,
  IconClose,
  IconPlus,
} from '../../../components'

// 定义 props 类型
interface Props {
  // 需要被排序的VNode list
  vNodeList?: Array<{
    key: string | number
    vNode: VNode
  }>
  // tuple类型的数组，需要固定前值
  tupleItemsLength?: number
  addable?: boolean // 是否启用添加
  showIndexNumber?: boolean // 是否显示当前序号
  sortable?: boolean // 是否可排序
  removable?: boolean // 是否可移除
  maxItems?: number // 最多添加个数
  minItems?: number // 最少添加个数
  globalOptions?: any
}

// 定义 emits 类型
interface ArrayOperateEvent {
  command: 'moveUp' | 'moveDown' | 'remove' | 'add'
  data?: {
    index?: number
  }
}

// 定义 props
const props = withDefaults(defineProps<Props>(), {
  vNodeList: () => [],
  tupleItemsLength: 0,
  addable: true,
  showIndexNumber: false,
  sortable: true,
  removable: true,
})

// 定义 emits
const emit = defineEmits<{
  arrayOperate: [event: ArrayOperateEvent]
}>()

// 是否可添加
const canAdd = computed(() => {
  const { addable, maxItems, vNodeList } = props
  // 配置不可添加
  if (!addable) { return false }

  // 配置了最大个数
  if (maxItems !== undefined) {
    return vNodeList.length < maxItems
  }
  return true
})

// 是否可移除
const canRemove = computed(() => {
  const { removable, minItems, vNodeList } = props
  // 配置不可移除
  if (!removable) { return false }

  if (minItems !== undefined) {
    return vNodeList.length > minItems
  }

  return true
})

// 渲染函数
function render() {
  // 没有数据，且不能添加不渲染该组件
  if (props.vNodeList.length <= 0 && !props.addable) { return null }

  // 是否可继续添加元素
  return h(
    'div',
    {
      class: {
        arrayOrderList: true,
      },
    },
    props.vNodeList.map(({ key, vNode: VNodeItem }, index) => {
      const trueIndex = props.tupleItemsLength + index
      const indexNumber = index + 1
      return h(
        'div',
        {
          key,
          class: {
            arrayOrderList_item: true,
          },
        },
        [
          props.showIndexNumber
            ? h('div', {
                class: {
                  arrayListItem_index: true,
                },
              }, indexNumber)
            : null,
          h(
            'div',
            {
              class: {
                arrayListItem_operateTool: true,
              },
            },
            [
              h(
                'button',
                {
                  // 配置不可排序不显示排序按钮
                  style: {
                    ...(!props.sortable
                      ? {
                          display: 'none',
                        }
                      : {}),
                  },
                  class: {
                    'arrayListItem_btn': true,
                    'arrayListItem_orderBtn-top': true,
                  },
                  type: 'button',
                  disabled: !props.sortable || index === 0,
                  onClick: () => {
                    emit('arrayOperate', {
                      command: 'moveUp',
                      data: {
                        index: trueIndex,
                      },
                    })
                  },
                },
                [h(IconCaretUp)],
              ),
              h(
                'button',
                {
                  // 配置不可排序不显示排序按钮
                  style: {
                    ...(!props.sortable
                      ? {
                          display: 'none',
                        }
                      : {}),
                  },
                  class: {
                    'arrayListItem_btn': true,
                    'arrayListItem_orderBtn-bottom': true,
                  },
                  type: 'button',
                  disabled: !props.sortable || index === props.vNodeList.length - 1,
                  onClick: () => {
                    emit('arrayOperate', {
                      command: 'moveDown',
                      data: {
                        index: trueIndex,
                      },
                    })
                  },
                },
                [h(IconCaretDown)],
              ),
              h(
                'button',
                {
                  // 配置不可移除不显示移除按钮
                  style: {
                    ...(!props.removable
                      ? {
                          display: 'none',
                        }
                      : {}),
                  },
                  class: {
                    'arrayListItem_btn': true,
                    'arrayListItem_btn-delete': true,
                  },
                  type: 'button',
                  disabled: !canRemove.value,
                  onClick: () => {
                    emit('arrayOperate', {
                      command: 'remove',
                      data: {
                        index: trueIndex,
                      },
                    })
                  },
                },
                [h(IconClose)],
              ),
            ],
          ),
          h(
            'div',
            {
              class: {
                arrayListItem_content: true,
              },
            },
            [VNodeItem],
          ),
        ],
      )
    }).concat([
      h(
        'p',
        {
          style: {
            ...(!canAdd.value
              ? {
                  display: 'none',
                }
              : {}),
          },
          class: {
            arrayOrderList_bottomAddBtn: true,
          },
        },
        [
          h(
            'button',
            {
              class: {
                'bottomAddBtn': true,
                'is-plain': true,
                'genFormBtn': true,
              },
              type: 'button',
              onClick: () => {
                emit('arrayOperate', {
                  command: 'add',
                })
              },
            },
            [
              h(IconPlus, {
                style: { marginRight: '5px' },
              }),
              props.maxItems ? `( ${props.vNodeList.length} / ${props.maxItems} )` : '',
            ],
          ),
        ],
      ),
    ]),
  )
}

// 导出渲染函数
defineExpose({
  render,
})
</script>

<template>
  <component :is="render" />
</template>

<style scoped lang="scss">
.arrayOrderList {
  &_item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  &_bottomAddBtn {
    margin-top: 8px;
  }
}

.arrayListItem {
  &_index {
    min-width: 30px;
    padding: 8px;
    margin-right: 8px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  &_operateTool {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  }

  &_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    margin-bottom: 4px;
    cursor: pointer;
    background: white;
    border: 1px solid #d9d9d9;
    border-radius: 4px;

    &:hover:not(:disabled) {
      color: #40a9ff;
      border-color: #40a9ff;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &-delete {
      &:hover:not(:disabled) {
        color: #ff4d4f;
        border-color: #ff4d4f;
      }
    }
  }

  &_content {
    flex: 1;
  }
}

.bottomAddBtn {
  padding: 8px 16px;
  color: #666;
  cursor: pointer;
  background: white;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;

  &:hover {
    color: #40a9ff;
    border-color: #40a9ff;
  }

  &.is-plain {
    background: transparent;
  }

  &.genFormBtn {
    font-size: 14px;
  }
}
</style>
