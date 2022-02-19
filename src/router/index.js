import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homerun from '../views/Homerun.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingList from '../views/ShoppingList.vue'
import OrderList from '../views/OrderList.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homerun',
    name: 'homerun',
    component: Homerun,
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: ProductList,
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    component: ProductDetail,
  },
  {
    path: '/shoppinglist',
    name: 'shoppinglist',
    component: ShoppingList,
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    component: OrderList,
  }
]

const router = new VueRouter({
  routes
})

export default router
