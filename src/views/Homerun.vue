<template>
  <div class="hello" ref="app">
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <TopNav />
          <Logo />
          <div class="nav margin" id="hover">
            <router-link class="shape-ex1" :to="{ name: 'productlist' }">
              MEN'S WATCHES</router-link
            >
            <router-link class="shape-ex1" :to="{ name: 'productlist' }">
              LADIES' WATCHES</router-link
            >
            <router-link class="shape-ex1" :to="{ name: 'productlist' }">
              NEW RELEASES</router-link
            >
            <router-link class="shape-ex1" :to="{ name: 'productlist' }">
              ACCESSORIES</router-link
            >
            <router-link class="shape-ex1" :to="{ name: 'productlist' }">
              OTHER</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <HomeContent />
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
import HomeContent from "../components/HomeContent.vue";
import Logo from "../components/Logo.vue";

export default {
  name: "homerun",
  data() {
  },
  components: {
    Gotop,
    TopNav,
    Footer,
    Pavement,
    HomeContent,
    Logo,
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

.header {
  .nav {
    &.margin {
      padding-top: 60px;
      a {
        text-decoration: none;
        color: $gray-color;
        font-size: 10px;
        margin: 0 20px;
        letter-spacing: 1.5px;
        text-align: center;
        padding-bottom: 3px;
        border-bottom: 1px solid white;
        transition: 0.3s ease-in;
      }

      a:hover {
        border-bottom: 1px solid $brand-color;
      }
    }
  }
}
</style>
