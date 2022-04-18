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
      <div class="shop-title">LOGIN</div>
      <Features />
      <div class="main-list">
        <div class="container">
          <section v-if="isUserAuth" class="section">
            <div class="columns">
              
              <h4>Welcome,<span>{{ getUser.email }}</span></h4>
              <router-link :to="{ name: 'shoppinglist' }"
                >SHOPPING LIST <i class="fas fa-shopping-cart"></i></router-link
              >
              <router-link :to="{ name: 'homerun' }">HOME <i class="fas fa-home"></i></router-link>
              <router-link :to="{ name: 'productlist' }" 
                >PRODUCT LIST </router-link
              >
              <router-link :to="{ name: 'orderhistory' }" class="border">HISTORY LIST <i class="fas fa-clock"></i></router-link>
            </div>
          </section>

          <!-- 提示錯誤資訊 -->
          <div v-if="validationErrors.length" class="error">
            <button @click="resetError()"></button>
            <div class="content">
              Please resolve the following error(s) before proceeding.
              <ul style="margin-top: 0.3em; margin-left: 1em">
                <li
                  v-for="(error, index) in validationErrors"
                  :key="`error-${index}`"
                  v-html="error"
                />
              </ul>
            </div>
          </div>

          <form
            @submit.prevent="validate"
            v-if="!isUserAuth"
            class="right-login"
          >
            <h3>LOGIN</h3>

            <div class="form-group">
              <label>Email address</label>
              <input type="email" v-model="email" />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="password" />
            </div>

            <button type="submit" class="login">LOGIN</button>

            <p>
              <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
          </form>
          <!-- <button v-if="isUserAuth" @click="signOut">LOGOUT</button> -->
        </div>
      </div>
      
    </div>
    <div class="bottom-img">
        <img src="../img/s14.jpg" alt="image">
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
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      validationErrors: [],
    };
  },

  methods: {
    ...mapActions(["signInAction", "signOutAction"]),

    // 提示錯誤資訊方法
    resetError() {
      this.validationErrors = [];
    },
    validate() {
      // Clear the errors before we validate again
      this.resetError();
      // email validation
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      }
      if (/.+@.+/.test(this.email) != true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }
      // password validation
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }
      if (/.{6,}/.test(this.password) != true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.signIn();
      }
    },

    signIn() {
      this.signInAction({ email: this.email, password: this.password });
    },

    signOut() {
      this.signOutAction();
    },
  },

  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
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
  margin-bottom: 60px;
}

.shop-title {
  letter-spacing: 2px;
  font-size: 12px;
  color: #c0b094;
  padding-bottom: 10px;
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
  display: flex;
  margin-top: 60px;
  justify-content: center;
  .container {
    display: flex;
    align-items: center;
  }
  .columns {
    display: flex;
    flex-direction: column;
    line-height: 3;
    a {
      font-size: 15px;
      letter-spacing: 1px;
      text-decoration: none;
      color: $brand-color;
    }
    h4{
      font-size: 14px;
      font-weight: 100;
      letter-spacing: 1px;
      color: grey;
      border-bottom: 1px solid $brand-color;
    }
    span {
      color: $brand-color;
    }
    .border {
      border-bottom: 1px solid $brand-color;
    }
  }
}

.left-img {
  width: 550px;
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
}

.right-login {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
  width: 550px;
  letter-spacing: 1px;
  color: $brand-color;
  input {
    width: 100%;
    height: 45px;
    margin-bottom: 25px;
    box-sizing: border-box;
    padding: 10px;
  }

  ::placeholder {
    text-transform: uppercase;
    font-size: 9px;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 45px;
    background-color: $brand-color;
    display: block;
    line-height: 3.5;
    text-transform: uppercase;
    font-size: 9px;
  }
  .login {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 45px;
    background-color: $brand-color;
    display: block;
    line-height: 3.5;
    text-transform: uppercase;
    font-size: 9px;
    border: none;
    margin-bottom: 30px;
    cursor: pointer;
    letter-spacing: 1px;
  }

  h4 {
    margin: 20px 0;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 100;
  }

  .info {
    display: flex;
    margin-top: 20px;
    .info-box {
      text-transform: uppercase;
      font-size: 9px;
    }
  }

  .con {
    text-transform: uppercase;
    font-size: 9px;
    flex: 1;
    text-align: left;
  }
}

.bottom-img {
  width: 100%;
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    margin-top: 50px;
  }
}

//RWD

@media screen and (max-width: 1100px) {
  .content {
    .main-list {
      .container {
        flex-direction: column;
        width: 100%;
        .left-img {
          width: 80vw;
        }
        .right-login {
          width: 80vw;
          padding: 0;
          padding-top: 30px;
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
}
</style>
