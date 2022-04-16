import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import router from '@/router/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    userList: [],
    allProduct: [],
    currentProduct:[],
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setUserList(state, payload) {
      state.userList = payload;
    },
    setAllProduct(state, payload) {
      state.allProduct = payload;
    },
    setCurrentProduct(state, payload) {
      state.currentProduct = payload;
    }
  },

  actions: {
    authAction({ commit, dispatch }) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setUser", user);
          dispatch('getUserList');
        } else {
          commit("setUser", null);
          commit("setUserList", null)
        }
      });
    },

    signUpAction({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .catch(error => {
          commit("setError", error.message);
        });
    },

    signInAction({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .catch(error => {
          commit("setError", error.message);
          console.log(error);
        });
    },

    signOutAction({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
        })
        .catch(error => {
          commit("setError", error.message);
        });
    },

    addProduct({ state }, payload) {
      firebase
        .database()
        .ref("users")
        .child(state.user.uid)
        .push(payload);
      console.log(payload)
    },

    getUserList({ state, commit }) {
      return firebase
        .database()
        .ref('users/' + state.user.uid)
        .on('value', snapshot => {
          commit('setUserList', snapshot.val());
        })
    },

    getAllProduct({ commit }) {
      return firebase
        .database()
        .ref('productList/' + '0')
        .on('value', snapshot => {
          commit('setAllProduct', snapshot.val());
        })
    },

    deleteProduct({ getters }, { item, index }) {
      let userId = firebase.auth().currentUser.uid
      let userProducts = firebase.database().ref('users/' + userId + '/' + index)
      userProducts.remove();

      console.log(getters)
      console.log(item, 'item')
    },

    addCount({ getters }, { item, index }) {
      let userId = firebase.auth().currentUser.uid
      let userProducts = firebase.database().ref('users/' + userId + '/' + index)
      let payload = {
        count: item.count + 1
      }
      userProducts.update(payload)
      console.log(getters)
    },

    minusCount({ getters }, { item, index }) {
      let userId = firebase.auth().currentUser.uid
      let userProducts = firebase.database().ref('users/' + userId + '/' + index)
      if (item.count >= 2) {
        let payload = {
          count: item.count - 1
        }
        userProducts.update(payload)
      }
      console.log(getters)
    },

    routerToDetail({ getters }, { index }) {
      console.log(getters)
      router.push({name:"productdetail", params:{id: index}})
      // dispatch('currentProduct', index)
    },

    getProductId({ dispatch }) {
      const id = router.currentRoute.params.id;
      let productId = id;
      dispatch('currentProduct', productId)
      
    },
    currentProduct({getters, commit}, productId) {
      let currentProduct = getters.allProduct[productId]
      commit('setCurrentProduct', currentProduct)
    },
  },

  getters: {
    getUser(state) {
      return state.user;
    },
    isUserAuth(state) {
      return !!state.user;
    },
    getError(state) {
      return state.error;
    },
    totalPrice(state) {
      let result = 0
      for (let element in state.userList) {
        result += Number(state.userList[element].price * state.userList[element].count)
      }
      return result
    },
    allProduct(state) {
      let obj = Object.keys(state.allProduct).map(function(_) { return state.allProduct[_]; });
      return obj;
    },
    homeProduct(state) {
      let obj = Object.keys(state.allProduct).map(function(_) { return state.allProduct[_]; });
      let homeProduct = obj.slice(0, 8);
      return homeProduct;
    },
    bestSellingProduct(state) {
      let obj = Object.keys(state.allProduct).map(function(_) { return state.allProduct[_]; });
      let homeProduct = obj.slice(0, 4);
      return homeProduct;
    }
  },
})