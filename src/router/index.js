import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Course from '../views/Course.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
