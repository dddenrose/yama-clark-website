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
      <div class="shop-title">SHOPPING LIST</div>
      <Features />

      <div class="main-list">
        <div class="container">
          <div class="top-info">
            <h3 class="product">product</h3>
            <h3 class="count">count</h3>
            <h3 class="price">price</h3>
          </div>
          <div class="lists">
            <!-- <div
              class="selling-product"
              v-for="(product, index) in webProductList"
              :key="index"
            >
              <img v-bind:src="product.img" alt="product" />
              <h3>
                {{ product.productName }}
              </h3>
              <div class="count">
                <div class="counting">
                  <button @click="add(product)">+</button>
                  <span> {{ product.count }} </span>
                  <button @click="minus(product)">-</button>
                </div>
                <button @click="delet">DELET</button>
              </div>
              <div class="price">
                ${{ product.price * product.count }}
              </div>
            </div> -->

            <div
              class="selling-product"
              v-for="(item, index) in userList"
              :key="index"
            >
              <img v-bind:src="item.imagePath" alt="product" />
              <h3>
                {{ item.seriesName }}
              </h3>
              <div class="count">
                <div class="counting">
                  <button @click="add(item)">+</button>
                  <span> {{ item.series }} </span>
                  <button @click="minus(item)">-</button>
                </div>
                <button @click="delet">DELET</button>
              </div>
              <div class="price">
                ${{ item.price}}
              </div>
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
              <div class="coupon">
                <h3 class="left-title">coupon</h3>
                <h3 class="price gold">-$0</h3>
              </div>
              <div class="price-title">
                <h3 class="left-title">price</h3>
                <h3 class="price"> ${{ totalPrice }} </h3>
              </div>
              <router-link class="confirm" :to="{ name: 'orderlist' }"
                >confirm</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Pavement />
    <Gotop />
  </div>
</template>

<script>
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
import Gotop from "../components/Gotop.vue";
import TopNav from "../components/TopNav.vue";
import Footer from "../components/Footer.vue";
import Pavement from "../components/Pavement.vue";
import Logo from "../components/Logo.vue";
import Features from "../components/Features.vue";
import { mapActions } from "vuex";


export default {
  data() {
    return {
      webProductList: [],
    };
  },
  mounted() {
    // const firebaseConfig = {
    //   apiKey: "AIzaSyAbYLUVJYoITGNvgeEJiLWKwlvEZEgsn7M",
    //   authDomain: "yama-website.firebaseapp.com",
    //   databaseURL: "https://yama-website-default-rtdb.firebaseio.com",
    //   projectId: "yama-website",
    //   storageBucket: "yama-website.appspot.com",
    //   messagingSenderId: "1094650287749",
    //   appId: "1:1094650287749:web:b011ea45db8ec625e5bbec",
    //   measurementId: "G-6TTRYFGB6X",
    // };
    // const app = initializeApp(firebaseConfig);
    // const database = getDatabase(app);
    // const starCountRef = ref(database, "/");
    // this.ref = starCountRef;
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   this.webProductList = data.userList[0].cart;
    // });

    this.authAction()
  },

  methods: {
    ...mapActions(["authAction","getUserList"]),
    add: function(product) {
      product.count++;
    },
    minus: function(product) {
      if (product.count > 1) {
        product.count--;
      }
    },
    delet: function(index) {
      this.webProductList.splice(index,1);
    },
  },
  computed: {
    userList() {
      return this.$store.state.userList;
    },

    totalPrice: function() {
      let result = 0;
      this.webProductList.forEach(element => {
        result += element.price * element.count;
      });
      return result;
    },
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
      text-align: left;
      font-size: 12px;
      font-weight: 100;
    }
    h3.price {
      flex: 1 1 0;
      font-size: 12px;
      font-weight: 100;
      text-align: left;
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
      text-align: left;
      flex-direction: column;
      a {
        display: block;
        text-decoration: none;
        color: gray;
        margin: 18px 0 0 18px;
        font-size: 10px;
      }
    }
    .counting {
      padding: 10px 20px;
      display: inline-block;
      border: 1px solid #d1d1d1;
      color: #d1d1d1;
    }
    .price {
      flex: 1 1 0;
      text-align: left;
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
    display: inline-block;
    text-decoration: none;
    color: white;
    background-color: #c0b094;
    padding: 10px 15px;
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
        width: 70%;
      }
      .right-list {
        width: 70%;
      }
    }
  }

}
</style>
