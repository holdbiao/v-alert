import Vue from 'vue'
import alert from './alert.vue'

const Alert = Vue.extend(alert)

const alertFun = function (option = {}) {
  const Intance = new Alert({
    data: {
      content: option.text || ''
    }
  })
  let vm = Intance.$mount()
  // console.log(vm.$el)
  document.body.appendChild(vm.$el)
  return vm.init()
}

export default {
  install: (Vue) => {
    Vue.prototype.$alert = alertFun
  }
}
