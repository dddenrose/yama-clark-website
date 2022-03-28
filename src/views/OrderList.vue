<template>
  <div class="hello">
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
      <div class="shop-title">ORDER LIST</div>
      <div class="features">
        <div class="goods">
          <i class="fas fa-globe-americas"></i>global delivery free
        </div>
        <div class="goods"><i class="fas fa-user-shield"></i>warranty free</div>
        <div class="goods">
          <i class="fas fa-glass-martini"></i>traditional skills
        </div>
      </div>
      <div class="main-list">
        <div class="container">
          <div class="left-info">
            <div class="one-part">
              <input type="text" placeholder="COUNTRY" />
            </div>
            <div class="two-part">
              <input type="text" placeholder="FIRST NAME" />
              <input type="text" placeholder="LAST NAME" />
            </div>
            <div class="one-part">
              <input type="text" placeholder="ADDRESS" />
            </div>
            <div class="one-part"><input type="text" placeholder="ROAD" /></div>
            <div class="two-part">
              <input type="text" placeholder="CITY" />
              <input type="text" placeholder="TOWN" />
            </div>
            <div class="one-part">
              <input type="text" placeholder="PHONE" />
            </div>
            <div class="saveInfo">
              <div class="square"></div>
              <div class="word">SAVE THE INFORMATION</div>
            </div>
            <a href="#" class="confirm">confirm</a>
          </div>
          <div class="right-list">
            <div class="top-info">
              <h3 class="product">product</h3>
              <h3 class="count">count</h3>
              <h3 class="price">price</h3>
            </div>
            <div class="lists">
              <div
                class="selling-product"
                v-for="(product, index) in webProductList"
                :key="index"
              >
                <img v-bind:src="product.img" alt="product" />
                <h3>
                  {{ product.productName }}
                </h3>
                <div class="count">
                  <div class="counting">+ 1 -</div>
                  <a href="#">DELET</a>
                </div>
                <div class="price">
                  {{ product.price }}
                </div>
              </div>
            </div>
            <div class="pavement">
              <div class="title">PAVEMENT</div>
              <div class="price-detail">
                <div class="total">
                  <h3 class="left-title">total</h3>
                  <h3 class="price">$40,850</h3>
                </div>
                <div class="coupon">
                  <h3 class="left-title">coupon</h3>
                  <h3 class="price gold">-$2,850</h3>
                </div>
                <div class="price-title">
                  <h3 class="left-title">price</h3>
                  <h3 class="price">$38,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="information">
          <div class="info">
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
import { initializeApp } from "firebase/app"; //SDK =>
import { getDatabase, ref, onValue } from "firebase/database"; // {XXXXX}內的小東西都是firebase裡面寫的小功能，為了要避免import時要讀入整包檔案

export default {
  name: "homerun",
  data() {
    return {
      webProductList: [],
      ref: null,
    };
  },
  mounted() {
    //在頁面打開時會直接執行mounted的動作(只有打開頁面時作動)
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
      this.webProductList = data.userList[0].cart;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//全域設定
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid $brand-color;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid $brand-color;
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
  margin-bottom: 60px;
}

.shop-title {
  letter-spacing: 2px;
  font-size: 12px;
  color: #c0b094;
  padding-bottom: 10px;
  border-bottom: 1px solid $brand-color;
  width: 70%;
}

.features {
  display: flex;
  text-transform: uppercase;
  padding: 20px 0;
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

.main-list {
  margin-top: 60px;

  .top-info {
    display: flex;
    text-transform: uppercase;
    border-bottom: 1px solid #d1d1d1;
    padding-bottom: 30px;
    h3.product {
      flex: 7 1 0;
      text-align: left;
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
}

.lists {
  .selling-product {
    display: flex;
    align-items: center;
    padding: 20px 0;
    img {
      height: 80px;
      flex: 2 1 0;
      object-fit: contain;
    }
    h3 {
      flex: 5 1 0;
      text-transform: uppercase;
      font-size: 7px;
      box-sizing: border-box;
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
        margin: 11px 0 0 7px;
        font-size: 10px;
      }
    }
    .counting {
      padding: 6px 8px;
      display: inline-block;
      border: 1px solid;
      color: gray;
    }
    .price {
      flex: 1 1 0;
      font-size: 9px;
    }
  }
}

.pavement {
  margin-bottom: 30px;
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
    border-bottom: 1px solid;
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

.main-list {
  .right-list {
    width: 500px;
  }
  .container {
    display: flex;
    .left-info {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-right: 30px;
      width: 550px;
      input {
        padding: 5px;
        box-sizing: border-box;
      }
    }
    .one-part {
      box-sizing: border-box;
      margin-bottom: 15px;
      input {
        width: 100%;
        height: 45px;
      }
    }
    .two-part {
      box-sizing: border-box;
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;
      input {
        height: 45px;
        width: 48%;
      }
    }
    input::placeholder {
      font-size: 9px;
      letter-spacing: 1px;
    }
  }
  .saveInfo {
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .square {
      width: 20px;
      height: 20px;
      border: 1px solid $brand-color;
      margin-right: 10px;
      border-radius: 5px;
    }
    .word {
      font-size: 10px;
    }
  }
  a.confirm {
    text-decoration: none;
    text-transform: uppercase;
    background-color: $brand-color;
    color: white;
    display: inline-block;
    text-align: center;
    padding: 10px;
    width: 60px;
    font-size: 12px;
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
</style>
