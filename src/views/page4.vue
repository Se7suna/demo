<template>
  <div class="page" style="background-color: #b37feb">
    <h1>This is page Four!</h1>
    <ul class="list">
      <li class="list-item" :class="{active: $route.name === 'page1'}" @click="$router.push({name: 'page1'})">jump to 1</li>
      <li class="list-item" :class="{active: $route.name === 'page2'}" @click="$router.push({name: 'page2'})">jump to 2</li>
      <li class="list-item" :class="{active: $route.name === 'page3'}" @click="$router.push({name: 'page3'})">jump to 3</li>
      <li class="list-item" :class="{active: $route.name === 'page4'}">jump to 4</li>
      <li class="list-item" :class="{active: $route.name === 'page5'}" @click="$router.push({name: 'page5'})">jump to 5</li>
    </ul>
  </div>
</template>
