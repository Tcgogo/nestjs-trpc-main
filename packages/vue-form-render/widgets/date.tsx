import dayjs from 'dayjs'
import { toRefs } from 'vue'
import '../styles/common.scss'

function DatePicker(props: any) {
  return (
    <a-date-picker
      {...props}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

function MonthPicker(props: any) {
  return (
    <a-month-picker
      {...props}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

function WeekPicker(props: any) {
  return (
    <a-week-picker
      {...props}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

const Map: any = {
  DatePicker,
  MonthPicker,
  WeekPicker,
}

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
    const Picker = Map[options.type || 'DatePicker']
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
          <Picker
            {...options}
            value={value.value ? dayjs(value.value, options.format) : null}
            onChange={handleChange}
          />
        </div>
      )
    }
  },
}
