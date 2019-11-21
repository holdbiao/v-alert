import Vue from 'vue'
import App from './App.vue'
import alert from './alert'
// import alert from '../dist/build' // 打包后测试

// Vue.use(alert)
Vue.use(alert, {text: 'default', cancel: 'cancel', confirm: 'confirm'})

new Vue({
  el: '#app',
  render: h => h(App)
})
