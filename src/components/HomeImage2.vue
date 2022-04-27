<template>
  <div class="img">
    <img class="move-img" src="../img/s11.jpg" alt="image" />
    <div class="word">
      <h4 class="one">Always</h4>
      <h4 class="two">Be A</h4>
      <h4 class="three">Gentelman.</h4>
    </div>
    <div class="one-line">
      <h4>Always Be A Gentelman.</h4>
    </div>
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
    font-size: 150px;
    line-height: 1.2;
    // border-bottom: 1px solid white;
  }

  h4.one {
    top: 30vh;
    right: 30vw;
    animation-name: text-clip2;
    animation-duration: 5s;
  }

  h4.two {
    animation-name: two;
    animation-duration: 5.1s;
  }

  h4.three {
    animation-name: three;
    animation-duration: 5.2s;
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
    animation-duration: 6s;
    // border-bottom: 1px solid white;
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
    top: 50vh;
    left: 30vw;
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    top: 20vh;
    left: 30vw;
    opacity: 1;
  }

  75% {
    top: 20vh;
    left: 30vw;
    opacity: 1;
  }

  100% {
    top: 20vh;
    left: 30vw;
    opacity: 0;
  }
}

@keyframes two {
  0% {
    top: 90vh;
    left: 30vw;
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    top: 40vh;
    left: 30vw;
    opacity: 1;
  }

  75% {
    top: 40vh;
    left: 30vw;
    opacity: 1;
  }

  100% {
    top: 40vh;
    left: 30vw;
    opacity: 0;
  }
}

@keyframes three {
  0% {
    top: 110vh;
    left: 30vw;
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    top: 60vh;
    left: 30vw;
    opacity: 1;
  }

  75% {
    top: 60vh;
    left: 30vw;
    opacity: 1;
  }

  100% {
    top: 60vh;
    left: 30vw;
    opacity: 0;
  }
}

@keyframes four {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes inner-left {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: none;
  }
}

@keyframes text-clip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes text-clip2 {
  from {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  }
  to {
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
  }
}
</style>