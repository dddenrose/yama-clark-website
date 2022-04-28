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
      <div class="shop-title">SHOPPING LIST</div>
      <Features />
      <div class="main-list">
        <div class="container">
          <div class="top-info">
            <h3 class="product">product</h3>
            <h3 class="count">count</h3>
            <h3 class="price">price</h3>
          </div>
          <Loading v-if="loading" />
          <div class="error" v-if="userList === null">
            <p>{{ error }}</p>
            <router-link :to="{ name: 'productlist' }"
              >Go to productlist</router-link
            >
          </div>
          <div class="lists" v-if="userList !== null">
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
                <h3 class="id">ProductId: {{ item.productId }}</h3>
              </div>
              <div class="count">
                <div class="counting">
                  <button @click="minusCount({ item: item, index: index })">
                    -
                  </button>
                  <span> {{ item.count }} </span>
                  <button @click="addCount({ item: item, index: index })">
                    +
                  </button>
                </div>
                <button @click="deleteProduct({ item: item, index: index })">
                  DELET
                </button>
              </div>
              <div class="price">${{ item.price * item.count }}</div>
            </div>
          </div>
          <div class="pavement">
            <div class="title">
              PAVEMENT
              <div class="pay">
                <div class="card"><i class="fab fa-cc-visa"></i></div>
                <div class="card"><i class="fab fa-cc-mastercard"></i></div>
                <div class="card"><i class="fab fa-cc-jcb"></i></div>
                <div class="card"><i class="fab fa-cc-paypal"></i></div>
                <div class="card"><i class="fab fa-cc-apple-pay"></i></div>
                <div class="card"><i class="fab fa-cc-amazon-pay"></i></div>
              </div>
            </div>
            <div class="price-detail">
              <div class="total">
                <h3 class="left-title">total</h3>
                <h3 class="price">${{ totalPrice }}</h3>
              </div>
              <button class="confirm" @click="goToOrderList">confirm</button>
            </div>
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
      error: "There is no products",
    };
  },

  methods: {
    ...mapActions([
      "getUserList",
      "deleteProduct",
      "addCount",
      "minusCount",
      "routerToDetail",
    ]),
    ...mapMutations(["setShowNav"]),
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
    goToOrderList: function () {
      if (this.$store.state.userList !== null) {
        this.$router.push({ name: "orderlist" });
      } else {
        alert("There is no product.")
      }
    },
  },

  computed: {
    ...mapState(["userList", "user", "loading"]),
    ...mapGetters(["totalPrice"]),
  },
  mounted() {
    this.toTop();
    this.setShowNav(false);
  },
  components: {
    Gotop,
    TopNavOpacity,
    Footer,
    Pavement,
    Logo,
    Features,
    Loading,
    Chat,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//全域設定
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

img {
  vertical-align: top;
}

ul {
  list-style-type: none;
  padding: 0;
}

#top-bar {
  background-color: $brand-color;
}

// header

//content
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
  .error {
    font-size: 14px;
    margin-top: 30px;
    color: $gray-color;
    letter-spacing: 1px;
    line-height: 2;
    text-transform: uppercase;
    a {
      background-color: $brand-color;
      color: white;
      text-decoration: none;
      padding: 5px;
      border: 1px solid $brand-color;
    }
  }
  .container {
    width: 70vw;
  }
  .top-info {
    display: flex;
    text-transform: uppercase;
    border-bottom: 1px solid #d1d1d1;
    padding-bottom: 30px;
    h3.product {
      flex: 7 1 0;
      text-align: left;
      padding-left: 30px;
      font-weight: 100;
      font-size: 12px;
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
  .selling-product {
    display: flex;
    align-items: center;
    padding: 20px 0;

    img {
      height: 120px;
      flex: 2 1 0;
      object-fit: contain;
      cursor: pointer;
    }
    .name {
      flex: 5 1 0;
      cursor: pointer;
    }

    h3 {
      text-transform: uppercase;
      font-size: 12px;
      line-height: 2;
      font-weight: 100;
      text-align: left;
    }
    h3.id {
      color: rgb(182, 182, 182);
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

      button {
        width: 70px;
        border: none;
        color: white;
        background-color: #d1d1d1;
        border-radius: 10px;
        letter-spacing: 1px;
        cursor: pointer;
      }
    }
    .counting {
      display: flex;
      color: white;
      margin-bottom: 10px;

      span {
        color: black;
        font-size: 14px;
      }

      button {
        width: 15px;
        margin: 0 10px;
        background-color: $brand-color;
      }
    }
    .price {
      flex: 1 1 0;
      text-align: center;
      font-size: 9px;
    }
  }
}

.pavement {
  margin: 30px 0;
  display: flex;
  border-top: 1px solid #d1d1d1;
  padding-top: 30px;

  .title {
    padding-left: 30px;
    text-align: left;
    flex: 7 1 0;
    letter-spacing: 1px;
    font-size: 12px;
  }
  .price-detail {
    flex: 3 1 0;
    text-align: right;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    h3 {
      font-weight: 200;
      &.gold {
        color: $brand-color;
      }
      &.left-title {
        flex: 1;
        text-align: left;
      }
    }
  }
  .total {
    display: flex;
    margin-bottom: 10px;
  }
  .coupon {
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #d1d1d1;
    margin-bottom: 10px;
  }
  .price-title {
    display: flex;
    margin-bottom: 20px;
  }

  .confirm {
    color: white;
    background-color: #c0b094;
    padding: 10px 15px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
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
    .price-detail {
      margin-top: 10px;
    }
  }

  .main-list {
    .container {
      .left-info {
        width: 70vw;
      }
      .right-list {
        width: 70vw;
      }
    }
  }

  .pavement {
    span {
      margin-left: 0px;
      margin-top: 5px;
    }
  }
}
</style>
