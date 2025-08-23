
import props from './props'
import type { GlobalOptions } from './types';
import { deepEquals, getDefaultFormState } from './utils/schema';

export function createForm(globalOptions: GlobalOptions) {
  const Form = defineComponent({
    name: 'VueForm',
    props,
    emits: ['update:modelValue', 'change', 'cancel', 'submit', 'validation-failed', 'form-mounted'],

    setup(props, { slots, emit }) {
      // 获取当前组件实例
      const internalInstance = getCurrentInstance()!;

      // 全局组件注册（只注册一次）
      if (!Form.installed && globalOptions.WIDGET_MAP?.widgetComponents) {
        Object.entries(globalOptions.WIDGET_MAP.widgetComponents).forEach(
          ([componentName, component]) => {
            internalInstance.appContext.app.component(componentName, component)
          }
        );

        // 标记已注册
        Form.installed = true
      }

      // 使用provide传递跨组件数据
      const fallbackLabel = toRef(props, 'fallbackLabel')
      provide('genFormProvide', {
        fallbackLabel,
      })

      // 根表单数据
      const rootFormData: Ref<any> = ref(
        getDefaultFormState(props.schema, props.modelValue, props.schema, props.strictMode)
      )

      // 表单底部参数配置
      const footerParams = computed(() => ({
        show: true,
        okBtn: '保存',
        okBtnProps: {},
        cancelBtn: '取消',
        ...props.formFooter
      }))

      // form组件实例，不需要响应式
      let formRef: any = null

      /**
       * 触发表单数据变更事件
       */
      const emitFormDataChange = (newValue: any, oldValue: any) => {
        // 支持v-model，引用类型
        emit('update:modelValue', newValue)

        // change事件，引用类型修改属性
        emit('change', {
          newValue,
          oldValue
        })
      }

      /**
       * 接收新的props时的处理逻辑
       */
      const willReceiveProps = (newVal: any, oldVal: any) => {
        if (!deepEquals(newVal, oldVal)) {
          const tempVal = getDefaultFormState(props.schema, props.modelValue, props.schema, props.strictMode)
          if (!deepEquals(rootFormData.value, tempVal)) {
            rootFormData.value = tempVal
          }
        }
      }

      // 监听表单数据变化，同步到v-model
      watch(rootFormData, (newValue, oldValue) => {
        emitFormDataChange(newValue, oldValue)
      }, {
        deep: true
      })

      // 监听schema变化
      watch(() => props.schema, (newVal, oldVal) => {
        willReceiveProps(newVal, oldVal)
      })

      // 监听modelValue变化
      watch(() => props.modelValue, (newVal, oldVal) => {
        willReceiveProps(newVal, oldVal)
      })

      // 保持v-model双向数据及时性
      emitFormDataChange(rootFormData.value, props.modelValue)

      /**
       * 获取默认插槽内容
       */
      const getDefaultSlot = () => {
        // 如果存在自定义插槽，优先使用
        if (slots.default) {
          return slots.default({
            formData: rootFormData,
            formRefFn: () => formRef
          })
        }

        // 显示默认表单底部
        if (footerParams.value.show) {
          return h(props.formFooter, {
            globalOptions,
            okBtn: footerParams.value.okBtn,
            okBtnProps: footerParams.value.okBtnProps,
            cancelBtn: footerParams.value.cancelBtn,
            formItemAttrs: footerParams.value.formItemAttrs,
            onCancel() {
              emit('cancel')
            },
            onSubmit() {
              // 优先获取组件$$validate方法，方便对validate方法转换
              const validateFn = (formRef as any).$$validate || (formRef as any).validate
              validateFn((isValid: boolean, resData: any) => {
                if (isValid) {
                  return emit('submit', rootFormData)
                }
                console.warn(resData)
                return emit('validation-failed', resData)
              })
            }
          })
        }

        return []
      }

      // 渲染函数
      return () => {
        const {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          layoutColumn = 1,
          inlineFooter,
          labelSuffix,
          isMiniDes,
          defaultSelectFirstOption,
          popover,
          ...uiFormProps
        } = props.formProps || {}

        const { inline = false, labelPosition = 'top' } = uiFormProps

        // Schema字段组件的props
        const schemaProps = {
          schema: props.schema,
          uiSchema: props.uiSchema,
          errorSchema: props.errorSchema,
          customFormats: props.customFormats,
          customRule: props.customRule,
          rootSchema: props.schema,
          rootFormData: rootFormData.value, // 根节点的数据
          curNodePath: '', // 当前节点路径
          globalOptions, // 全局配置，差异化ui框架
          formProps: {
            labelPosition,
            labelSuffix: '：',
            defaultSelectFirstOption: true,
            inline,
            ...props.formProps
          }
        }

        return h(
          resolveComponent(globalOptions.COMPONENT_MAP.form),
          {
            class: {
              genFromComponent: true,
              formInlineFooter: inlineFooter,
              formInline: inline,
              [`genFromComponent_${props.schema.id}Form`]: !!props.schema.id,
              layoutColumn: !inline,
              [`layoutColumn-${layoutColumn}`]: !inline
            },
            setFormRef: (form: any) => {
              formRef = form;
              (internalInstance.proxy as any).$$uiFormRef = formRef
              console.log('%c [(internalInstance.proxy as any).$uiFormRef]-186', 'font-size:13px; background:#336699; color:#fff;', (internalInstance.proxy as any).$$uiFormRef);

              emit('form-mounted', form, {
                formData: rootFormData.value
              })
            },
            // 阻止form默认submit
            onSubmit(e: Event) {
              e.preventDefault()
            },
            model: rootFormData,
            labelPosition,
            inline,
            ...uiFormProps
          },
          // {
          //   default: () => [
          //     h(SchemaField, schemaProps),
          //     getDefaultSlot(),
          //   ]
          // }
        )
      }
    },
  })
}