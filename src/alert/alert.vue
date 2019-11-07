<template>
  <transition name="fade">
    <div class="biu-alert-wrapper" v-show="show">
      <transition name="show">
        <div class="biu-alert-main" v-show="show">
          <div class="biu-alert-text">{{content}}</div>
          <div class="biu-btn-cont">
            <button @click="cancel">取消</button>
            <button @click="confirm">确定</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      content: '',
      promise: null,
      show: false
    }
  },
  methods: {
    init () {
      this.show = true
      return new Promise((resolve, reject) => {
        this.promise = { resolve, reject }
      })
    },
    cancel () {
      this.promise.reject()
      this.destroyVm()
    },
    confirm () {
      this.promise.resolve()
      this.destroyVm()
    },
    destroyVm () {
      this.show = false
      setTimeout(() => { // 动画完成后执行
        this.$destroy(true) // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
        this.$el.parentNode.removeChild(this.$el) // 从dom节点删除
      }, 500)
    }
  }
}
</script>
<style lang="scss">
.biu-alert-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
  .biu-alert-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    padding: 20px;
    background-color: #fff;
    .biu-alert-text {
      padding: 10px;
    }
  }
  .show-enter-active, .show-leave-active {
    transition: all .2s ease-in-out;
  }

  .show-enter, .show-leave-to {
    transform: translate(-50%, -50%) scale(0);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
