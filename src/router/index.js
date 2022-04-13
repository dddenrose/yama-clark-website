import Vue from 'vue'
import VueRouter from 'vue-router'
import Homerun from '../views/Homerun.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingList from '../views/ShoppingList.vue'
import OrderList from '../views/OrderList.vue'
import Login from '../views/Login.vue'
import SignUpPage from '../components/SignUpPage.vue'
import LoginPage from '../components/LoginPage.vue'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
// import store from '@/store/index.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    // meta: {
    //   isUserAuth: true
    // }
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    component: OrderList,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signuppage',
    name: 'signuppage',
    component: SignUpPage,
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.isUserAuth)) {
//       if (store.state.user === null) {
//           next({
//               path: '/login'
//           });
//       } else {
//           next();
//       }
//   } else {
//       next();
//   }
// });

export default router
