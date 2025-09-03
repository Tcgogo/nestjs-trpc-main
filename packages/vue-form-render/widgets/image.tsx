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

    const upload = ({ file }: any) => {
      try {
        const imgSrc = file.response.data[0]
        onChange.value(name.value, imgSrc)
      }
      catch (e) {
        // ignore
      }
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
            {
              props.schema.action && (
                <a-upload
                  action={props.schema.action}
                  onChange={upload}
                  showUploadList={false}
                  accept=".png,.gif,.jpg,.jpeg"
                  name="filed"
                  data={{
                    action: 'fileUpload',
                  }}
                >
                  <a-button>
                    <upload-outlined />
                  </a-button>
                </a-upload>
              )
            }
            <a-input
              class="flex1"
              value={value.value}
              type="text"
              onInput={handleChange}
            />
            <a-popover v-slots={{
              content: () => (
                <a-image width={100} src={value.value} />
              ),
            }}
            >
              <div>
                <a-button>
                  {' '}
                  <FileImageOutlined />
                </a-button>
              </div>
            </a-popover>
          </div>
        </div>
      )
    }
  },
}
