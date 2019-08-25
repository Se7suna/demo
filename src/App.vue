<template>
  <div id="app">
    <transition name="slide-fade">
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
  .slide-fade {
    position: absolute;
    left: 0;
    right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
}

.page {
  padding: 200px 0;
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
