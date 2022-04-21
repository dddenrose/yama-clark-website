<template>
  <div class="top-bar">
    <div class="bar-1">
      <div class="shopping">
        <router-link class="list" :to="{ name: 'shoppinglist' }"
          >shopping list <i class="fas fa-shopping-cart"></i>
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
              <img v-bind:src="item.imagePath" alt="product" />
              <div class="name">
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
        </div>
      </div>
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
      <router-link :to="{ name: 'profile' }" class="profile"
        >PROFILE</router-link
      >
      <button @click="signOutAction" class="login">logout</button>
    </div>
    <div class="bar-2" v-if="!isUserAuth">
      <router-link :to="{ name: 'signup' }" class="profile"
        >SIGN UP</router-link
      >
      <router-link :to="{ name: 'login' }" class="login">login</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
// import Loading from "../components/Loading.vue";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions(["signOutAction", "deleteProduct"]),
  },

  computed: {
    ...mapState(["userList"]),
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

.lists {
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
    }
    .name {
      flex: 3 1 0;
      color: $brand-color;
      margin-left: 10px;
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
      font-size: 9px;
      margin-right: 5px;
    }
  }
}

.top-bar {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
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

    .list {
      display: flex;
    }
    a.shopping {
      display: flex;
    }
    .shopping {
      svg {
        margin-left: 5px;
      }
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

  .bar-2 {
    margin-right: 50px;

    .login {
      color: $brand-color;
      text-transform: uppercase;
      font-size: 12px;
      background-color: white;
      padding: 5px 10px;
      border-radius: 20px;
      letter-spacing: 1px;
      margin-left: 5px;
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
    }
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
        display: flex;
        flex-direction: column;
        text-align: right;
        align-items: center;
        .login {
          margin-left: 0px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>