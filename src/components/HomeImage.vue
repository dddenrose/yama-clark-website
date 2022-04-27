<template>
  <div class="img">
    <img class="move-img" src="../img/s16.jpg" alt="image" />
    <div class="word">
      <h4 class="one">Always</h4>
      <h4 class="two">Be A</h4>
      <h4 class="three">Gentelman.</h4>
    </div>
    <!-- <div class="one-line">
      <h4>Always Be A Gentelman.</h4>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

img {
  vertical-align: top;
}

.img {
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.word {
  h4 {
    font-family: "newyork";
    font-weight: 100;
    letter-spacing: 5px;
    position: absolute;
    color: white;
    font-size: 120px;
    border-bottom: 1px solid white;
  }

  h4.one {
    bottom: calc(10vh + 300px);
    left: 10vw;
    animation-name: one;
    animation-duration: 2s;
  }

  h4.two {
    bottom: calc(10vh + 150px);
    left: 10vw;
    animation-name: two;
    animation-duration: 2.1s;
  }

  h4.three {
    bottom: 10vh;
    left: 10vw;
    animation-name: three;
    animation-duration: 2.2s;
  }
}

.move-img {
  animation-name: move;
  animation-duration: 3s;
}

.one-line {
  h4 {
    top: 45vh;
    left: 30vw;
    font-family: "newyork";
    font-weight: 50;
    letter-spacing: 5px;
    position: absolute;
    color: white;
    font-size: 70px;
    line-height: 1.2;
    animation-name: four;
    animation-duration: 4s;
    border-bottom: 1px solid white;
  }
}

@keyframes move {
  from {
    top: 90vh;
    left: 30vw;
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes one {
  0% {
    bottom: -20vh;
    left: 10vw;
    opacity: 0;
  }
}

@keyframes two {
  0% {
    bottom: -20vh;
    left: 10vw;
    opacity: 0;
  }
}

@keyframes three {
  0% {
    bottom: -20vh;
    left: 10vw;
    opacity: 0;
  }
}

//RWD

@media screen and (max-width: 850px) {
  .img {
    height: 80vh;
  }
}

@media screen and (max-width: 800px) {
  .word {
    h4 {
      font-size: 90px;
    }

    h4.one {
      bottom: calc(10vh + 250px);
      left: 10vw;
    }

    h4.two {
      bottom: calc(10vh + 120px);
      left: 10vw;
    }

    h4.three {
      bottom: 10vh;
      left: 10vw;
    }
  }
}

@media screen and (max-width: 600px) {
  .word {
    h4 {
      font-size: 60px;
    }

    h4.one {
      bottom: calc(10vh + 160px);
      left: 10vw;
    }

    h4.two {
      bottom: calc(10vh + 80px);
      left: 10vw;
    }

    h4.three {
      bottom: 10vh;
      left: 10vw;
    }
  }
}

@media screen and (max-width: 450px) {
  .img {
    height: 70vh;
  }

  .word {
    h4 {
      font-size: 40px;
    }

    h4.one {
      bottom: calc(10vh + 120px);
      left: 10vw;
    }

    h4.two {
      bottom: calc(10vh + 60px);
      left: 10vw;
    }

    h4.three {
      bottom: 10vh;
      left: 10vw;
    }
  }
}
</style>