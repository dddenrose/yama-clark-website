<template>
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
        Centre, The Wing, Reading Road, Henley-on-Thames, Oxfordshire, RG9 4GE.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;
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

@media screen and (max-width: 700px) {
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
}

@media screen and (max-width: 450px) {
  .footer {
    display: none;
  }
}
</style>