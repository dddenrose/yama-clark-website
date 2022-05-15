import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
import { firebaseAuth, firebaseDb } from '../main.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    userList: [],
    localList: [],
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
    showNotice: false,
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
    setLocalList(state, payload) {
      state.localList = payload;
    }
  },

  actions: {
    authAction({ commit, dispatch }) {
      commit('setLoading', true)
      firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          commit("setUser", user);
          dispatch('getUserList');
          dispatch('getOrderHistory');
          dispatch('getChat');
          commit("setChatError", null)
        } else {
          commit("setUser", null);
          commit('setLoading', false)
          dispatch('getUserList');
          commit('setChatList', [])
          commit('setShowChat', false)
        }
      });
    },

    signUpAction({ commit }, payload) {
      firebaseAuth
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
      firebaseAuth
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
      firebaseAuth
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
      firebaseAuth
        .sendPasswordResetEmail(payload.email)
        .then(() => {
          alert('Check your registered email to reset the password!')
        }).catch((error) => {
          alert(error)
        })
    },

    addProduct({ state, commit, dispatch }, { product }) {
      if (state.user) {  //登入用戶購物車功能
        let newProduct = [];
        newProduct.push(product);
        let userId = firebaseAuth.currentUser.uid;

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
          firebaseDb
            .ref("users")
            .child(state.user.uid)
            .set(newProduct)
          dispatch('showNotice');
        } else {
          if (sameImage) {
            for (let i = 0; i < oldList.length; i++) {
              if (oldList[i].imagePath === newProduct[0].imagePath) {
                let userProducts = firebaseDb.ref('users/' + userId + '/' + i);
                userProducts.once("value", (snap) => {
                  let countResult = snap.val();
                  let payload = {
                    count: countResult.count + 1
                  }
                  userProducts.update(payload)
                });
                dispatch('showNotice');
              }
            }
          } else {
            let newList = oldList.concat(newProduct);
            firebaseDb
              .ref("users")
              .child(state.user.uid)
              .set(newList)
            dispatch('showNotice');
          }
        }
      } else { //一般訪客購物車功能
        let list = JSON.parse(localStorage.getItem('localList'));
        if (list) {
          let sameImage = false;
          let arrayIndex = 0;
          list.forEach((e, index) => {
            if (e.imagePath === product.imagePath) {
              sameImage = true;
              arrayIndex = index;
            }
          })
          if (sameImage) {
            list[arrayIndex].count++;
            localStorage.setItem('localList', JSON.stringify(list));
            commit('setUserList', list)
            dispatch('showNotice');
          } else {
            list.push(product);
            localStorage.setItem('localList', JSON.stringify(list));
            commit('setUserList', list)
            dispatch('showNotice');
          }
        } else {
          let newProduct = [];
          newProduct.push(product);
          localStorage.setItem('localList', JSON.stringify(newProduct));
          commit('setUserList', list)
          dispatch('showNotice');
        }
      }
    },

    showNotice({state}) {
      state.showNotice = true;
      setTimeout(() => {
        state.showNotice = false;
      },300)
    },

    addProductDetail({ state }) {
      firebaseDb
        .ref("users")
        .child(state.user.uid)
        .push(state.currentProduct);
    },

    getUserList({ state, commit }) {
      if (state.user) {
        return firebaseDb
          .ref('users/' + state.user.uid)
          .on('value', snapshot => {
            commit('setUserList', snapshot.val());
            commit('setLoading', false)
          })
      } else {
        let list = JSON.parse(localStorage.getItem('localList'));
        commit('setUserList', list);
      }
    },

    getAllProduct({ state, commit }) {
      if (state.tag.length >= 1) {
        let result = [];
        firebaseDb
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
        return firebaseDb
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            commit('setAllProduct', allProduct);
          })
      }
    },

    searchlProduct({ state, commit }) {
      let result = [];
      if (state.search !== "") {
        firebaseDb
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
        return firebaseDb
          .ref('productList/' + '0')
          .on('value', snapshot => {
            let obj = snapshot.val()
            let allProduct = Object.keys(obj).map(function (_) { return obj[_]; });
            commit('setAllProduct', allProduct);
          })
      }
    },

    deleteProduct({ state, commit }, { index }) {
      if (state.user) {
        state.userList.splice(index, 1);
        firebaseDb
          .ref("users")
          .child(state.user.uid)
          .set(state.userList)
      } else {
        let list = JSON.parse(localStorage.getItem('localList'));
        list.splice(index, 1);
        localStorage.setItem('localList', JSON.stringify(list));
        commit('setUserList', list);
      }
    },

    addCount({ state, commit }, { item, index }) {
      if (state.user) {
        let userId = firebaseAuth.currentUser.uid
        let userProducts = firebaseDb.ref('users/' + userId + '/' + index)
        let payload = {
          count: item.count + 1
        }
        userProducts.update(payload)

      } else {
        let list = JSON.parse(localStorage.getItem('localList'));
        list[index].count++;
        localStorage.setItem('localList', JSON.stringify(list));
        commit('setUserList', list);
      }
    },

    minusCount({ state, commit }, { item, index }) {
      if (state.user) {
        let userId = firebaseAuth.currentUser.uid
        let userProducts = firebaseDb.ref('users/' + userId + '/' + index)
        if (item.count >= 2) {
          let payload = {
            count: item.count - 1
          }
          userProducts.update(payload)
        }
      } else {
        let list = JSON.parse(localStorage.getItem('localList'));
        if (list[index].count >= 2) {
          list[index].count--;
        }
        localStorage.setItem('localList', JSON.stringify(list));
        commit('setUserList', list);
      }
    },

    routerToDetail({ dispatch }, { index }) {
      router.push({ name: "productdetail", params: { id: index } })
      dispatch("setCurrentProduct")
    },

    setCurrentProduct({ commit }) {
      const id = router.currentRoute.params.id;
      if (id) {
        return firebaseDb
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
      return firebaseDb
        .ref('history/' + state.user.uid)
        .on('value', snapshot => {
          commit('setOrderHistory', snapshot.val());
        })
    },

    confirmOrder({ state, commit }) {
      if (state.user) {
        if (state.orderHistory != null) {
          let newHistroy = state.orderHistory.concat(state.userList);
          firebaseDb
            .ref("history")
            .child(state.user.uid)
            .set(newHistroy)
  
          let userId = firebaseAuth.currentUser.uid
          let userProducts = firebaseDb.ref('users/' + userId)
          userProducts.remove();
          router.push({ name: "orderhistory" })
        } else {
          firebaseDb
            .ref("history")
            .child(state.user.uid)
            .set(state.userList)
          let userId = firebaseAuth.currentUser.uid
          let userProducts = firebaseDb.ref('users/' + userId)
          userProducts.remove();
          router.push({ name: "orderhistory" })
        }
      } else {
        localStorage.removeItem('localList')
        commit('setUserList', null)
        router.push({ name: "homerun" })
      }
    },

    clearHistory() {
      let userId = firebaseAuth.currentUser.uid
      let userProducts = firebaseDb.ref('history/' + userId)
      userProducts.remove();
    },

    bigToSmall({ state, commit }) {
      let result = !state.bigToSmall
      commit('setBigToSmall', result)

      if (state.bigToSmall) {
        firebaseDb
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
        return firebaseDb
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
        firebaseDb
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
        return firebaseDb
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
        let userId = firebaseAuth.currentUser.uid
        let chatList = firebaseDb.ref('chat/' + userId)
        const key = chatList.push().key;
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
      return firebaseDb
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
      let userId = firebaseAuth.currentUser.uid
      let chatList = firebaseDb.ref('chat/' + userId)
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