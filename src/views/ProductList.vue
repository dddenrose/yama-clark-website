<template>
  <div class="hello">
    <slider
      class="rwd-bar"
      :width="300"
      format="full"
      direction="left"
      :opacity="0.6"
      :links="[
        { id: 1, text: `SHOPPING LIST`, url: '#' },
        { id: 2, text: `ABOUT US`, url: '#' },
        { id: 3, text: `CONTACT`, url: '#' },
        { id: 4, text: `MEN'S WATCHES`, url: '#' },
        { id: 5, text: `LADIES' WATCHES`, url: '#' },
        { id: 6, text: `NEW RELEASES`, url: '#' },
        { id: 7, text: `ACCESSORIES`, url: '#' },
      ]"
      :customStyles="{
        navMenu: { 'background-color': 'red' },
        navIcon: { color: 'red' },
      }"
    ></slider>
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <div class="top-bar">
            <div class="bar-1">
              <router-link class="shopping" :to="{ name: 'shoppinglist' }"
                >shopping list <i class="fas fa-shopping-cart"></i
              ></router-link>
              <a href="#">about us</a>
              <a href="#">contact</a>
              <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
              <a class="icon" href="#"
                ><i class="fab fa-instagram-square"></i
              ></a>
              <a class="icon" href="#"><i class="fab fa-twitter-square"></i></a>
              <a class="icon" href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="bar-2">login</div>
          </div>
          <div class="logo">
            <div class="line"></div>
            <div class="logo-box">
              <img src="../img/logo.png" alt="logo" style="width: 100px" />
            </div>
          </div>
          
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
        <div class="trending-products">
          <div class="total-container">
            <div
              class="product-bar"
              v-for="(product, index) in webProductList"
              :key="index"
            >
              <div class="product">
                <a href="#" class="image-box">
                  <img v-bind:src="product.imagePath" alt="prodcut" />
                </a>
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
      <div class="features">
        <div class="goods">
          <i class="fas fa-globe-americas"></i>global delivery free
        </div>
        <div class="goods"><i class="fas fa-user-shield"></i>warranty free</div>
        <div class="goods">
          <i class="fas fa-glass-martini"></i>traditional skills
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="information">
          <div class="info logo">
            <img src="../img/logo-w.png" alt="logo" />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          </div>
          <div class="info">
            <div class="footer-title">COLLECTIONS</div>
            <a href="#">Men's Watches</a>
            <a href="#">Ladies' Watches</a>
            <a href="#">New Releases</a>
          </div>
          <div class="info">
            <div class="footer-title">FOLLOW US</div>
            <a href="#">Beginnings</a>
            <a href="#">British Wachmaking</a>
            <a href="#">Our Technologies</a>
            <a href="#">Aviation Military</a>
            <a href="#">Partnerships</a>
            <a href="#">Ambassadors</a>
            <a href="#">Awards</a>
          </div>
          <div class="info">
            <div class="footer-title">SERVICE</div>
            <a href="#">Customer Service</a>
            <a href="#">Finance</a>
            <a href="#">Request A Brochure</a>
            <a href="#">Faqs</a>
            <a href="#">Contact Us</a>
            <a href="#">Terms And Conditions</a>
            <a href="#">Delivery Returns</a>
          </div>
          <div class="info">
            <div class="footer-title">SOCIAL MEDIA</div>
            <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
            <a href="#"><i class="fab fa-instagram-square"></i> Insagram</a>
            <a href="#"><i class="fab fa-youtube"></i> Youtube</a>
          </div>
        </div>
        <div class="bottom-word">
          Bremont Watch Company Limited is registered in England 05414485.
          Registered office; Bremont Watch Company, Manufacturing and Technology
          Centre, The Wing, Reading Road, Henley-on-Thames, Oxfordshire, RG9
          4GE.
          {{message}}
        </div>
      </div>
    </div>
    <div class="pavement-bar">
      <div class="container">
        <div class="pay">
          <div class="card"><i class="fab fa-cc-visa"></i></div>
          <div class="card"><i class="fab fa-cc-mastercard"></i></div>
          <div class="card"><i class="fab fa-cc-jcb"></i></div>
          <div class="card"><i class="fab fa-cc-paypal"></i></div>
          <div class="card"><i class="fab fa-cc-apple-pay"></i></div>
          <div class="card"><i class="fab fa-cc-amazon-pay"></i></div>
        </div>
        <div class="information">
          <a href="#"><i class="far fa-question-circle"></i>information</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import Slider from "@jeremyhamm/vue-slider";


