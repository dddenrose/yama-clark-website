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
      <div class="shop-title">PROFILE</div>
      <Features />
      <div class="main-list">
        <div class="container">
          <section v-if="!isUserAuth" class="section">
            <div class="columns">
              <h4>You have already logout.</h4>
              <router-link :to="{ name: 'login' }">CLICK HERE TO LOGIN</router-link>
            </div>
          </section>
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
        </div>
      </div>
    </div>
    <div class="bottom-img">
        <img src="../img/s15.jpg" alt="image">
      </div>
      <Chat/>
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
import Chat from "../components/Chat.vue";
import { mapGetters, mapMutations, mapState } from "vuex";


export default {
  data() {
    return {
    };
  },

  methods: {
    ...mapMutations(["setShowNav"]),
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
  },
  mounted() {
    this.toTop();
    this.setShowNav(false);
  },

  computed: {
    ...mapGetters(["getUser", "isUserAuth",]),
    ...mapState(["loading"])
  },

  components: {
    Gotop,
    TopNavOpacity,
    Footer,
    Pavement,
    Logo,
    Features,
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

#top-bar {
  background-color: $brand-color;
}

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
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
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
      }
    }
  }
}
</style>
