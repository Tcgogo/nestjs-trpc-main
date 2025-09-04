import { PiniaColada } from '@pinia/colada'
import zhCN from 'vxe-pc-ui/lib/language/zh-CN' // 简体中文
import { VxeUI } from 'vxe-table'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'
// 自定义指令
import directive from '@/utils/directive'
import App from './App.vue'
import router from './router'
import pinia from './store'

import uiProvider from './ui/provider'
import '@/utils/systemCopyright'
// 加载 svg 图标
import 'virtual:svg-icons-register'
// UnoCSS
import '@unocss/reset/tailwind-compat.css'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.css'
// vxe-table
import 'vxe-table/styles/cssvar.scss'

VxeUI.setI18n('zh-CN', zhCN)

VxeUI.setLanguage('zh-CN')

const app = createApp(App)
app.use(pinia)
app.use(PiniaColada)
app.use(router)
app.use(uiProvider)
directive(app)
if (icons.isOfflineUse) {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}

app.mount('#app')
