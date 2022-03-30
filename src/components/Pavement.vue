<template>
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
</template>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;
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

@media screen and (max-width: 700px) {
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
}
</style>