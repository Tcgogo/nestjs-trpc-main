import type { FormProps, GlobalOptions, JSONSchema, UISchema, ValidationRule } from "../types";

// 递归参数，统一props
export default {
    formProps: {
        type: Object as PropType<FormProps>,
        default: () => ({})
    },
    // 全局的配置，用于 初始化差异，适配不同的ui框架
    globalOptions: {
        type: Object as PropType<GlobalOptions>,
        default: () => ({})
    },
    // 当前节点schema
    schema: {
        type: Object as PropType<JSONSchema>,
        default: () => ({})
    },
    // 当前节点Ui Schema
    uiSchema: {
    type: Object as PropType<UISchema>,
        default: () => ({})
    },
    // 当前节点Error Schema
    errorSchema: {
        type: Object,
        default: () => ({})
    },
    // 自定义校验
    customRule: {
        type: Function as PropType<ValidationRule>,
        default: null
    },
    // 自定义校验规则
    customFormats: {
        type: Object as PropType<Record<string, any>>,
        default: () => ({})
    },
    // 根节点 Schema
    rootSchema: {
        type: Object as PropType<JSONSchema>,
        default: () => ({})
    },
    // 根节点的数据
    rootFormData: {
        type: Object as PropType<any>,
        default: () => ({})
    },
    // 当前节点路径
    curNodePath: {
        type: String,
        default: ''
    },
    // 是否必填
    required: {
        type: Boolean,
        default: false
    },
    // 是否需要校验数据组
    // object array 类型默认会最后追加一个校验组件校验整体数据
    needValidFieldGroup: {
        type: Boolean,
        default: true
    }
};
