<template>
  <div
    class="top-bar"
    id="top-bar"
    :class="{ change_color: scrollPosition > 50 }"
  >
    <div class="bar-1">
      <div
        class="nav-bar main-bar"
        @click="setShowNav(true)"
        v-if="!showNav"
      ></div>
      <div class="logo">
        <router-link class="logo-box" :to="{ name: 'homerun' }"
          ><img src="../img/logo-w-2.png" alt="logo"
        /></router-link>
      </div>
      <transition>
        <div class="nav-bar-main" id="nav-bar-main" v-if="showNav">
          <div class="nav-bar" @click="setShowNav(false)"></div>
          <router-link class="list left-nav" :to="{ name: 'homerun' }"
            >home</router-link
          >
          <router-link class="list left-nav" :to="{ name: 'productlist' }"
            >product list</router-link
          >
          <router-link class="list left-nav" :to="{ name: 'shoppinglist' }"
            >shopping list</router-link
          >
          <router-link class="list left-nav" :to="{ name: 'orderhistory' }"
            >order history</router-link
          >
          <div class="line top"></div>
          <router-link class="list left-nav" :to="{ name: 'profile' }"
            >profile</router-link
          >
          <router-link
            v-if="user === null"
            class="list left-nav"
            :to="{ name: 'login' }"
            >login</router-link
          >
          <router-link
            v-if="user === null"
            class="list left-nav"
            :to="{ name: 'signup' }"
            >sign up</router-link
          >
          <button v-if="user !== null" @click="signOutAction" class="login">
            logout
          </button>
          <div class="line bottom"></div>
          <div class="social-media" id="social-media">
            <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fab fa-instagram-square"></i></a>
            <a class="icon" href="#"><i class="fab fa-twitter-square"></i></a>
            <a class="icon" href="#"><i class="fab fa-youtube"></i></a>
          </div>
          <div class="info">
            <h5>
              Lorem ipsum dolor <br />
              consectetur adipisicing elit.
            </h5>
          </div>
        </div>
      </transition>
    </div>

    <div class="bar-2" v-if="isUserAuth">
      <div class="shopping">
        <router-link class="list" :to="{ name: 'shoppinglist' }"
          ><i class="fas fa-shopping-cart"></i>
          <div class="circle-count" v-if="this.shoppingCount">
            <span> {{ shoppingCount }} </span>
          </div>
        </router-link>
        <div class="lists" v-if="userList">
          <h4 class="title">products</h4>
          <div class="product-main">
            <div
              class="selling-product"
              v-for="(item, index) in userList"
              :key="index"
            >
              <img
                @click="routerToDetail({ index: item.productId })"
                v-bind:src="item.imagePath"
                alt="product"
              />
              <div
                class="name"
                @click="routerToDetail({ index: item.productId })"
              >
                <h3>
                  {{ item.seriesName }}
                </h3>
              </div>
              <div class="count">
                <div class="counting">
                  <span> {{ item.count }} pic </span>
                </div>
                <button @click="deleteProduct({ item: item, index: index })">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div class="price">${{ item.price * item.count }}</div>
            </div>
          </div>
          <router-link class="bottom" :to="{ name: 'shoppinglist' }"
            >shopping list</router-link
          >
        </div>
      </div>
      <router-link :to="{ name: 'profile' }" class="profile"
        >PROFILE</router-link
      >
      <button @click="signOutAction" class="login">logout</button>
    </div>
    <div class="bar-2" v-if="!isUserAuth">
      <div class="shopping">
        <router-link class="list" :to="{ name: 'shoppinglist' }"
          ><i class="fas fa-shopping-cart"></i>
          <div class="circle-count" v-if="this.shoppingCount">
            <span> {{ shoppingCount }} </span>
          </div>
        </router-link>
        <div class="lists" v-if="userList">
          <h4 class="title">products</h4>
          <div class="product-main">
            <div
              class="selling-product"
              v-for="(item, index) in userList"
              :key="index"
            >
              <img
                @click="routerToDetail({ index: item.productId })"
                v-bind:src="item.imagePath"
                alt="product"
              />
              <div
                class="name"
                @click="routerToDetail({ index: item.productId })"
              >
                <h3>
                  {{ item.seriesName }}
                </h3>
              </div>
              <div class="count">
                <div class="counting">
                  <span> {{ item.count }} pic </span>
                </div>
                <button @click="deleteProduct({ item: item, index: index })">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div class="price">${{ item.price * item.count }}</div>
            </div>
          </div>
          <router-link class="bottom" :to="{ name: 'shoppinglist' }"
            >shopping list</router-link
          >
        </div>
      </div>
      <router-link :to="{ name: 'signup' }" class="profile"
        >SIGN UP</router-link
      >
      <router-link :to="{ name: 'login' }" class="login">login</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    ...mapActions(["signOutAction", "deleteProduct", "routerToDetail"]),
    ...mapMutations(["setShowNav"]),
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  computed: {
    ...mapState(["userList", "showNav", "user"]),
    ...mapGetters(["isUserAuth", "shoppingCount"]),
  },
  components: {
    // Loading,
  },
};
</script>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

img {
  vertical-align: top;
}

.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: all 0.5s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.v-enter-active {
  transition: all 0.5s;
}
.v-enter-to {
  opacity: 1;
}

