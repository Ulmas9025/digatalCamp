// import './assets/main.css'

 import { createApp } from 'vue'
 import App from '@/components/app/App.vue'
// import router from './router'
import uiComponents from './components/ui-components/index.js'
const app = createApp(App)
uiComponents.map(component => {app.component(component.name, component)})
// app.use(router)

app.mount('#app')


