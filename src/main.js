import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Service worker for mock API
async function prepareWorker() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.mount('#app')

// To enforce the app mount when the worker is ready
prepareWorker().then(() => {
  app.mount('#app')
})
