<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter {
    transform: translateX(100%);
  }
  .fade-leave-to {
    transform: translateX(-100%);
  }
}

.page {
  padding: 200px 0;
  position: fixed;
  .list {
    width: 720px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .list-item {
    background-color: #87e8de;
    flex: 1;
    margin: 0 10px;
    padding: 20px 0;
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
</style>
