<template>
  <div class="top-bar">
    <div class="bar-1">
      <router-link class="shopping" :to="{ name: 'shoppinglist' }"
        >shopping list <i class="fas fa-shopping-cart"></i
      ></router-link>
      <router-link :to="{ name: 'homerun' }">home</router-link>
      <router-link :to="{ name: 'productlist' }">productlist</router-link>
      <div class="social-media">
        <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
        <a class="icon" href="#"><i class="fab fa-instagram-square"></i></a>
        <a class="icon" href="#"><i class="fab fa-twitter-square"></i></a>
        <a class="icon" href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    <div class="bar-2" v-if="isUserAuth">
      <button @click="signOutAction" class="login">logout</button>
    </div>
    <div class="bar-2" v-if="!isUserAuth">
      <router-link :to="{ name: 'signup' }">SIGN UP</router-link>
      <router-link :to="{ name: 'login' }" class="login">login</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions(["signOutAction"]),
  },

  computed: {
    ...mapGetters(["isUserAuth"]),
  },
};
</script>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.top-bar {
  display: flex;
  padding: 15px 0;
  flex: 1;
  background-color: $brand-color;

  text-decoration: none;
  align-items: center;

  .bar-1 {
    flex: 1;
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

  .bar-2 {
    .login {
      color: $brand-color;
      margin-right: 50px;
      text-transform: uppercase;
      font-size: 12px;
      background-color: white;
      padding: 5px 10px;
      border-radius: 20px;
    }
    button {
      border: none;
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    margin: 10px;
    letter-spacing: 1px;
  }
  a.icon {
    margin: 5px;
    font-size: 14px;
  }
}

@media screen and (max-width: 700px) {
  .nav {
    .top-bar {
      align-items: flex-start;
      .bar-1 {
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        align-items: flex-start;
        a {
          margin: 5px 0;
          border-bottom: 1px solid white;
          padding-bottom: 2px;
        }
        svg {
          margin-right: 5px;
        }
      }
      .bar-2 {
        height: 15px;
        margin-right: 5%;
        align-items: flex-start;
      }
    }
  }
}
</style>