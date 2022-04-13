import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    userList: [],
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

    addProduct({state}, payload) {
      firebase
      .database()
      .ref("users")
      .child(state.user.uid)
      .push(payload);
      console.log(payload);
    },

    getUserList({ state, commit }) {
      return firebase
      .database()
      .ref('users/' + state.user.uid)
      .on('value', snapshot => {
        commit('setUserList', snapshot.val());
      })
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
    }
  },
})