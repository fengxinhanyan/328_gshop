
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
