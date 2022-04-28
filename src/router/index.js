import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dokumentasi from '../views/Dokumentasi.vue'
import Pemrograman from '../views/Pemrograman.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dokumentasi',
    name: 'Dokumentasi',
    component: Dokumentasi
  },
  {
    path: '/pemrograman',
    name: 'Pemrograman',
    component:Pemrograman
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
