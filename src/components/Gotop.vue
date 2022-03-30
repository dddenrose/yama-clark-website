<template>
  <div id="gotop" @click="toTop">
    <div class="box"></div>
    <div class="arrow up"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
#gotop {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    bottom: 2%;
    right: 2%;
  .arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    top: -15px;
    position: relative;
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
  .box {
      
    background-color: rgba($color: white, $alpha: .7);
    width: 25px;
    height: 25px;
    border-radius: 5px;
  }
}
</style>