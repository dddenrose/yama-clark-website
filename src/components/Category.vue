<template>
  <div class="category-main">
    <div class="title-main">
      <router-link class="title" :to="{ name: 'productlist' }">
        men's watches</router-link
      >
      <router-link class="title" :to="{ name: 'productlist' }">
        ladies's watches</router-link
      >
      <router-link class="title" :to="{ name: 'productlist' }">
        accessories</router-link
      >
      <router-link class="title" :to="{ name: 'productlist' }">
        new release</router-link
      >
      <router-link class="title" :to="{ name: 'productlist' }">
        other</router-link
      >
    </div>

    <div class="category">
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
      <div class="detail">
        <router-link :to="{ name: 'productlist' }"> chronometres</router-link>
        <router-link :to="{ name: 'productlist' }">
          elegant watches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
        <router-link :to="{ name: 'productlist' }">
          casual wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }">
          greenwich mean time</router-link
        >
      </div>
      <div class="detail">
        <router-link :to="{ name: 'productlist' }">
          leather wateches</router-link
        >
        <router-link :to="{ name: 'productlist' }"> steel watches</router-link>
        <router-link :to="{ name: 'productlist' }"> sun glasses</router-link>
        <router-link :to="{ name: 'productlist' }"> power reserve</router-link>
      </div>
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

.category-main {
  display: flex;
  margin-top: 60px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  &:hover {
    .category {
      display: flex;
    }
  }

  .category {
    display: none;
    position: absolute;
    z-index: 1;
    background-color: white;
    top: 15px;
    width: 100%;
    transition: all 0.3s ease-in;
    justify-content: center;
    padding: 30px 100px 100px 100px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(222, 222, 222);
    .detail {
      padding: 0px 10px;
      display: flex;
      flex-direction: column;
      top: 25px;
      width: 14vw;
      align-items: center;
      text-align: center;
      border-top: none;
      a {
        margin-bottom: 20px;
        text-align: center;
      }
      :last-child {
        padding-bottom: 30px;
        border-bottom: 1px solid $brand-color;
      }
    }
  }

  .title {
    width: 14vw;
    
    padding: 0px 10px;
    padding-bottom: 10px;
    text-align: center;
  }

  .title-main {
    display: flex;
    justify-content: center;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: $gray-color;
    font-size: 10px;
    letter-spacing: 1.5px;
    padding-bottom: 1px;
    transition: 0.3s ease-in;
    border-bottom: 1px solid white;
  }

  .detail {
    a:hover {
      border-bottom: 1px solid $brand-color;
      color: $brand-color;
    }
  }
}

@media screen and (max-width: 700px) {
  .category-main {
    display: none;
  }
}
</style>
