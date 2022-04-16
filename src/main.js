import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
// import vuetify from '@/plugins/vuetify' // path to vuetify export


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAbYLUVJYoITGNvgeEJiLWKwlvEZEgsn7M",
  authDomain: "yama-website.firebaseapp.com",
  databaseURL: "https://yama-website-default-rtdb.firebaseio.com",
  projectId: "yama-website",
  storageBucket: "yama-website.appspot.com",
  messagingSenderId: "1094650287749",
  appId: "1:1094650287749:web:b011ea45db8ec625e5bbec",
  measurementId: "G-6TTRYFGB6X"
}

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')