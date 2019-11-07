import Vue from 'vue'
import App from './App.vue'
import alert from './alert'

Vue.use(alert)

new Vue({
  el: '#app',
  render: h => h(App)
})
