import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useCartStore } from './stores/cartStore'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.use(useCartStore)
/*app.created(
  useCartStore
    .dispatch('getProducts')
    .then((_) => {})
    .catch((error) => {
      console.log(error)
    })
)*/
app.mount('#app')
