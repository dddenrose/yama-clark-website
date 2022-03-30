<template>
  <div class="hello" ref="app">
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
      :customStyles="{'navMenu': {'background-color': 'black'}, 'navIcon': {'color': 'blue'}}"
    ></slider>

    <div class="header">
      <div class="nav">
        <div class="container-top">
          <div class="top-bar">
            <div class="bar-1">
              <router-link class="shopping" :to="{ name: 'shoppinglist' }"
                >shopping list <i class="fas fa-shopping-cart"></i
              ></router-link>
              <router-link :to="{ name: 'homerun' }">home</router-link>
              <router-link :to="{ name: 'productlist' }">productlist</router-link>
              <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
              <a class="icon" href="#"
                ><i class="fab fa-instagram-square"></i
              ></a>
              <a class="icon" href="#"><i class="fab fa-twitter-square"></i></a>
              <a class="icon" href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="bar-2"><router-link :to="{ name: 'login' }">login</router-link></div>
          </div>
          <div class="logo">
            <div class="line"></div>
            <div class="logo-box">
              <img src="../img/logo.png" alt="logo" style="width: 100px" />
            </div>
          </div>
          <div class="nav margin">
            <router-link :to="{ name: 'productlist' }">
              MEN'S WATCHES
            </router-link>
            <router-link :to="{ name: 'productlist' }">
              LADIES' WATCHES
            </router-link>
            <router-link :to="{ name: 'productlist' }">
              NEW RELEASES
            </router-link>
            <router-link :to="{ name: 'productlist' }">
              ACCESSORIES
            </router-link>
            <router-link :to="{ name: 'productlist' }"> OTHER </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="main-photo">
        <div class="container">
          <div class="photo-top">
            <img src="../img/s11-2.jpg" alt="image" />
          </div>
          <div class="photo-row">
            <div class="image-box">
              <img src="../img/s12.jpg" alt="image" />
              <router-link class="info" :to="{ name: 'productlist' }">
                mens' wateches <i class="arrow right white"></i>
              </router-link>
            </div>
            <div class="image-box">
              <img src="../img/s01.jpg" alt="image" />
              <router-link class="info" :to="{ name: 'productlist' }">
                new releases <i class="arrow right white"></i>
              </router-link>
            </div>
            <div class="image-box">
              <img src="../img/s06.jpg" alt="image" />
              <router-link class="info" :to="{ name: 'productlist' }">
                classic watches <i class="arrow right white"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="trending-products">
        <div class="container">
          <div class="title topic">
            <div class="line"></div>
            <div class="info">
              <h2>TRENDING PRODUCTS</h2>
              <h4>
                Nam interdum, lacus quis tempor iaculis, nunc mauris tincidunt
                metus,
              </h4>
            </div>
            <div class="line"></div>
          </div>
          <div class="product-bar">
            <div
              class="product"
              v-for="(product, index) in webProductList"
              :key="index"
            >
              <router-link class="image-box" :to="{ name: 'productdetail' }">
                <img v-bind:src="product.imagePath" alt="product" />
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
      </div>
      <div class="photo-bar">
        <div class="container">
          <div class="slide">
            <div><i class="arrow left white"></i></div>
            <div class="photo-row">
              <img src="../img/s10.jpg" alt="image" />
            </div>
            <div><i class="arrow right white"></i></div>
          </div>
          <div class="info topic">
            <div class="title">Time Discovered Truth.</div>
            <div class="info">
              <h3>MAN ACCESSORIES</h3>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quam, recusandae ut libero nisi qui, error natus optio,
                veniam ea voluptatum sapiente repellendus. Quam molestias
                adipisci voluptas enim illum? Ipsa dolore provident iusto sequi
                voluptates quasi numquam quo atque vitae.
              </h5>
            </div>
          </div>
          <div class="circle">. . . . .</div>
        </div>
      </div>
      <div class="best-selling">
        <div class="container">
          <div class="title topic">
            <div class="line"></div>
            <div class="info">
              <h2>BEST-SELLING PRODUCTS</h2>
              <h4>
                Nam interdum, lacus quis tempor iaculis, nunc mauris tincidunt
                metus,
              </h4>
            </div>
            <div class="line"></div>
          </div>
          <div class="product-bar">
            <div class="arr"><i class="arrow left white"></i></div>
            <div
              class="product"
              v-for="(product, index) in webBestSelling"
              :key="index"
            >
              <router-link class="image-box" :to="{ name: 'productdetail' }">
                <img v-bind:src="product.imagePath" alt="product" />
              </router-link>
              <div class="info">
                <h2>{{ product.series }}</h2>
                <h3 class="name">{{ product.seriesName }}</h3>
                <h3>{{ product.color }}</h3>
                <h3>{{ product.price }}</h3>
              </div>
            </div>
            <div class="arr arr-right"><i class="arrow right white"></i></div>
          </div>
          <div class="circle">. . . . .</div>
        </div>
      </div>
      <div class="brand-story">
        <div class="container">
          <img src="../img/s13.jpg" alt="image" />
          <div class="title topic">
            <div class="line"></div>
            <div class="info">
              <h2>BRAND STORY</h2>
              <h4>
                Nam interdum, lacus quis tempor iaculis, nunc mauris tincidunt
                metus,
              </h4>
            </div>
            <div class="line"></div>
          </div>
          <div class="article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dicta inventore sit quo aut quaerat veniam ducimus. Dolorem cumque
            eaque itaque, quam perspiciatis harum provident porro aut explicabo
            consectetur! Tempore autem nostrum temporibus eius voluptate tempora
            iusto, vero, officiis asperiores enim vel excepturi cumque officia
            voluptatibus doloremque quos, facilis doloribus?
          </div>
        </div>
      </div>
      <div class="photo-row-bottom">
        <div class="one">
          <img src="../img/s04.jpg" alt="image" />
        </div>
        <div class="two">
          <img class="top" src="../img/s02.jpg" alt="image" />
          <img src="../img/s07.jpg" alt="image" />
        </div>
        <div class="one">
          <img src="../img/s08.jpg" alt="image" />
        </div>
        <div class="two none">
          <img class="top" src="../img/s03.jpg" alt="image" />
          <img src="../img/s09.jpg" alt="image" />
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
      webBestSelling: [],
      ref: null,
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
      this.webProductList = data.trendingProduct[0];
      this.webBestSelling = data.bestSelling[0];
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
      a {
        color: $brand-color;
      }
      
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
      padding-top: 60px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-photo {
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
  }
  .photo-top {
    display: flex;
    width: 100%;
    height: 700px;
    margin-top: 60px;
    img {
      flex: 1;
      width: 100%;
      object-fit: cover;
    }
  }
}

