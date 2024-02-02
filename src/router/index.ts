import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login/LoginForm.vue'
import RegisterView from '../views/Register/RegisterForm.vue'
import BasketView from '../views/Basket/BasketWrapper.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/baskets/basket',
      name: '/baskets/basket',
      component: BasketView
    },
    {
      path: '/users/login',
      name: '/users/login',
      component: LoginView
    },
    {
      path: '/users/register',
      name: '/users/register',
      component: RegisterView
    },
    {
      path: '/vakko-hakkinda-kurucu/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


export default router



