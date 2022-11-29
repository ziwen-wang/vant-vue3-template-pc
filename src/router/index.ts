import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/Home.vue'),
      meta: {
        title: 'Home'
      }
    }
  ]
})

export default router