a {
  text-decoration: none;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar {
  height: 6px; /* height of horizontal scrollbar ← You're missing this */
  width: 6px; /* width of vertical scrollbar */
}

.nav-bar {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  width: 30px;
  height: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

#nav-bar-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30vw;
  min-width: 450px;
  height: 100vh;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: $green-color;
  .nav-bar {
    margin-top: 23px;
    margin-bottom: 100px;
    margin-left: 50px;
  }

  a.list {
    margin-bottom: 10px;
    text-align: left;
    font-size: 30px;
    font-family: "newyork";
    letter-spacing: 3px;
    margin-left: 50px;
  }
  #social-media {
    margin-left: 50px;
    display: flex;
    a {
      padding: 0;
      margin: 0;
    }
    svg {
      margin: 0;
      margin-right: 20px;
      font-size: 20px;
    }
  }
}

.shopping {
  &:hover {
    .lists {
      max-height: 300px;
      max-width: 300px;
      opacity: 1;
      padding: 10px;
    }
    .title {
      display: flex;
    }
  }
}

.list {
  &.left-nav {
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    transition: all 0.3s;

    &:hover {
      border-bottom: 1px solid white;
    }
  }
}


.lists {
  right: 50px;
  top: 50px;
  opacity: 0;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0px;
  -webkit-transition: opacity 0.3s ease-in;
  transition: opacity 0.3s ease-in;
  max-height: 0;
  max-width: 0;

  .product-main {
    overflow: auto;
    height: 250px;
  }

  .title {
    display: none;
    border-bottom: 1px solid $brand-color;
    padding-bottom: 10px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: grey;
    text-align: left;
    margin-bottom: 5px;
  }

  .selling-product {
    display: flex;
    align-items: center;
    padding: 20px 0;

    img {
      height: 60px;
      flex: 2 1 0;
      object-fit: contain;
      cursor: pointer;
    }
    .name {
      flex: 3 1 0;
      color: $brand-color;
      margin-left: 10px;
      cursor: pointer;
    }

    h3 {
      text-transform: uppercase;
      font-size: 12px;
      line-height: 1.5;
      font-weight: 100;
      text-align: left;
    }
    h3.id {
      color: rgb(182, 182, 182);
    }
    .count {
      text-transform: uppercase;
      flex: 3 1 0;
      display: flex;
      text-align: center;
      align-items: center;

      button {
        width: 20px;
        border: none;
        background-color: white;
        border-radius: 10px;
        letter-spacing: 1px;
        cursor: pointer;
        svg {
          color: black;
        }
      }
    }
    .counting {
      display: flex;
      color: white;

      span {
        color: black;
        font-size: 12px;
      }
    }
    .price {
      flex: 1 1 0;
      text-align: center;
      font-size: 12px;
      margin-right: 5px;
    }
  }
}

.change_color {
  background-color: $brand-color;
}

.top-bar {
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  display: flex;
  flex: 1;
  text-decoration: none;
  align-items: center;
  transition: all 0.3s;

  .logo {
    img {
      width: 65px;
    }
  }

  .bar-1 {
    flex: 1;
    margin-left: 50px;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-size: 12px;
      margin-left: 10px;
      letter-spacing: 1px;
    }
    a.icon {
      margin: 5px;
      font-size: 14px;
    }
    .login {
      font-size: 30px;
      font-family: "newyork";
      letter-spacing: 3px;
      margin-left: 50px;
      color: $brand-color;
      text-transform: uppercase;
      padding: 5px 15px;
      background-color: white;
      border-radius: 30px;
      transition: all 0.3s;
      &:hover {
        background-color: $brand-color;
        color: white;
      }
    }
    button {
      border: none;
      cursor: pointer;
    }

    .line {
      border-top: 1px solid white;
      width: 100px;
      margin-left: 50px;
      &.top {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      &.bottom {
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }

    .info {
      font-family: "newyork";
      margin-top: 10px;
      text-align: left;
      margin-left: 50px;
      color: white;
      font-size: 12px;
      letter-spacing: 2px;
    }
  }

  .bar-2 {
    display: flex;
    flex: 1;
    align-items: center;
    margin-right: 50px;
    justify-content: flex-end;

    .list {
      display: flex;
    }

    .circle-count {
      position: relative;
      margin-left: 5px;
      width: 15px;
      height: 15px;
      background-color: white;
      border-radius: 10px;
    }

    span {
      color: $brand-color;
      font-size: 12px;
      position: relative;
      top: -2.5px;
    }

    a.shopping {
      display: flex;
    }
    .shopping {
      padding: 17px 0;
      svg {
        color: white;
        margin-left: 5px;
      }
    }

    .login {
      color: $brand-color;
      text-transform: uppercase;
      font-size: 12px;
      background-color: white;
      padding: 5px 10px;
      border-radius: 20px;
      letter-spacing: 1px;
      margin-left: 5px;
      transition: all 0.3s;
      &:hover {
        background-color: $green-color;
        color: white;
      }
    }
    button {
      border: none;
      cursor: pointer;
    }
    .profile {
      text-align: right;
      font-size: 12px;
      color: white;
      letter-spacing: 1px;
      text-decoration: none;
      margin-left: 10px;
    }
  }
}

#top-bar {
  a.bottom {
    display: none;
    border-top: 1px solid $brand-color;
    padding-top: 3px;
    margin: 0;
    margin-top: 5px;
    color: grey;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .shopping {
    &:hover {
      a.bottom {
        display: flex;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .top-bar {
    .bar-2 {
      display: none;
    }

    .logo {
      display: flex;
      justify-content: flex-end;
      margin-right: 50px;
      padding:9px 0;
    }
  }
}
</style>