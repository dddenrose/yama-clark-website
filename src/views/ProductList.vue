<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <TopNav />
          <Logo />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="left-info">
          <div class="left-title">COLLECTIONS</div>
          <div class="tag">
            <h4 class="title top">men's / ladyies' watch</h4>
            <label>
              <input
                type="checkbox"
                value="Man"
                v-model="tag"
                @change="getAllProduct()"
              />
              Man
            </label>
            <label>
              <input
                type="checkbox"
                value="Lady"
                v-model="tag"
                @change="getAllProduct()"
              />
              Lady
            </label>
          </div>
          <div class="tag">
            <h4 class="title">material</h4>
            <label>
              <input
                type="checkbox"
                value="Steel"
                v-model="tag"
                @change="getAllProduct()"
              />
              Steel
            </label>
            <label>
              <input
                type="checkbox"
                value="Leather"
                v-model="tag"
                @change="getAllProduct()"
              />
              Leather
            </label>
          </div>
          <div class="tag">
            <h4 class="title">category</h4>
            <label>
              <input
                type="checkbox"
                value="Best-selling"
                v-model="tag"
                @change="getAllProduct()"
              />
              Best-selling
            </label>

            <label>
              <input
                type="checkbox"
                value="Classic"
                v-model="tag"
                @change="getAllProduct()"
              />
              Classic
            </label>
            <label>
              <input
                type="checkbox"
                value="Casual"
                v-model="tag"
                @change="getAllProduct()"
              />
              Casual
            </label>
            <label>
              <input
                type="checkbox"
                value="Elegant"
                v-model="tag"
                @change="getAllProduct()"
              />
              Elegant
            </label>
          </div>
          <div class="tag">
            <h4 class="title">price</h4>
            <label>
              <input type="checkbox" @change="smallToBig()" /> Price from small
              to big
            </label>
            <label>
              <input type="checkbox" @change="bigToSmall()" /> Price from big to
              small
            </label>
          </div>
          <div class="tag">
            <label class="title">
              Search Product :
              <input
                type="text"
                v-model="search"
                @input="searchlProduct()"
                placeholder="ex: YM001"
                class="search"
              />
            </label>
          </div>
        </div>
        <div class="trending-products">
          <div class="total-container">
            <div
              class="product-bar"
              v-for="(product, index) in allProduct"
              :key="index"
            >
              <div class="product">
                <div class="image-box">
                  <img v-bind:src="product.imagePath" alt="prodcut" />
                  <div class="hover-box">
                    <button
                      @click="addProduct({ product: product, index: index })"
                    >
                      ADD TO CART <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button
                      @click="routerToDetail({ index })"
                      class="information"
                    >
                      MORE INFORMATION
                    </button>
                  </div>
                </div>
                <div class="info">
                  <h2>{{ product.series }}</h2>
                  <h3 class="name">{{ product.seriesName }}</h3>
                  <h3>{{ product.color }}</h3>
                  <h3>${{ product.price }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
    <Chat />
    <Footer />
    <Pavement />
    <Gotop />
  </div>
</template>

<script>
import Gotop from "../components/Gotop.vue";
import TopNav from "../components/TopNav.vue";
import Footer from "../components/Footer.vue";
import Pavement from "../components/Pavement.vue";
import Logo from "../components/Logo.vue";
import Features from "../components/Features.vue";
import Chat from "../components/Chat.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    this.toTop();
  },
  methods: {
    ...mapActions([
      "addProduct",
      "routerToDetail",
      "getAllProduct",
      "searchlProduct",
      "smallToBig",
      "bigToSmall",
    ]),
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
  },
  computed: {
    ...mapState(["allProduct", ]),

    tag: {
      get() {
        return this.$store.state.tag;
      },
      set(value) {
        console.log(value);
        this.$store.commit("setTag", value);
      },
    },
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value);
      },
    },
  },

  components: {
    Gotop,
    TopNav,
    Footer,
    Pavement,
    Logo,
    Features,
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

img {
  vertical-align: top;
}

ul {
  list-style-type: none;
  padding: 0;
}

//content

.spinner {
  position: relative;
  top: 30vh;
  right: 50vw;
}

.content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    display: flex;
    width: 70%;
  }
}

