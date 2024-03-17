import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Index.vue'
import Login from '../pages/auth/Index.vue'
import Users from '../pages/users/Index.vue'
import Categories from '../pages/categories/Index.vue'
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

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router
