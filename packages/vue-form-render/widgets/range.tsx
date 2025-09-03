// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import dayjs from 'dayjs'
import { toRefs } from 'vue'
import '../styles/common.scss'

export default {
  props: {
    schema: Object,
    formData: Object,
    name: String,
    onChange: Function,
    value: [String, Number, Boolean, Object],
    disabled: Boolean,
    readOnly: Boolean,
    invalidText: String,
  },
  setup(props: any) {
    const {
      onChange,
      name,
      value,
    } = toRefs(props)
    const handleChange = (moment: any, str: any) => {
      onChange.value(name.value, str)
    }
    const options = props.schema['ui:options'] || {}

    const getRangeValue = (value: any, format: any) => {
      if (!value) { return [] }
      const startTime = value[0] ? dayjs(value[0], format) : ''
      const endTime = value[1] ? dayjs(value[1], format) : ''
      return [startTime, endTime]
    }

    return () => {
      return (
        <div class="form-item">
          <div class="form-item-title">
            {props.schema.title}
            <span style={{
              color: props.invalidText && '#ff4d4f',
            }}
            >
              {props.invalidText && props.invalidText}
            </span>
          </div>
          <a-range-picker
            // locale={locale}
            {...options}
            value={getRangeValue(value.value, options.format)}
            onChange={handleChange}
          />
        </div>
      )
    }
  },
}
