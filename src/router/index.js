import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from '@/views/Counter'
import Qiita from '@/views/Qiita'
import Graph from '@/views/Graph'


Vue.use(VueRouter)

const routes = [
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/qiita',
    name: 'Qiita',
    component: Qiita
  },
  {
    path: '/graph',
    name: 'Graph',
    component: Graph
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
