<template>
  <svg
    class="spinner"
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="path"
      fill="none"
      stroke-linecap="round"
      cx="33"
      cy="33"
      r="30"
    ></circle>
  </svg>
</template>


<style lang="scss" scoped>

$brand-color: #bfb094;
$gray-color: #5b5b5b;
$green-color: #3e5940;

$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
  margin: 100px 0;
}

svg {
    
width:65px;
height:65px;
}

circle {
  stroke-width:3;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite,
    colors ($duration * 4) ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: $brand-color;
  }
  25% {
    stroke: $brand-color;
  }
  50% {
    stroke: $brand-color;
  }
  75% {
    stroke: $brand-color;
  }
  100% {
    stroke: $brand-color;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>