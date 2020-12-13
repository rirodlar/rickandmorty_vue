import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorito',
    name: 'Favorito',
    component: () => import(/* webpackChunkName: "about" */ '../views/Favorito.vue')
  },
  {
    path: '/opinion',
    name: 'Opinion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Opinion.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
