import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)


import responsive from 'vue-responsive'
Vue.use(responsive)

import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
Vue.use(VueMaterial)



import VFC from 'vfc'
import 'vfc/dist/vfc.css'

// import vueCanvas from 'vue-canvas-effect';
// Vue.use(vueCanvas)

Vue.use(VFC)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
