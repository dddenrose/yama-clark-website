<template>
  <div class="features">
    <div class="goods">
      <i class="fas fa-globe-americas"></i>global delivery free
    </div>
    <div class="goods"><i class="fas fa-user-shield"></i>warranty free</div>
    <div class="goods">
      <i class="fas fa-glass-martini"></i>traditional skills
    </div>
  </div>
</template>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

.features {
  display: flex;
  text-transform: uppercase;
  padding: 20px 0;
  border-bottom: 1px solid $brand-color;
  border-top: 1px solid $brand-color;
  width: 70%;
  justify-content: center;
  font-size: 9px;
  letter-spacing: 1px;
  .goods {
    color: $brand-color;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  svg {
    font-size: 18px;
  }
}

@media screen and (max-width: 350px){
  .features {
    flex-direction: column;
  }

  .goods {
    padding: 10px 0;
  }
}
</style>