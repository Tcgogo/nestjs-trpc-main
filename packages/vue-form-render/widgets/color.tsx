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
    const handleChange = (e: any) => {
      onChange.value(name.value, e.target.value)
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
          <div class="flex align-center">
            <a-input
              style={{ width: '50px', height: '32px', padding: 0 }}
              value={value.value}
              type="color"
              onInput={handleChange}
            />
            <a-input
              onInput={handleChange}
              className="flex1"
              value={value.value}
              type="text"
            />
          </div>

        </div>
      )
    }
  },
}
