<template>
  <div class="category-main">
    <div class="title-main">
      <router-link class="title" :to="{ name: 'productlist' }">
        men's watches</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic watches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="title-main">
      <router-link class="title" :to="{ name: 'productlist' }">
        ladies's watches</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          elegant watches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }">
          casual watches</router-link
        >
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="title-main">
      <router-link class="title" :to="{ name: 'productlist' }">
        accessories</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          leather watches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> steel watches</router-link>
        <router-link :to="{ name: 'productlist' }"> sun glasses</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
      </div>
    </div>
    <div class="title-main">
      <router-link class="title" :to="{ name: 'productlist' }">
        new release</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic watches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
    <div class="title-main">
      <router-link class="title" :to="{ name: 'productlist' }">
        other</router-link
      >
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          classic watches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> casual watches</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // upHere: false,
    };
  },
};
</script>


<style scoped lang="scss">
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

a {
  text-decoration: none;
  text-transform: uppercase;
  color: $gray-color;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 2.5;
}

.category-main {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  position: relative;
  .title {
    transition: all .3s;
    &:hover {
      color: $brand-color;
    }
  }
  .detail {
    width: 14vw;
    padding: 0 10px;
    text-align: center;
    position: absolute;
    background-color: white;
    z-index: 1;
    top: 30px;
    padding-top: 10px;
    padding-bottom: 20px;
    display: none;
    flex-direction: column;
    border-bottom: 1px solid $brand-color;
    a {
      border-bottom: 1px solid rgba($color: white, $alpha: 0);
      transition: all .3s;
    }
    a:hover {
      border-bottom: 1px solid $brand-color;
    }
  }

  .title-main {
    
    width: 14vw;
    text-align: center;
    &:hover {
      .detail {
        display: flex;
      }
    }
  }
  
}

@media screen and (max-width: 700px) {
  .category-main {
    display: none;
  }
}
</style>
