import { createApp } from 'vue'
import './style.css'
// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
// import './styles/main.scss'

const app = createApp(App)

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// app.use(pinia)
// app.mount('#app')

createApp(App).mount('#app')
