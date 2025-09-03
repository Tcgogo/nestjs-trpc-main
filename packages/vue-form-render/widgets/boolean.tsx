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
          {
            props.schema['ui:widget'] === 'switch'
              ? (
                  <div>
                    <div class="form-item-title">
                      {props.schema.title}
                      <span style={{
                        color: props.invalidText && '#ff4d4f',
                      }}
                      >
                        {props.invalidText && props.invalidText}
                      </span>
                    </div>
                    <a-switch
                      checked={value.value}
                      onChange={handleChange}
                    />
                  </div>
                )
              : (
                  <a-checkbox
                    checked={value.value}
                    onChange={() => handleChange(!value.value)}
                  >
                    {props.schema.title}
                  </a-checkbox>
                )
          }

        </div>
      )
    }
  },
}
