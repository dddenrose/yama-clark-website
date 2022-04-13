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
          <a href="#">Men's Watches</a>
          <a href="#">Ladies' Watches</a>
          <a href="#">New Releases</a>
          <a href="#">Accessories</a>
          <a href="#">Other</a>
        </div>
        <!-- <div class="trending-products">
          <div class="total-container">
            <div
              class="product-bar"
              v-for="(product, index) in webProductList"
              :key="index"
            >
              <div class="product">
                <router-link :to="{ name: 'productdetail' }" class="image-box">
                  <img v-bind:src="product.imagePath" alt="prodcut" />
                  <div class="hover-box">
                    <router-link class="info" :to="{ name: 'shoppinglist' }">
                      ADD TO CART <i class="fas fa-shopping-cart"></i>
                    </router-link>
                  </div>
                </router-link>
                <div class="info">
                  <h2>{{ product.series }}</h2>
                  <h3 class="name">{{ product.seriesName }}</h3>
                  <h3>{{ product.color }}</h3>
                  <h3>{{ product.price }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="trending-products">
          <div class="total-container">
            <div
              class="product-bar"
              v-for="(product, index) in webProductList"
              :key="index"
            >
              <div class="product">
                <div class="image-box">
                  <img v-bind:src="product.imagePath" alt="prodcut" />
                  <div class="hover-box">
                    <button @click="addProduct(product, index)">ADD TO CART</button>
                  </div>
                </div>
                <div class="info">
                  <h2>{{ product.series }}</h2>
                  <h3 class="name">{{ product.seriesName }}</h3>
                  <h3>{{ product.color }}</h3>
                  <h3>{{ product.price }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features/>
    </div>
    <Footer />
    <Pavement />
    <Gotop />

  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import Gotop from "../components/Gotop.vue";
import TopNav from "../components/TopNav.vue";
import Footer from "../components/Footer.vue";
import Pavement from "../components/Pavement.vue";
import Logo from "../components/Logo.vue";
import Features from "../components/Features.vue";
import { mapActions} from "vuex";


export default {
  data() {
    return {
      webProductList: [],
    };
  },
  mounted() {
    const firebaseConfig = {
      apiKey: "AIzaSyAbYLUVJYoITGNvgeEJiLWKwlvEZEgsn7M",
      authDomain: "yama-website.firebaseapp.com",
      databaseURL: "https://yama-website-default-rtdb.firebaseio.com",
      projectId: "yama-website",
      storageBucket: "yama-website.appspot.com",
      messagingSenderId: "1094650287749",
      appId: "1:1094650287749:web:b011ea45db8ec625e5bbec",
      measurementId: "G-6TTRYFGB6X",
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const starCountRef = ref(database, "/");
    this.ref = starCountRef;
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.webProductList = data.productList[0];
    });

    this.authAction();

  },
  methods: {
        ...mapActions(["addProduct","authAction"]),
  },

  computed: {
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    }
  },

  components: {
    Gotop,
    TopNav,
    Footer,
    Pavement,
    Logo,
    Features,
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

      a {
        line-height: 2;
        font-size: 14px;
        border: 1px solid $brand-color;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: $brand-color;

        padding-bottom: 5%;
        box-sizing: border-box;
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
      width: 80%;
      flex-direction: column;
    }
    .left-info {
      text-align: center;
      align-items: center;
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
        width: 70%;
      }
      .right-list {
        width: 70%;
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
