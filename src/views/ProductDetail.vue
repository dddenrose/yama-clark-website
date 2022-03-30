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
              <router-link :to="{ name: 'homerun' }">home</router-link>
              <router-link :to="{ name: 'productlist' }"
                >productlist</router-link
              >
              <div class="social-media">
                <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
                <a class="icon" href="#"
                  ><i class="fab fa-instagram-square"></i
                ></a>
                <a class="icon" href="#"
                  ><i class="fab fa-twitter-square"></i
                ></a>
                <a class="icon" href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
            <div class="bar-2">
              <router-link :to="{ name: 'login' }">login</router-link>
            </div>
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
      <div class="features">
        <div class="goods">
          <i class="fas fa-globe-americas"></i>global delivery free
        </div>
        <div class="goods"><i class="fas fa-user-shield"></i>warranty free</div>
        <div class="goods">
          <i class="fas fa-glass-martini"></i>traditional skills
        </div>
      </div>
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
    <div class="footer">
      <div class="container">
        <div class="information">
          <div class="info logo">
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

    text-decoration: none;
    align-items: center;

    .bar-1 {
      flex: 1;
      margin-left: 50px;
      display: flex;
      align-items: center;
    }

    .bar-2 {
      a {
        color: $brand-color;
      }
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

//RWD

.rwd-bar {
  display: none;
}

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
  .header {
    .nav {
      .top-bar {
        align-items: flex-start;
        .bar-1 {
          display: flex;
          flex-direction: column;
          margin-left: 5%;
          align-items: flex-start;
          a {
            margin: 5px 0;
            border-bottom: 1px solid white;
            padding-bottom: 2px;
          }
          svg {
            margin-right: 5px;
          }
        }
        .bar-2 {
          height: 15px;
          margin-right: 5%;
          align-items: flex-start;
        }
      }
    }
  }

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

  .footer {
    padding: 50px 0;
    .container {
      display: flex;
      align-items: flex-start;

      .information {
        flex: 1 1 0;
        .info {
          display: none;
          img {
            width: 60px;
          }
          &.logo {
            display: flex;
          }
          h4 {
            width: 100%;
          }
        }
      }

      .bottom-word {
        display: flex;
        width: 100%;
        margin: 0;
        flex: 3 1 0;
      }
    }
  }

  .pavement-bar {
    .container {
      flex-direction: column;
    }
    .pay {
      margin: 0;
    }
    .information {
      display: flex;
      width: 40%;
      margin: 10px 0;
    }
  }

  .photo-bar {
    padding-bottom: 30px;
    .info.topic {
      flex-direction: column;
    }
    .title {
      padding-bottom: 2vh;
      font-size: 13vw;
    }
  }
}
</style>
