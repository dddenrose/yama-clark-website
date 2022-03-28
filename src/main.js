import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Slider from '@jeremyhamm/vue-slider'

Vue.config.productionTip = false
Vue.use(Slider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')