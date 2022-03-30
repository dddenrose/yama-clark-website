<template>
  <div class="logo">
    <div class="line"></div>
    <router-link class="logo-box" :to="{ name: 'homerun' }"
      ><img src="../img/logo.png" alt="logo" style="width: 100px"
    /></router-link>
  </div>
</template>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

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
</style>