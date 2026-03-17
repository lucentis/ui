import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { lucentisUi } from './plugin'

createApp(App).use(lucentisUi).mount('#app')
