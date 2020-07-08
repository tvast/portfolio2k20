import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)


import responsive from 'vue-responsive'
Vue.use(responsive)

import VFC from 'vfc'
import 'vfc/dist/vfc.css'

Vue.use(VFC)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
