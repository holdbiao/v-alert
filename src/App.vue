<template>
  <div id="app">
    <!-- <alert></alert> -->
    <button @click="handleTest">测试</button>
  </div>
</template>

<script>
import alert from './alert/alert'

export default {
  name: 'app',
  components: {
    alert
  },
  methods: {
    handleTest () {
      // 方法一
      this.$alert.show({text: '测试内容', cancel: '关闭', confirm: '好的'}).then(res => {
        console.log('你点击了确定')
      }).catch(err => {
        console.log('你点击了取消')
      })

      // // 方法二
      // this.$alert.show('只有文字').then(res => {
      //   console.log('你点击了确定')
      // }).catch(err => {
      //   console.log('你点击了取消')
      // })

      // // 方法三
      // this.$alert.show().then(res => {
      //   console.log('你点击了确定')
      // }).catch(err => {
      //   console.log('你点击了取消')
      // })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
