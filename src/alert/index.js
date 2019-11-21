import Vue from 'vue'
import alert from './alert.vue'

const Alert = Vue.extend(alert)

const alertFun = function (Options = {}) { // 接收默认设置
  return {
    show: (options = {}) => {
      let str_num = (typeof options === 'string' || typeof options === 'number')
      const Intance = new Alert({
        data: {
          text: str_num ? options : ((options && options.text) || (Options && Options.text) || ''),
          cancelText: (options && options.cancel) || (Options && Options.cancel) || '取消',
          confirmText: (options && options.confirm) || (Options && Options.confirm) || '确认',
        }
      })
      let vm = Intance.$mount() // 挂载
      document.body.appendChild(vm.$el) // 插入body
      return vm.init() // 显示
    }
  }
}

export default {
  install: (Vue, Options) => {
    Vue.prototype.$alert = alertFun(Options)
  }
}
