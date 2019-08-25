import Vue from 'vue'
import Router from 'vue-router'
import page1 from './views/page1.vue'
import page2 from './views/page2.vue'
import page3 from './views/page3.vue'
import page4 from './views/page4.vue'
import page5 from './views/page5.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/1' },
    {
      path: '/1',
      name: 'page1',
      component: page1,
      meta: { index: 1 }
    },
    {
      path: '/2',
      name: 'page2',
      component: page2,
      meta: { index: 2 }
    },
    {
      path: '/3',
      name: 'page3',
      component: page3,
      meta: { index: 3 }
    },
    {
      path: '/4',
      name: 'page4',
      component: page4,
      meta: { index: 4 }
    },
    {
      path: '/5',
      name: 'page5',
      component: page5,
      meta: { index: 5 }
    }
  ]
})
