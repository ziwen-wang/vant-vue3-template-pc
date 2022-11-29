// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import autoRegist from './components'
import autoRegistDirectives from './directives'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(autoRegist)
app.use(autoRegistDirectives)
app.mount('#app')