.features {
  margin-bottom: 60px;
}

.total-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  display: flex;
  flex-direction: column;

  color: $brand-color;
  padding-bottom: 10px;
  line-height: 1.5;
  font-size: 1px;
  letter-spacing: 1px;
  color: $gray-color;
  h4 {
    text-transform: uppercase;
    font-weight: 100;
    color: $brand-color;
    border-bottom: 1px solid $brand-color;
    padding-bottom: 5px;
    margin-bottom: 5px;
    &.top {
      margin-top: 10px;
    }
  }
  .search {
    height: 30px;
    box-sizing: border-box;
    padding: 5px;
  }
}

.left-info {
  display: flex;
  text-align: left;
  flex-direction: column;
  .left-title {
    color: $brand-color;
    border-bottom: 1px solid $brand-color;
    width: 200px;
    padding-bottom: 10px;
    letter-spacing: 1px;
  }
  a {
    font-weight: 100;
    color: $brand-color;
    text-decoration: none;
    margin: 5px 0;
    font-size: 14px;
    letter-spacing: 1px;
  }
}


.trending-products {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 0;
  }

  .title {
    &.topic {
      display: flex;
      .line {
        position: relative;
        top: 20px;
        width: 350px;
        border-top: 1px solid $brand-color;
      }

      .info {
        margin: 0 50px;
      }

      h2 {
        font-weight: 100;
        font-size: 18px;
        letter-spacing: 2px;
        color: $brand-color;
      }

      h4 {
        font-weight: 100;
        letter-spacing: 0.5px;
        font-size: 10px;
        margin-top: 10px;
        color: $gray-color;
      }
    }
  }
  .product-bar {
    display: flex;
    margin-bottom: 60px;
    justify-content: space-around;
    flex-wrap: wrap;
    .product {
      display: flex;
      flex-direction: column;
      width: 200px;
      padding: 0 60px;
    }
    .image-box {
      flex: 6 1 250px;
      position: relative;
    }
    img {
      width: 100%;
      &.top {
        position: relative;
        bottom: 15px;
      }
    }
    .info {
      flex: 4 1 0;
      h2 {
        font-weight: 100;
        box-sizing: border-box;
        padding-bottom: 5px;
        color: $brand-color;
        border-bottom: 1px solid $brand-color;
      }
      h3 {
        font-weight: 100;
        font-size: 10px;
        margin: 5px 0;
      }
      .name {
        margin-top: 10px;
        color: $brand-color;
      }
    }
    .hover-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($color: white, $alpha: 0.8);
      opacity: 0;
      transition: 0.3s ease-in;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .information {
        text-decoration: none;
        color: grey;
        font-size: 12px;
        margin-top: 10px;
        letter-spacing: 1px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        line-height: 1.5;
        border: 1px solid $brand-color;
        background-color: rgba(255, 255, 255, 0.1);
        color: $brand-color;
        padding: 10px;
        border-radius: 30px;
        cursor: pointer;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}

//RWD
@media screen and (max-width: 1100px) {
  .content {
    .container {
      width: 80vw;
      flex-direction: column;
    }
    .left-info {
      text-align: center;
      align-items: center;
      &:hover {
        .tag {
          display: block;
        }
      }
    }

    .left-title {
      width: 30vw;
    }

    .tag {
      width: 30vw;
      display: none;
    }

    .trending-products {
      .product-bar {
        .product {
          padding: 0 30px;
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
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

  .footer {
    padding: 50px 0;
    .container {
      display: flex;
      align-items: flex-start;

      .information {
        flex: 1 1 0;
        .info {
          display: none;
          img {
            width: 60px;
          }
          &.logo {
            display: flex;
          }
          h4 {
            width: 100%;
          }
        }
      }

      .bottom-word {
        display: flex;
        width: 100%;
        margin: 0;
        flex: 3 1 0;
      }
    }
  }
}
</style>
