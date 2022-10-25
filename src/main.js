import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'
import VNumeric from 'vuetify-numeric/vuetify-numeric.umd.min'

Vue.config.productionTip = false
Vue.use(VNumeric)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

