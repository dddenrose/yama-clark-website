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
      <Features/>
      <div class="product-detail">
        <div class="product-main">
          <div class="scroll">
            <div class="arrow-up"></div>
            <div class="photo">
              <a href="#"><img src="../img/d01.jpg" alt="product" /></a>
              <a href="#"><img src="../img/d02.jpg" alt="product" /></a>
              <a href="#"><img src="../img/d04.jpg" alt="product" /></a>
            </div>
            <div class="arrow-down"></div>
          </div>
          <div class="product-photo">
            <img src="../img/p02.jpg" alt="product" />
          </div>
        </div>

        <div class="product-info">
          <div class="series">1982</div>
          <h3>gmt world traveler</h3>
          <h3>steel / dark blue off white</h3>
          <h3 class="price">$10,800</h3>
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
          <router-link class="button" :to="{ name: 'shoppinglist' }"
            >ADD TO CART</router-link
          >
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

export default {
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

// header

//content
.content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.features {
  margin-bottom: 60px;
  display: flex;
  text-transform: uppercase;
  padding: 20px 0;
  border-top: 1px solid $brand-color;
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

.product-detail {
  width: 70%;
  display: flex;
  .product-main {
    display: flex;
  }
  .scroll {
    padding-right: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1 1 0;
  }
  .arrow-up {
    margin-bottom: 10px;
  }
  .photo {
    margin-bottom: 10px;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    a {
      height: 150px;
      box-sizing: border-box;
      flex: 1 1 0;
      display: flex;
      padding-bottom: 10px;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .product-photo {
    flex: 2 1 0;
    img {
      width: 100%;
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
    width: 80%;
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
      width: 80%;
      padding-bottom: 15px;
      margin-bottom: 15px;
      color: $brand-color;
    }
  }
  h4 {
    font-size: 10px;
    width: 80%;
    letter-spacing: 1px;
    font-weight: 100;
    margin-bottom: 30px;
    border-bottom: 1px solid $brand-color;
    padding-bottom: 15px;
  }
}

a.button {
  text-decoration: none;
  color: white;
  background-color: $brand-color;
  padding: 10px 15px;
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


@media screen and (max-width: 1100px) {
  .product-detail {
    flex-direction: column;
    align-items: center;
    
    .product-info {
      padding-top: 30px;
      padding-left: 0;
    }

    .product-main {
      .product-photo {
        width: 50vw;
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
