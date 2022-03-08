import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { date, currency } from './methods/filters'
import VueGoogleMaps from '@fawmi/vue-google-maps'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

AOS.init()

const app = createApp(App)
app.use(router)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCWbo15WBNGGpWAWreL35JLWqvefnh1U58'
  }
})
app.use(VueAxios, axios)
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.mount('#app')
