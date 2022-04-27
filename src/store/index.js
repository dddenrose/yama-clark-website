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
    tagPrdocut: [],
    currentProduct: [],
    orderHistory: [],
    loading: false,
    tag: [],
    search: [],
    chat: [],
    chatList: [],
    showChat: false,
    chatError: null,
    bigToSmall: false,
    showNav: false,
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
    },
    setChat(state, payload) {
      state.chat = payload;
    },
    setChatList(state, payload) {
      state.chatList = payload;
    },
    setShowChat(state, payload) {
      state.showChat = payload;
    },
    setChatError(state, payload) {
      state.chatError = payload;
    },
    setTagPrdocut(state, payload) {
      state.tagPrdocut = payload;
    },
    setBigToSmall(state, payload) {
      state.bigToSmall = payload;
    },
    setShowNav(state, payload) {
      state.showNav = payload;
    },
  },

  actions: {
    authAction({ commit, dispatch }) {
      commit('setLoading', true)
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setUser", user);
          dispatch('getUserList');
          dispatch('getOrderHistory');
          dispatch('getChat');
          commit("setChatError", null)
        } else {
          commit("setUser", null);
          commit("setUserList", null)
          commit('setLoading', false)
          commit('setChatList', [])
          commit('setShowChat', false)
        }
      });
    },

    signUpAction({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          router.push({ name: "profile" })
        })
        .catch(error => {
          alert(error)
          commit("setError", error.message);
        });
    },

    signInAction({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          router.push({ name: "profile" })
        })
        .catch(error => {
          commit("setError", error.message);
          alert(error.message)
        });
    },

    signOutAction({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setShowNav", false);
          alert("You have already logout.");
          router.push({ name: "homerun" }).catch(() => { });
        })
        .catch(error => {
          commit("setError", error.message);
        });
    },

    forgetPassword({ payload }) {
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(() => {
          alert('Check your registered email to reset the password!')
        }).catch((error) => {
          alert(error)
        })
    },

    addProduct({ state }, { product }) {
      if (state.user) {
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

      } else {
        alert("You can continue to shop after login.")
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
        firebase
          .database()
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            allProduct.forEach((e) => {
              if (state.tag.every(element => {
                return e.tag.includes(element);
              })) {
                result.push(e);
              }
            })
            commit('setAllProduct', result);
          })
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

    // searchlProduct({ state, commit, dispatch }) {
    //   let search = [];
    //   if (state.search !== "") {
    //     state.allProduct.forEach((e) => {
    //       if (e.productId === state.search) {
    //         search.push(e);
    //         commit('setAllProduct', search)
    //       }
    //     })
    //   } else {
    //     dispatch("getAllProduct")
    //   }
    // },

    searchlProduct({ state, commit }) {
      let result = [];
      if (state.search !== "") {
        firebase
          .database()
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            allProduct.forEach((e) => {
              if (e.tag.toLowerCase().includes(state.search.toLowerCase())) {
                result.push(e);
              }
            })
            commit('setAllProduct', result);
          })
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

    routerToDetail({ state, dispatch }, { index }) {
      let name = router.currentRoute.name;
      if (name != "productlist" && name != "shoppinglist" && name != "orderlist" && name != "homerun") {
        if (state.currentProduct.productId != index) {
          router.push({ name: "productdetail", params: { id: index } })
          dispatch("setCurrentProduct")
        }
      } else {
        router.push({ name: "productdetail", params: { id: index } })
        dispatch("setCurrentProduct")
      }
    },

    setCurrentProduct({ commit }) {
      const id = router.currentRoute.params.id;
      if (id) {
        return firebase
          .database()
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let list = Object.keys(snapshot.val()).map(function (_) { return snapshot.val()[_]; });
            list.forEach((e) => {
              if (e.productId === id) {
                commit('setCurrentProduct', e);
              }
            })
          })
      }
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

    bigToSmall({ state, commit }) {
      let result = !state.bigToSmall
      commit('setBigToSmall', result)

      if (state.bigToSmall) {
        firebase
          .database()
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            allProduct.sort((a, b) => {
              return b.price - a.price;
            })
            commit('setAllProduct', allProduct);
          })
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

    smallToBig({ state, commit }) {
      let result = !state.bigToSmall
      commit('setBigToSmall', result)

      if (state.bigToSmall) {
        firebase
          .database()
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            allProduct.sort((a, b) => {
              return a.price - b.price;
            })
            commit('setAllProduct', allProduct);
          })
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

    chatEnter({ state, commit }) {
      if (state.user) {
        let userId = firebase.auth().currentUser.uid
        let chatList = firebase.database().ref('chat/' + userId)
        const key = chatList.push().key;
        if (state.chat !== "")
          chatList.child(key).set({
            chat: state.chat,
            time: Date.now(),
          });
        state.chat = "";
      } else {
        commit('setChatError', "You have to login")
      }
    },

    getChat({ state, commit }) {
      return firebase
        .database()
        .ref('chat/' + state.user.uid)
        .on('value', snapshot => {
          if (snapshot.val()) {
            let result = Object.keys(snapshot.val()).map(function (_) { return snapshot.val()[_]; });
            result.reverse()
            commit('setChatList', result);
          }
        })
    },

    deleteChat({ commit }) {
      let userId = firebase.auth().currentUser.uid
      let chatList = firebase.database().ref('chat/' + userId)
      chatList.remove();
      commit('setChatList', [])
    }
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