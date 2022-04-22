<template>
  <div class="category-main">
    <!-- <router-link class="shape-ex1" :to="{ name: 'productlist' }">
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
    > -->
    <div class="category">
      <router-link class="title" :to="{ name: 'productlist' }">
        men's watches</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="category">
      <router-link class="title" :to="{ name: 'productlist' }">
        ladies's watches</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="category">
      <router-link class="title" :to="{ name: 'productlist' }">
        accessories</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="category">
      <router-link class="title" :to="{ name: 'productlist' }">
        new release</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="category">
      <router-link class="title" :to="{ name: 'productlist' }">
        other</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">greenwich mean time</router-link
        >
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.category-main {
  display: flex;
  padding-top: 60px;
  .detail {
    display: none;
  }
  .category {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 20px;
    

    &:hover {
      .detail {
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: white;
        top: 25px;
        width: 200px;
        line-height: 2;
        align-items: flex-start;
        text-align: left;
        padding: 5px 10px 10px 10px;
        border: 1px solid rgba($color: #ececec, $alpha: 1.0);
        border-top: none;
        // box-shadow: 4px 6px 8px 1px rgba(0, 0, 0, 0.2);
        :first-child {
          padding-top: 5px;
        }
      }
    }
  }
  
  .title {
    padding-bottom: 15px;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: $gray-color;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-align: left;
    padding-bottom: 1px;
    transition: 0.3s ease-in;
  }

  a:hover {
    border-bottom: 1px solid $brand-color;
    color: $brand-color;
  }
}

@media screen and (max-width: 700px) {
  .category-main {
    display: flex;
    flex-direction: column;
  }

  .shape-ex1 {
    padding: 5px 0;
  }
}
</style>
