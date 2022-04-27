<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <TopNavOpacity />
          <Logo />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="shop-title">ORDER HISTORY</div>
      <Features />
      <div class="main-list">
        <div class="container">
          <div class="intro" v-if="orderHistory">
            <h4>Thank you for your purchase.</h4>
            <h4>You can see your order history here.</h4>
          </div>
          <div class="intro" v-if="!orderHistory">
            <h4>There is no order history.</h4>
            <router-link :to="{ name: 'productlist' }"
              >Click here to product list.</router-link
            >
          </div>
          <div class="top-info">
            <div class="product">
              <h3>order history <i class="fas fa-clock"></i></h3>
            </div>
            <h3 class="count">count</h3>
            <h3 class="price">price</h3>
          </div>
          <Loading v-if="loading" />
          <div class="lists" v-if="orderHistory !== null">
            <div v-for="(item, index) in orderHistory" :key="index">
              <div v-if="index < loadCount" class="selling-product">
                <img v-bind:src="item.imagePath" alt="product" />
                <h3>
                  {{ item.seriesName }}
                </h3>
                <div class="count">
                  <div class="counting">
                    <span> {{ item.count }} pic</span>
                  </div>
                </div>
                <div class="price">${{ item.price * item.count }}</div>
              </div>
            </div>
          </div>
          <div class="load">
            <button
              @click="loadMore()"
              v-if="orderHistory !== null"
              class="load-button"
            >
              loading more
            </button>
          </div>
          <div class="pavement">
            <button @click="clearHistory()">clear all</button>
            <span>Click button to clean all order history.</span>
          </div>
        </div>
      </div>
    </div>
    <Chat />
    <Footer />
    <Pavement />
    <Gotop />
  </div>
</template>

<script>
import Gotop from "../components/Gotop.vue";
import TopNavOpacity from "../components/TopNavOpacity.vue";
import Footer from "../components/Footer.vue";
import Pavement from "../components/Pavement.vue";
import Logo from "../components/Logo.vue";
import Features from "../components/Features.vue";
import Loading from "../components/Loading.vue";
import Chat from "../components/Chat.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      loadCount: 3,
      show: true,
    };
  },

  methods: {
    loadMore() {
      this.loadCount = this.loadCount + 3;
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
    ...mapActions(["clearHistory"]),
    ...mapMutations(["setShowNav"])
  },

  mounted() {
    this.toTop();
    this.setShowNav(false);
  },

  computed: {
    // showProduct() {
    //   if (this.loadCount >= this.orderHistory.length) {
    //     this.show = false;
    //   }
    // },
    ...mapState(["orderHistory", "user", "loading"]),
    ...mapGetters(["totalPrice"]),
  },

  components: {
    Gotop,
    TopNavOpacity,
    Footer,
    Pavement,
    Logo,
    Features,
    Loading,
    Chat
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//全域設定
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

#top-bar {
  background-color: $brand-color;
}

img {
  vertical-align: top;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  background-color: $brand-color;
  color: white;
  padding: 10px 10px;
  cursor: pointer;
}

.load {
  display: flex;
}

.load-button {
  background-color: grey;
}

.content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.shop-title {
  letter-spacing: 2px;
  font-size: 12px;
  color: $brand-color;
  padding-bottom: 10px;
}

.main-list {
  margin-top: 60px;
  .container {
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .intro {
    width: 70vw;
    text-align: left;
    margin-bottom: 30px;
    color: grey;
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 1.5;
    a {
      text-decoration: none;
      color: grey;
      font-weight: bold;
    }
  }
  .top-info {
    display: flex;
    width: 70vw;
    text-transform: uppercase;
    border-bottom: 1px solid #d1d1d1;
    padding-bottom: 30px;
    .product {
      flex: 7 1 0;
      text-align: left;
      display: flex;
      color: $brand-color;
    }
    h3.count {
      flex: 2 1 0;
      text-align: center;
      font-size: 12px;
      font-weight: 100;
    }
    h3.price {
      flex: 1 1 0;
      font-size: 12px;
      font-weight: 100;
      text-align: center;
    }
  }
  .pay {
    margin-top: 10px;
    color: #d1d1d1;
    display: flex;
    text-align: left;
    font-size: 20px;
    .card {
      padding-right: 10px;
    }
  }
}

.lists {
  width: 70vw;
  .selling-product {
    display: flex;
    align-items: center;
    padding: 20px 0;
    img {
      height: 120px;
      flex: 2 1 0;
      object-fit: contain;
    }
    h3 {
      flex: 5 1 0;
      text-transform: uppercase;
      font-size: 12px;
      box-sizing: border-box;
      padding-right: 50px;
      line-height: 2;
      font-weight: 100;
      text-align: left;
    }
    .count {
      flex: 2 1 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      a {
        display: block;
        text-decoration: none;
        margin: 18px 0 0 18px;
        font-size: 10px;
      }
    }
    .counting {
      display: flex;
      color: white;

      span {
        color: black;
        font-size: 14px;
      }
    }
    .price {
      flex: 1 1 0;
      text-align: center;
      font-size: 14px;
    }
  }
}

.pavement {
  width: 70vw;
  margin: 30px 0;
  display: flex;
  border-top: 1px solid #d1d1d1;
  padding-top: 30px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;

    font-size: 12px;
    letter-spacing: 1px;
    color: grey;
  }
}

// RWD
@media screen and (max-width: 1100px) {
  .content {
    .main-list {
      display: flex;
      justify-content: center;
      .container {
        width: 70vw;
        .top-info {
          h3.product {
            padding-left: 0;
          }
        }
        .lists {
          .selling-product {
            h3 {
              padding-right: 0;
            }
          }
        }
        .pavement {
          .title {
            padding-left: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .pavement {
    flex-direction: column;
    align-items: flex-start;
    span {
      margin-left: 0px;
      margin-top: 5px;
    }
    .price-detail {
      margin-top: 10px;
    }
  }

  .main-list {
    .container {
      .left-info {
        width: 70%;
      }
      .right-list {
        width: 70%;
      }
    }
  }
}
</style>
