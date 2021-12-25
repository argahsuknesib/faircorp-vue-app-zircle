import Vue from 'vue'
import App from './App.vue'
import Zircle from 'zircle'
import 'zircle/dist/zircle.css'
Vue.use(Zircle)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
