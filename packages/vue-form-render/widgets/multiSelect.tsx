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
    const handleChange = (v: any) => {
      onChange.value(name.value, v)
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
          <a-select
            mode="multiple"
            value={value.value}
            onChange={handleChange}
            style="width: 200px"
            placeholder="Please select"
          >
            {
              props.schema.enum.map((item: any, index: any) => (
                <a-select-option
                  value={item}
                  key={item}
                >
                  {props.schema.enumNames ? props.schema.enumNames[index] || props.schema.enum[index] : props.schema.enum[index]}
                </a-select-option>
              ))
            }
          </a-select>
        </div>
      )
    }
  },
}
