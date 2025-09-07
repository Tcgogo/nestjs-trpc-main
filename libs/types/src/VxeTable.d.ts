import type { VxeColumnProps, VxeTableEventProps, VxeTableProps } from 'vxe-table'

declare namespace UITable {
  // <VxeTable> 组件的 props 和事件
  type VxeTable = VxeTableProps & VxeTableEventProps

  // <VxeColumn> 组件的 props
  type VxeColumn = VxeColumnProps
}
