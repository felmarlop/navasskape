import { createApp } from 'vue'

import App from './App.vue'
// Audio player
import vuePlyr from './plugins/plyr'
// Vuetify
import vuetify from './plugins/vuetify'

createApp(App).use(vuetify).use(vuePlyr).mount('#app')
