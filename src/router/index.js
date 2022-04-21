import Vue from 'vue'
import VueRouter from 'vue-router'
// import Homerun from '../views/Homerun.vue'
// import ProductList from '../views/ProductList.vue'
// import ProductDetail from '../views/ProductDetail.vue'
// import ShoppingList from '../views/ShoppingList.vue'
// import OrderList from '../views/OrderList.vue'
// import Login from '../views/Login.vue'
// import SignUpPage from '../components/SignUpPage.vue'
// import LoginPage from '../components/LoginPage.vue'
// import Home from '../views/Home.vue'
// import SignUp from '../views/SignUp.vue'
// import OrderHistory from '../views/OrderHistory.vue'
// import Profile from '../views/Profile.vue'
// import store from '@/store/index.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homerun',
    // component: Homerun,
    component: () => import(/* webpackChunkName: "Homerun" */ '../views/Homerun.vue')
  },
  {
    path: '/productlist',
    name: 'productlist',
    // component: ProductList,
    component: () => import(/* webpackChunkName: "ProductList" */ '../views/ProductList.vue')
  },
  {
    path: '/productdetail/:id',
    name: 'productdetail',
    // component: ProductDetail,
    component: () => import(/* webpackChunkName: "ProductDetail/:id" */ '../views/ProductDetail.vue')
  },
  {
    path: '/shoppinglist',
    name: 'shoppinglist',
    // component: ShoppingList,
    component: () => import(/* webpackChunkName: "ShoppingList" */ '../views/ShoppingList.vue')
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    // component: OrderList,
    component: () => import(/* webpackChunkName: "OrderList" */ '../views/OrderList.vue')
  },
  {
    path: '/login',
    name: 'login',
    // component: Login,
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // component: SignUp,
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/SignUp.vue')
  },
  {
    path: '/orderhistory',
    name: 'orderhistory',
    // component: OrderHistory,
    component: () => import(/* webpackChunkName: "OrderHistory" */ '../views/OrderHistory.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // component: Profile,
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  // mode: "hash",
  // base: process.env.BASE_URL,
  routes
});


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.isUserAuth)) {
//     if (!store.getters.isUserAuth) {
//       next({
//         path: '/login'
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router
