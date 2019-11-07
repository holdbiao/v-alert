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
      this.$alert({text: '测试内容'}).then(res => {
        console.log('你点击了确定')
      }).catch(err => {
        console.log('你点击了取消')
      })
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
