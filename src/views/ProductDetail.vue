<template>
  <div class="hello" id="hello">
    <transition v-if="showNotice">
      <Notice/>
    </transition>
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <TopNavOpacity />
          <Logo />
          <Category />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="product-detail">
        <div class="product-main">
          <div class="scroll">
            <div
              class="photo"
              v-for="(img, index) in currentProduct.introImg"
              :key="index"
            >
              <div class="img-box">
                <img @click="changePhoto(img)" v-bind:src="img" alt="product" />
              </div>
            </div>
          </div>
          <div class="product-photo">
            <img
              @click="nextPhoto()"
              v-bind:src="
                this.changePhotoUrl
                  ? this.changePhotoUrl
                  : `${currentProduct.imagePath}`
              "
              alt="product"
            />
          </div>
        </div>

        <div class="product-info">
          <div class="series">{{ currentProduct.series }}</div>
          <h3>{{ currentProduct.seriesName }}</h3>
          <h3 class="id">productid: {{ currentProduct.productId }}</h3>
          <h3 class="price">${{ currentProduct.price }}</h3>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quam aliquam maiores, rem odio velit et quod a? Assumenda ut impedit
            eius voluptates placeat quas ipsam doloribus adipisci cum, ducimus,
            minus aliquid ad dolore ullam hic. Distinctio doloremque perferendis
            quae quia aliquid ducimus ea commodi rerum blanditiis. Animi cumque
            fuga, corrupti dolore perferendis amet eum. Facere placeat culpa a
            earum non cumque exercitationem hic necessitatibus consequuntur at!
            Reprehenderit repellendus, corrupti, ducimus a velit veniam iste
            dicta recusandae aliquid eum deserunt? Omnis hic consectetur sequi.
            Fuga ad dicta totam itaque consequuntur deserunt molestias qui sequi
            minima aut similique, natus hic sunt.
          </h4>
          <button
            class="button"
            @click="addProduct({ product: currentProduct })"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div class="brand-story">
        <div class="container">
          <div class="word">
            <h3>DESIGN PHILOSOPHY</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus
              nostrum quas. Cumque, cupiditate iste. Ex deserunt aut numquam
              tempora, voluptatum perferendis facilis fugiat? Cum nemo quaerat,
              voluptatibus recusandae nobis sed aspernatur minima eos hic ut?
              Vitae quam placeat culpa adipisci quia dolorem debitis odit
              aliquam et impedit illo repellendus magni autem odio animi velit
              cum, temporibus, laborum inventore, esse blanditiis aspernatur
              unde! Minus quos dolores eveniet iusto eos a iure rerum hic ad et,
              nesciunt obcaecati quisquam, quod fugit nihil officia quis
              accusantium sit. Quo nesciunt tempora aliquam nam nemo animi
              libero omnis illum, et nihil, delectus repellendus mollitia.
            </h4>
            <img src="../img/pattern.png" alt="pattern" />
          </div>
          <div class="images">
            <div class="one">
              <img src="../img/d07.jpg" alt="image" />
            </div>
            <div class="two">
              <img class="padding-left" src="../img/d08.jpg" alt="image" />
              <img src="../img/d06.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div class="photo-row">
        <img src="../img/d11.jpg" alt="image" />
        <img class="thirty" src="../img/d10.jpg" alt="image" />
        <img src="../img/d09.jpg" alt="image" />
        <img class="none thirty" src="../img/d03.jpg" alt="image" />
      </div>
    </div>
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
import Logo from "../components/Logo.vue";
import Chat from "../components/Chat.vue";
import Category from "../components/Category.vue";
import Notice from "../components/Notice.vue";
import { mapActions, mapState,mapMutations } from "vuex";

export default {
  mounted() {
    this.setCurrentProduct();
    this.toTop();
    this.setShowNav(false);
  },
  data() {
    return {
      productId: null,
      changePhotoUrl: "",
    };
  },
  computed: {
    ...mapState(["currentProduct","showNotice"]),
    showNotice() {
      return this.$store.state.showNotice
    },
  },
  methods: {
    ...mapActions(["setCurrentProduct", "addProductDetail", "addProduct"]),
    ...mapMutations(["setShowNav"]),
    changePhoto(img) {
      let imgUrl = img;
      this.changePhotoUrl = imgUrl;
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
    nextPhoto() {
      let one = this.currentProduct.introImg.intro1;
      let two = this.currentProduct.introImg.intro2;
      let three = this.currentProduct.introImg.intro3;

      if (this.changePhotoUrl !== "") {
        if (this.changePhotoUrl === one) {
          this.changePhotoUrl = two;
        } else if (this.changePhotoUrl === two) {
          this.changePhotoUrl = three;
        } else if (this.changePhotoUrl === three) {
          this.changePhotoUrl = one;
        }
      } else {
        this.changePhotoUrl = two;
      }
    },
  },
  components: {
    Gotop,
    TopNavOpacity,
    Footer,
    Pavement,
    Logo,
    Chat,
    Category,
    Notice
  },
};
</script>


<style scoped lang="scss">
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.3s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.3s;
}
.v-enter-to {
  opacity: 1;
}

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