.photo-row {
  display: flex;
  .image-box {
    flex: 1 1 0;
    height: 300px;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;

    text-decoration: none;
  }
}

.trending-products {
  margin-top: 60px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 60px;
    width: 70%;
    justify-content: space-around;
    flex-wrap: wrap;
    .product {
      display: flex;
      flex-direction: column;
      width: 200px;
      padding: 0 50px;
    }
    .image-box {
      flex: 6 1 250px;
    }
    img {
      width: 100%;
      height: 350px;
      object-fit: contain;
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

.photo-bar {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  background-color: $green-color;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .slide {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .photo-row {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    height: 400px;
    padding: 0 20px;
  }

  .info.topic {
    margin-top: 60px;
    color: white;
    display: flex;

    .title {
      flex: 1;
      font-size: 65px;
      text-align: left;
    }
    .info {
      text-align: left;
      flex: 1;
      line-height: 1.5;
    }
    h3 {
      font-weight: 100;
    }
    h5 {
      font-size: 10px;
      font-weight: 100;
      margin-top: 10px;
    }
  }
  .circle {
    color: white;
  }
}

.best-selling {
  padding-bottom: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $green-color;
  padding-top: 60px;
  .container {
    width: 70%;
    background-color: white;
    padding: 50px 100px;
    border-radius: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 60px;
    align-items: center;
    justify-content: space-around;
    .product {
      display: flex;
      flex-direction: column;
      width: 200px;
      padding: 0 20px;
    }
    .image-box {
      flex: 6 1 250px;
    }
    img {
      width: 100%;
      height: 350px;
      object-fit: contain;
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
  .arr {
    height: 25px;
    background-color: $brand-color;
    width: 25px;
    border-radius: 25px;
  }
  .arrow {
    position: relative;
    left: 2px;
    top: 1.5px;
  }
  .arr-right {
    .arrow {
      left: -1.5px;
    }
  }
}

.brand-story {
  .container {
    position: relative;
    top: -200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 70%;
    border-radius: 200px;
  }
  .article {
    width: 50%;
    font-size: 10px;
    margin-top: 30px;
  }
  .title {
    margin-top: 60px;
  }
}

.photo-row-bottom {
  display: flex;
  position: relative;
  top: -60px;

  img {
    width: 100%;
    object-fit: cover;
    &.top {
      box-sizing: border-box;
      padding-bottom: 15px;
      flex: 1;
      object-fit: cover;
    }
  }
  .one {
    display: flex;
    flex: 2 1 0;
    box-sizing: border-box;
    padding-right: 15px;
  }
  .two {
    box-sizing: border-box;
    padding-right: 15px;
    flex-direction: column;
    display: flex;
    flex: 1 1 0;
    &.none {
      padding-right: 0;
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

.rwd-bar {
  display: none;
}

@media screen and (max-width: 1200px) {
  .product-bar {
    width: 80vw;
  }

  .title.topic {
    .line {
      display: none;
    }
  }

  .main-photo .photo-top {
    height: auto;
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

  .best-selling {
    display: none;
  }
  .main-photo .photo-top {
    height: auto;
  }

  .photo-row {
    .image-box {
      height: 180px;
    }
  }

  .brand-story {
    .container {
      top: 0;
      padding: 30px 0;
    }
  }

  .photo-row-bottom {
    top: 0;
    padding-bottom: 30px;
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
