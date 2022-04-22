<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <TopNav />
          <Logo />
          <Category />
        </div>
      </div>
    </div>
    <HomeContent />
    <Chat />
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
import Chat from "../components/Chat.vue";
import Category from "../components/Category.vue";

export default {
  methods: {
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
  },
  mounted() {
    this.toTop();
  },
  components: {
    Gotop,
    TopNav,
    Footer,
    Pavement,
    HomeContent,
    Logo,
    Chat,
    Category,
  },
};
</script>


<style scoped lang="scss">
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.container-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  vertical-align: top;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
