<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <TopNavOpacity />
          <HomeImage/>
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
import TopNavOpacity from "../components/TopNavOpacity.vue";
import Footer from "../components/Footer.vue";
import Pavement from "../components/Pavement.vue";
import HomeContent from "../components/HomeContent.vue";
import Chat from "../components/Chat.vue";
import HomeImage from "../components/HomeImage.vue";
import { mapActions, mapMutations } from 'vuex';


export default {
  methods: {
    ...mapActions(["getAllProduct"]),
    ...mapMutations(["setShowNav","setTag"]),
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
  },
  mounted() {
    this.toTop();
    this.setShowNav(false);
    this.setTag([]);
    this.getAllProduct();
  },
  components: {
    Gotop,
    TopNavOpacity,
    Footer,
    Pavement,
    HomeContent,
    Chat,
    HomeImage,
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
