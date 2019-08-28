<template>
  <div id="app">
    <ul class="handle">
      <li class="handle-item" @click="handle1(1)">push1</li>
      <li class="handle-item" @click="handle1(2)">push2</li>
      <li class="handle-item" @click="handle1(3)">push3</li>
      <li class="handle-item" @click="handle1(4)">push4</li>
    </ul>
    <!-- <div v-for="item of list">{{item}}</div> -->
    <!-- <transition :name="direction">
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      direction: '',
      list: []
    }
  },
  methods: {
    handle1 (type) {
      this.list.push(type)
    }
  },
  // watch: {
  // '$route.name': function () {
  //   this.direction = this.$route.meta.index > this.index ? 'right' : 'left'
  //   this.index = this.$route.meta.index
  // }
  // },
  mounted () {
    this.index = this.$route.meta.index
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
  // .left-enter-active,
  // .left-leave-active,
  // .right-enter-active,
  // .right-leave-active {
  //   transition: all 0.5s ease;
  // }
  // .right-enter {
  //   transform: translateX(100%);
  // }
  // .right-leave-to {
  //   transform: translateX(-100%);
  // }
  // .left-enter {
  //   transform: translateX(-100%);
  // }
  // .left-leave-to {
  //   transform: translateX(100%);
  // }
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  .list {
    width: 720px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .list-item {
    flex: 1;
    text-align: center;
    margin: 0 10px;
    padding: 20px 0;
    background-color: #87e8de;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: darken(#87e8de, 25%);
    }
  }
  .active {
    color: #fff;
    background-color: darken(#87e8de, 25%);
  }
}

.handle-item {
  padding: 20px 0;
  background-color: #87e8de;
  margin-top: 20px;
}
</style>
