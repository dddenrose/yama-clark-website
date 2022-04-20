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
      <div class="shop-title">ORDER LIST</div>
      <Features />
      <div class="main-list">
        <div class="container">
          <div class="right-list">
            <h3 class="title">order list</h3>
            <div class="top-info">
              <h3 class="product">product</h3>
              <h3 class="count">count</h3>
              <h3 class="price">price</h3>
            </div>
            <div class="lists">
              <Loading v-if="loading" />
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
              <div class="title">PAVEMENT</div>
              <div class="price-detail">
                <div class="total">
                  <h3 class="left-title">total</h3>
                  <h3 class="price">${{ totalPrice }}</h3>
                </div>
                <!-- <div class="coupon">
                <h3 class="left-title">coupon</h3>
                <h3 class="price gold">-$0</h3>
              </div> -->
                <!-- <div class="price-title">
                <h3 class="left-title">price</h3>
                <h3 class="price">${{ totalPrice }}</h3>
              </div> -->
              </div>
            </div>
          </div>
          <div class="left-info">
            <h3 class="title">information</h3>
            <div v-if="error.length" class="error">
              <p> {{error}} </p>
            </div>
            <label class="one-part">
              <input type="text" placeholder="NAME" v-model="name" required/>
            </label>
            <div class="one-part">
              <input type="text" placeholder="ADDRESS" v-model="address" required/>
            </div>
            <div class="one-part">
              <input type="text" placeholder="PHONE" v-model="phone" required/>
            </div>
            <select name="country" class="one-part">
              <option value="Taiwan">Taiwan</option>
              <option value="Japan">Japan</option>
              <option value="United State">United State</option>
              <option value="Malasiya">Malasiya</option>
              <option value="Philipin">Philipin</option>
              <option value="Australia">Australia</option>
            </select>
            <!-- <input type="submit" class="confirm" @click="order()" value="confirm"/> -->
            
            <button class="confirm" @click="order">confirm</button>
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
import Gotop from "../components/Gotop.vue";
import TopNav from "../components/TopNav.vue";
import Footer from "../components/Footer.vue";
import Pavement from "../components/Pavement.vue";
import Logo from "../components/Logo.vue";
import Features from "../components/Features.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Loading from "../components/Loading.vue";

export default {
  data() {
    return {
      address:"",
      phone:"",
      name:"",
      error:"",
    };
  },
  methods: {
    ...mapActions([
      "getUserList",
      "deleteProduct",
      "fbDeleteTask",
      "addCount",
      "minusCount",
      "confirmOrder",
    ]),
    order: function() {
      if (this.address != "" && this.phone != "" && this.name != "") {
        this.confirmOrder();
      } else {
        this.error = "Please enter all information bellow here."
      }
    }
  },

  computed: {
    ...mapState(["userList", "user","loading"]),
    ...mapGetters(["totalPrice"]),
  },
  components: {
    Gotop,
    TopNav,
    Footer,
    Pavement,
    Logo,
    Features,
    Loading
  },
};
</script>

<style scoped lang="scss">
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
  margin-bottom: 60px;
}

.shop-title {
  letter-spacing: 2px;
  font-size: 12px;
  color: #c0b094;
  padding-bottom: 10px;
  width: 70%;
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
      font-size: 9px;
    }
  }
}

.confirm {
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #c0b094;
  padding: 10px 15px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}

.pavement {
  margin-bottom: 30px;
  display: flex;
  border-top: 1px solid #d1d1d1;
  padding-top: 30px;

  .title {
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
}

.main-list {
  .right-list {
    width: 550px;
    margin-right: 50px;
    h3.title {
        text-transform: uppercase;
        color: $brand-color;
        border-bottom: 1px solid $brand-color;
        padding-bottom: 20px;
        margin-bottom: 30px;
        letter-spacing: 1px;
        font-weight: 100;
      }
  }
  .container {
    display: flex;
    .left-info {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 550px;
      .error {
        color: $brand-color;
        margin-bottom: 10px;
        letter-spacing: 1px;
      }
      .title {
        text-transform: uppercase;
        color: $brand-color;
        border-bottom: 1px solid $brand-color;
        padding-bottom: 20px;
        margin-bottom: 30px;
        letter-spacing: 1px;
        font-weight: 100;
      }
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
  select {
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $gray-color;
    height: 45px;
  }
}
// RWD

@media screen and (max-width: 1100px) {
  .main-list {
    .container {
      flex-direction: column;
      align-items: center;

    }

    .right-list {
      margin-top: 50px;
      margin-right: 0px;
    }

    .top-info {
      border-top: 1px solid #d1d1d1;
      padding-top: 30px;
    }
  }

  .pavement {
    .title {
      padding-left: 0;
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
}
</style>
