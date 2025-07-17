import type { ElButton, ElCascader, ElCheckbox, ElDatePicker, ElInput, ElInputNumber, ElRadio, ElSelect, ElTableColumn } from 'element-plus'

interface BaseMenu {
  key: string // 菜单唯一标识
  name: string // 菜单名称
}

// 侧边栏菜单
interface SiderMenu extends BaseMenu {
  moduleType: 'sider'
  sideConfig: {
    menu: DashboardModelMenuType[]
  }
}

interface SiderMenuDefine extends BaseMenu {
  moduleType: 'sider'
  sideConfig: {
    menu: DashboardModelTypeDefineMenu[]
  }
}

// iframe 菜单
interface IframeMenu extends BaseMenu {
  moduleType: 'iframe'
  iframeConfig: {
    path: string
  }
}

// 自定义菜单
interface CustomMenu extends BaseMenu {
  moduleType: 'custom'
  customConfig: {
    path: string
  }
}

// schema
interface SchemaMenu extends BaseMenu {
  moduleType: 'schema'
  schemaConfig: SchemaConfig
}

type ModelMenu = Readonly<{
  sider: SiderMenu
  iframe: IframeMenu
  custom: CustomMenu
  schema: SchemaMenu
}>

/**
 * 模型菜单类型
 */
export type DashboardModelMenuType = Partial<Pick<SiderMenu, 'sideConfig'>>
  & Partial<Pick<IframeMenu, 'iframeConfig'>>
  & Partial<Pick<CustomMenu, 'customConfig'>>
  & Partial<Pick<SchemaMenu, 'schemaConfig'>>
  & BaseMenu
  & {
    menuType?: 'module' | 'group'
    moduleType?: keyof ModelMenu
    subMenu?: DashboardModelMenuType[]
  }

type DashboardModuleProps = SiderMenu | IframeMenu | CustomMenu | SchemaMenu | SiderMenuDefine
type DashboardGropuProps = { subMenu: DashboardModelTypeDefineMenu[] } & BaseMenu

/**
 * 模型配置类型定义使用
 */
type DashboardModelTypeDefineMenu = { menuType: 'module' } & DashboardModuleProps | { menuType: 'group' } & DashboardGropuProps
/**
 * 模型配置类型
 */
export interface DashboardModelType {
  name: string // 模型名称
  model?: string // 模型类型
  desc?: string // 模型描述
  homePage?: HomePage // 首页
  menu: DashboardModelMenuType[] // 菜单
  key?: string
}

/**
 * 模型配置类型定义使用
 */
export interface DashboardModelTypeDefine {
  /** 模型名称 */
  name: string
  /** 模型类型 */
  model?: string
  /** 模型描述 */
  desc?: string
  /** 默认页路由 */
  homePage?: HomePage
  /** 菜单 */
  menu: DashboardModelTypeDefineMenu[]
  /** 唯一key，不可重复 */
  // key: string;
}

interface HomePage {
  targetPath?: string
  path: string
  query?: {
    menuKey?: string
    siderKey?: string
  }
}

/** schemaConfig */
export interface SchemaConfig {
  /** 数据源 API, 遵循 RESTful 规范 */
  api: string
  /** 模块组件 */
  conponent: any
  /** 数据源 schema */
  schema: SchemaData
  /** 表格配置 */
  tableConfig: TableConfig
  /** 搜索配置 */
  searchConfig: SchemaSearchConfig

  /** 动态组件配置 */
  componentConfig?: {
    [key: string]: {
      /** 动态组件 key */
      mainKey?: string
      /** 标题 */
      title: string
      /** 保存按钮文案 */
      saveBtnText?: string
    }
  }
}

interface SchemaSearchConfig {
  [key: string]: any
  /** 配置组件类型 */
  comType: ComponentType
  /** 默认值 */
  default: any
}

interface SearchOption {
  [key: string]: any
  default: ''
}

export type ComponentType = 'input' | 'select' | 'date' | 'dateRange' | 'inputNumber' | 'radio' | 'checkbox' | 'cascader' | 'dynamicSelect'

interface EnumItem {
  label: string
  value: string
}

type TableOption = {
  visiable?: boolean

  /** 保留几位小数 */
  toFixed?: number
} & ElTableColumnProps

interface SchemaDataSearchOption {
  /** 默认值 */
  default?: any
  /** 配置组件类型 */
  comType?: ComponentType
  /** 枚举列表 */
  enumList?: EnumItem[]

  /** 是否必填 */
  required?: boolean
}

interface SchemaDataDynamicSelectOption {
  /** 数据源 API, 遵循 RESTful 规范 */
  api?: string
}

interface ComponentOptionType {
  [key: string]: any
  /** 配置组件类型 */
  comType?: ComponentType
  /** 是否展示 */
  visiable?: boolean
  /** 是否禁用 */
  disable?: boolean
  /** 默认值 */
  default?: any
  /** 枚举列表 */
  enumList?: EnumItem[]
}

// type AA = {
//   /**
//    * 字段在不同动态component 中的相关配置，前缀对应 componentConfig 中的键值
//    * eg: componentConfig.createForm, 这里对应 createFormOption
//    */
//   [Key in `${string}Option`]?: ComponentOptionType;
// } & {
//   [Key: string]: any;
// };

interface SchemaData {
  type: string
  properties: {
    [key: string]: {
      type: string
      label: string
      tableOption?: TableOption
      /** 搜索配置 */
      searchOption?: TableOption & SchemaDataSearchOption & ComponentProps & SchemaDataDynamicSelectOption
      /** 表格配置 */
      option?: TableOption & SchemaDataSearchOption & ComponentProps & SchemaDataDynamicSelectOption

      createFormOption?: ComponentOptionType
      editFormOption?: ComponentOptionType
      detailPanelOption?: ComponentOptionType

      /**
       * 字段在不同动态component 中的相关配置，前缀对应 componentConfig 中的键值
       * eg: componentConfig.createForm, 这里对应 createFormOption
       */
    }
  }
  // 是否必填
  required?: string[]
}

// 按钮属性
interface BaseButtonProps {
  label: string // 按钮名称
  eventKey: string // 事件名称
  eventOption?: { // 按钮事件具体配置
    // 请求参数格式
    // 格式一：[key1]: value1 // 固定值
    // 格式二：[key1]: schema::tableKey // 从 tableData 中获取值
    body?: Record<string, any>
    query?: Record<string, any>
    params?: Record<string, any>
    headers?: Record<string, any>

    /** 当 eventKey === 'showComponent'时，匹配对应的 component */
    comName?: string
  }
}

// 头部按钮
export type HeaderButtonProps = BaseButtonProps & ElButtonProps

// 行按钮
export type RowButtonProps = BaseButtonProps & ElButtonProps

// 表格配置
interface TableConfig {
  headerButtons: HeaderButtonProps[] // 头部按钮
  rowButtons: RowButtonProps[] // 行按钮
}

// el-table-column 属性
type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props']

// el-button 属性
type ElButtonProps = InstanceType<typeof ElButton>['$props']

// export type ComponentType = 'input' | 'select' | 'date' | 'dateRange' | 'inputNumber' | 'radio' | 'checkbox' | 'cascader';
// 组件 props 类型集合
type ComponentProps = InstanceType<typeof ElInput>['$props'] & InstanceType<typeof ElSelect>['$props'] & InstanceType<typeof ElDatePicker>['$props'] & InstanceType<typeof ElInputNumber>['$props'] & InstanceType<typeof ElRadio>['$props'] & InstanceType<typeof ElCheckbox>['$props'] & InstanceType<typeof ElCascader>['$props']
