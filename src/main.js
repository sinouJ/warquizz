import { createApp } from 'vue'
import './sass/style.scss'
import './style.css'
import App from './App.vue'
import router from './routes/index'

createApp(App).use(router).mount('#app')