// header

//content
.content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-detail {
  width: 70%;
  display: flex;
  .product-main {
    display: flex;
  }
  .scroll {
    margin-right: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .photo {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    .img-box {
      width: 150px;
      height: 150px;
      box-sizing: border-box;
      flex: 1 1 0;
      display: flex;
      cursor: pointer;
    }
    img {
      vertical-align: top;
      width: 100%;
      object-fit: cover;
    }
  }

  .product-photo {
    width: 30vw;
    height: 30vw;
    max-width: 500px;
    max-height: 500px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .product-info {
    flex: 3 1 0;
  }
}

.product-info {
  display: flex;
  box-sizing: border-box;
  padding-left: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .series {
    font-size: 35px;
    border-bottom: 1px solid $brand-color;
    width: 100%;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: $brand-color;
  }
  h3 {
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 200;
    letter-spacing: 1px;
    &.price {
      text-transform: uppercase;
      border-bottom: 1px solid $brand-color;
      display: inline-block;
      width: 100%;
      padding-bottom: 15px;
      margin-bottom: 15px;
      color: $brand-color;
    }
  }
  h3.id {
    color: rgb(182, 182, 182);
  }
  h4 {
    font-size: 10px;
    width: 100%;
    letter-spacing: 1px;
    font-weight: 100;
    margin-bottom: 30px;
    border-bottom: 1px solid $brand-color;
    padding-bottom: 15px;
  }
}

button {
  text-decoration: none;
  color: white;
  background-color: $brand-color;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  letter-spacing: 1.5px;
}

.brand-story {
  margin-top: 120px;
  display: flex;
  background-color: $brand-color;
  justify-content: center;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .word {
    color: white;
    flex: 2 1 0;
    padding: 0 5%;
    text-align: left;
    h3 {
      margin-bottom: 20px;
    }
    h4 {
      width: 70%;
      font-size: 12px;
      font-weight: 200;
      letter-spacing: 1px;
      margin-bottom: 30px;
      line-height: 1.5;
    }
    img {
      width: 50%;
    }
  }
  .images {
    height: 700px;
    box-sizing: border-box;
    flex: 3 1 0;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
  }
  .one {
    height: 50%;
    flex: 1 1 0;
    display: flex;
    box-sizing: border-box;
    padding-bottom: 15px;
    img {
      width: 100%;
      object-fit: cover;
      flex: 1 1 0;
    }
  }
  .two {
    height: 50%;
    flex: 1 1 0;
    display: flex;
    img {
      box-sizing: border-box;
      object-fit: cover;
      flex: 1 1 0;
      width: 50%;

      &.padding-left {
        padding-right: 15px;
      }
    }
  }
}

.photo-row {
  display: flex;
  margin: 60px 0;
  height: 300px;
  img {
    width: 20%;
    object-fit: cover;
    box-sizing: border-box;
    padding-right: 15px;
  }
  img.none {
    padding-right: 0;
  }
  .thirty {
    width: 30%;
  }
}

//RWD

@media screen and (max-width: 1200px) {
  .product-detail {
    flex-direction: column;
    align-items: center;

    .product-info {
      margin-top: 50px;
      padding-left: 0;
    }

    .product-main {
      .product-photo {
        width: 60vw;
        height: 60vw;
        max-width: 450px;
        max-height: 450px;
      }
    }
  }

  .brand-story {
    .container {
      flex-direction: column;
    }
    .word {
      padding: 5%;
      h4 {
        width: 100%;
      }
    }
  }

  .pavement {
    .title {
      padding-left: 0;
    }
  }
}

@media screen and (max-width: 700px) {
  #hello {
    .scroll {
      margin-right: 3vw;
    }
    .img-box {
      width: 17vw;
      height: 17vw;
    }
    .photo-row {
      display: none;
    }
    .brand-story {
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }
}
</style>
