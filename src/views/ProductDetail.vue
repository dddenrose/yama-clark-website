<template>
  <div class="hello">
    <div class="header">
      <div class="nav">
        <div class="container-top">
          <div class="top-bar">
            <div class="bar-1">
              <a href="#" class="shopping"
                >shopping list <i class="fas fa-shopping-cart"></i
              ></a>
              <a href="#">about us</a>
              <a href="#">contact</a>
              <a class="icon" href="#"><i class="fab fa-facebook"></i></a>
              <a class="icon" href="#"
                ><i class="fab fa-instagram-square"></i
              ></a>
              <a class="icon" href="#"><i class="fab fa-twitter-square"></i></a>
              <a class="icon" href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="bar-2">login</div>
          </div>
          <div class="logo">
            <div class="line"></div>
            <img src="../img/logo.png" alt="logo" style="width: 100px" />
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="product-detail">
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
          <a href="#"><img src="../img/p02.jpg" alt="product" /></a>
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
          <router-link class="button" :to="{ name:'shoppinglist'}">ADD TO CART</router-link>
          
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
          <div class="info">
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
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//全域設定
$brand-color: #bfb094;
$gray-color: #5b5b5b;
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
    text-align: left;
    text-decoration: none;

    .bar-1 {
      flex: 1;
      margin-left: 50px;
    }

    .bar-2 {
      color: $brand-color;
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
    margin-top: 30px;

    .line {
      width: 450px;
      border-top: 1px solid $brand-color;
      position: relative;
      top: 30px;
    }

    img {
      margin: 0 40px;
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

.product-detail {
  width: 70%;
  display: flex;
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
    color: white;
    border-bottom: 1px solid white;
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
</style>
