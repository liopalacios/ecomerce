import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/Products.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import TestView from '../views/TestView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products/:productId',
      name: 'ProductDetail',
      component: ProductDetailView
    },
    {
      path: '/testvue',
      name: 'Testvue',
      component: TestView
    },
    {
      path: '/summary',
      name: 'order.summary',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'order.checkout',
      component: () => import('../views/CheckoutView.vue')
    }
  ]
})

export default router
