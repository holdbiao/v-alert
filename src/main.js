import Vue from 'vue'
import App from './App.vue'
import alert from './alert'
// import alert from '../dist/build' // 打包后测试

Vue.use(alert)

new Vue({
  el: '#app',
  render: h => h(App)
})