export default {
  name: "homerun",
  data() {
    return {
      webProductList: [],
      ref: null,
      isPriceShow: true,
      imagePath: "p09",
      priceFilter: '',
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
  },
  components: {
    slider: Slider,
  },
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//全域設定
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;
.arrow {
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
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

img {
  vertical-align: top;
}

ul {
  list-style-type: none;
  padding: 0;
}

// header
.header {
  .top-bar {
    display: flex;
    padding: 15px 0;
    flex: 1;
    background-color: $brand-color;
    text-align: left;
    text-decoration: none;

    .bar-1 {
      flex: 1;
      margin-left: 50px;
    }

    .bar-2 {
      color: $brand-color;
      margin-right: 50px;
      text-transform: uppercase;
      font-size: 12px;
      background-color: white;
      padding: 5px 10px;
      border-radius: 20px;
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

  .logo {
    justify-content: center;
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    position: relative;

    .line {
      width: 70%;
      border-top: 1px solid $brand-color;
      position: relative;
    }

    img {
      margin: 0 40px;
    }
    .logo-box {
      background-color: white;
      position: absolute;
    }
  }

  .nav {
    &.margin {
      margin-top: 30px;
      a {
        text-decoration: none;
        color: $gray-color;
        font-size: 10px;
        margin: 0 20px;
        letter-spacing: 1.5px;
      }
    }
  }
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
  display: flex;
  text-transform: uppercase;
  padding: 20px 0;
  border-top: 1px solid $brand-color;
  border-bottom: 1px solid $brand-color;
  width: 70%;
  justify-content: center;
  font-size: 9px;
  letter-spacing: 1px;
  .goods {
    color: $brand-color;
    margin: 0 20px;
  }
  svg {
    padding-right: 10px;
    font-size: 18px;
  }
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
  }
}

.footer {
  background-color: #c0b094;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;

  .container {
    width: 80%;
  }

  .information {
    display: flex;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: left;
    text-decoration: none;
    letter-spacing: 0.5px;
    img {
      width: 40%;
    }
    h4 {
      margin-top: 5px;
      color: white;
      font-weight: 100;
      font-size: 10px;
      width: 60%;
    }
    a {
      font-size: 12px;
      color: white;
      margin-bottom: 5px;
      text-decoration: none;
    }
  }

  .footer-title {
    padding-bottom: 5px;
    color: $green-color;
    border-bottom: 1px solid $green-color;
    width: 70%;
    margin-bottom: 15px;
  }

  .bottom-word {
    margin-top: 50px;
    width: 80%;
    text-align: left;
    margin-left: 20%;
    color: white;
    font-size: 10px;
    letter-spacing: 1px;
  }
}
.pavement-bar {
  background-color: $green-color;
  padding: 30px 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  .container {
    display: flex;
    width: 80%;
    text-align: left;
  }
  .pay {
    flex: 1;
    display: flex;
    text-align: left;
    margin-left: 20%;
    font-size: 30px;
  }
  .card {
    color: white;
    margin-right: 20px;
  }
  .information {
    padding: 8px;
    border: 1px solid white;
    border-radius: 20px;
    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
    }
    svg {
      padding-right: 10px;
    }
  }
}

//RWD

.rwd-bar {
  display: none;
}

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
  .rwd-bar {
    display: flex;
    background-color: $brand-color;
  }

  .header {
    .nav {
      .container-top {
        .top-bar {
          display: none;
        }
        .nav.margin {
          display: none;
        }
      }
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

  .pavement-bar {
    .container {
      flex-direction: column;
    }
    .pay {
      margin: 0;
    }
    .information {
      display: flex;
      width: 40%;
      margin: 10px 0;
    }
  }

  .photo-bar {
    padding-bottom: 30px;
    .info.topic {
      flex-direction: column;
    }
    .title {
      padding-bottom: 2vh;
      font-size: 13vw;
    }
  }
}
</style>
