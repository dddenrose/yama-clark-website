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
      <div class="shop-title">SIGN UP</div>
      <Features />
      <div class="main-list">
        <div class="container">
          <div class="left-img">
            <img src="../img/s04.jpg" alt="image" />
          </div>
          <form @submit.prevent="userRegistration" class="right-login">
            <h3>SIGN UP</h3>

            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.name"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control form-control-lg"
                v-model="user.email"
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control form-control-lg"
                v-model="user.password"
              />
            </div>

            <button type="submit" class="signup">Sign Up</button>
            <p class="info-signin">Already registered</p>
            <p>
              <router-link :to="{ name: 'login' }">sign in?</router-link>
            </p>
          </form>
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
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userRegistration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/loginpage").catch((err) => {
                err;
              });
            });
        })
        .catch((error) => {
          alert(error.message);
        });
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
    width: 80%;
    display: flex;
    align-items: center;
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
  h3 {
    border-bottom: 1px solid;
    padding-bottom: 10px;
  }

  .form-group {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 2;
  }

  .signup {
    margin-top: 20px;
    border: none;
    text-decoration: none;
    color: white;
    width: 100%;
    height: 45px;
    background-color: #bfb094;
    display: block;
    text-transform: uppercase;
    font-size: 12px;
  }

  .info-signin {
    
    text-transform: uppercase;
    font-size: 12px;
    margin: 20px 0;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
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
