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
    currentProduct: [],
    orderHistory: [],
    loading: false,
    tag: [],
    search: "",
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
    },
    setOrderHistory(state, payload) {
      state.orderHistory = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setTag(state, payload) {
      state.tag = payload;
    },
    setSearch(state, payload) {
      state.search = payload;
    }
  },

  actions: {
    authAction({ commit, dispatch }) {
      commit('setLoading', true)
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setUser", user);
          dispatch('getUserList');
          dispatch('getOrderHistory');
        } else {
          commit("setUser", null);
          commit("setUserList", null)
          commit('setLoading', false)
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

    addProduct({ state }, { product }) {
      let newProduct = [];
      newProduct.push(product);
      let userId = firebase.auth().currentUser.uid;

      let oldList = state.userList;
      let sameImage = false;
      if (oldList) {
        for (let i = 0; i < oldList.length; i++) {
          if (oldList[i].imagePath === newProduct[0].imagePath) {
            sameImage = true;
          }
        }
      }

      if (state.userList == null) {
        firebase
          .database()
          .ref("users")
          .child(state.user.uid)
          .set(newProduct)
      } else {
        if (sameImage) {
          for (let i = 0; i < oldList.length; i++) {
            if (oldList[i].imagePath === newProduct[0].imagePath) {
              let userProducts = firebase.database().ref('users/' + userId + '/' + i);
              userProducts.once("value", (snap) => {
                let countResult = snap.val();
                let payload = {
                  count: countResult.count + 1
                }
                userProducts.update(payload)
              });
            }
          }
        } else {
          let newList = oldList.concat(newProduct);
          firebase
            .database()
            .ref("users")
            .child(state.user.uid)
            .set(newList)
        }
      }
    },

    
    addProductDetail({ state }) {
      firebase
        .database()
        .ref("users")
        .child(state.user.uid)
        .push(state.currentProduct);
    },

    getUserList({ state, commit }) {
      return firebase
        .database()
        .ref('users/' + state.user.uid)
        .on('value', snapshot => {
          commit('setUserList', snapshot.val());
          commit('setLoading', false)
        })
    },

    getAllProduct({ state, commit }) {
      if (state.tag.length >= 1) {
        let result = [];
        state.allProduct.forEach((e) => {
          if (state.tag.every(element => {
            return e.tag.includes(element);
          })) {
            result.push(e);
          }
        })
        commit('setAllProduct', result);
      } else {
        return firebase
          .database()
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            commit('setAllProduct', allProduct);
          })
      }
    },

    searchlProduct({ state, commit, dispatch }) {
      let search = [];
      if (state.search !== "") {
        state.allProduct.forEach((e) => {
          if (e.productId === state.search) {
            search.push(e);
            commit('setAllProduct', search)
          }
        })
      } else {
        dispatch("getAllProduct")
      }
    },

    deleteProduct({ state }, { index }) {
      state.userList.splice(index, 1);
      firebase
        .database()
        .ref("users")
        .child(state.user.uid)
        .set(state.userList)
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
      router.push({ name: "productdetail", params: { id: index } })
    },

    setCurrentProduct({ commit }) {
      const id = router.currentRoute.params.id;
      let productId = id;
      return firebase
        .database()
        .ref('productList/' + '0' + '/' + productId)
        .on('value', snapshot => {
          commit('setCurrentProduct', snapshot.val());
        })
    },

    getOrderHistory({ state, commit }) {
      return firebase
        .database()
        .ref('history/' + state.user.uid)
        .on('value', snapshot => {
          commit('setOrderHistory', snapshot.val());
        })
    },

    confirmOrder({ state }) {
      if (state.orderHistory != null) {
        let newHistroy = state.orderHistory.concat(state.userList);
        firebase
          .database()
          .ref("history")
          .child(state.user.uid)
          .set(newHistroy)

        let userId = firebase.auth().currentUser.uid
        let userProducts = firebase.database().ref('users/' + userId)
        userProducts.remove();
        router.push({ name: "orderhistory" })
      } else {
        firebase
          .database()
          .ref("history")
          .child(state.user.uid)
          .set(state.userList)
        let userId = firebase.auth().currentUser.uid
        let userProducts = firebase.database().ref('users/' + userId)
        userProducts.remove();
        router.push({ name: "orderhistory" })
      }
    },

    clearHistory() {
      let userId = firebase.auth().currentUser.uid
      let userProducts = firebase.database().ref('history/' + userId)
      userProducts.remove();
    },

    bigToSmall({ state }) {
      state.allProduct.sort((a, b) => {
        return b.price - a.price;
      })
    },

    smallToBig({ state }) {
      state.allProduct.sort((a, b) => {
        return a.price - b.price;
      })
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
    shoppingCount(state) {
      if (state.userList) {
        let obj = Object.keys(state.userList).map(function (_) { return state.userList[_]; });
        let shoppingCount = obj.length;
        return shoppingCount;
      }
    },
    tempUserList(state) {
      if (state.userList === null) {
        let tempUserList = [0]
        return tempUserList
      } else {
        let obj = Object.keys(state.userList).map(function (_) { return state.userList[_]; });
        return obj;
      }
    }
  },
})