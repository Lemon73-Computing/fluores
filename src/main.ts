import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
})

createApp(App).use(vuetify).mount('#app')
