import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import page2 from '../views/page2.vue'

const routes = [
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes :[
    
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/page2.vue'),
        
      },
      {
        path: '/page2/:adults/:child/:cin/:cout/:loc',
        name: 'page2',
        component: () => import('../views/page2.vue'),
        props: true
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('../views/page3.vue')
      },
      {
        path: '/page3/:adults/:child/:cin/:cout/:loc/:tothprice/:numloc',
        name: 'page3',
        component: () => import('../views/page3.vue'),
        props: true
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import('../views/page4.vue')
      }
  ]
})

export default router
