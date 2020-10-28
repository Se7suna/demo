<template>
  <div id="app">
    <ul class="handle">
      <li class="handle-item" @click="handle(1)">push1</li>
      <li class="handle-item" @click="handle(2)">push2</li>
      <li class="handle-item" @click="handle(3)">push3</li>
      <li class="handle-item" @click="handle(4)">push4</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    handle (type) {
      this.list.push(type)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 960px;
  height: 500px;
  margin: 100px auto;
  position: relative;
  overflow: hidden;
}
.handle-item {
  padding: 20px 0;
  background-color: #87e8de;
  margin-top: 20px;
}
</style>
