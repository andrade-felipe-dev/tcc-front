
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/auth/Index.vue'
import Home from '../pages/home/Index.vue'
import Users from '../pages/users/Index.vue'
import Categories from '../pages/category/Index.vue'
import Contents from '../pages/contents/Index.vue'
import AboutMe from '../pages/aboutMe/Index.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
  { path: '/about-me', component: AboutMe },
  { path: '/users', component: Users },
  { path: '/categories', component: Categories },
  { path: '/contents', component: Contents },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
