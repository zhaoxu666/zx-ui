import Vue from 'vue'
import App from './App.vue'
import ZXUI from '../packages'

Vue.config.productionTip = false
Vue.use(ZXUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
