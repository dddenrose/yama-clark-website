<template>
  <div class="notice">
    <i class="fas fa-check"></i>
    <h2>Product has been added to cart.</h2>
  </div>
</template>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.notice {
  font-weight: 100;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;
  text-transform: uppercase;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 50px 50px;
  text-align: center;
  z-index: 1;
  color: white;
  background-color: rgba($color: #000000, $alpha: .3);
  border-radius: 20px;
  transform: translate(-50%, -50%);
}

svg {
  font-size: 40px;
}
</style>