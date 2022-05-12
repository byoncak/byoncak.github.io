<template>
  <div class="hero">
    <div class="hero-block">
      <p class="title invisible one">Just a small town boy...</p>
      <p class="title invisible two">&nbsp;doin' his best to get employed.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBlock",
  data() {
    return {
      isLoading: true,
      title1: "Just a small town boy...",
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";

.hero {
  display: flex;
  justify-content: center;
  height: 72vh;
  max-height: 100%;
  margin-bottom: -6em;
}

.hero-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  max-height: 24%;
  animation: glitch 4s infinite;
}

.title {
  font-weight: 200;
  color: $green;
  font-size: 2em;
  margin-top: 0px;
}

//ANIMATION
@-webkit-keyframes glitch {
  0% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
  5% {
    -moz-transform: skewX(2deg);
    -ms-transform: skewX(2deg);
    -webkit-transform: skewX(2deg);
    transform: skewX(2deg);
    opacity: 0.88;
  }
  10% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    opacity: 1;
  }
  15% {
    -moz-transform: skewX(-3deg);
    -ms-transform: skewX(-3deg);
    -webkit-transform: skewX(-3deg);
    transform: skewX(-3deg);
    opacity: 0.88;
  }
  20% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    opacity: 1;
  }
  45% {
    -moz-transform: skewX(3deg);
    -ms-transform: skewX(3deg);
    -webkit-transform: skewX(3deg);
    transform: skewX(3deg);
    opacity: 0.88;
  }
  50% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    opacity: 1;
  }
  55% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    opacity: 0.88;
  }
  60% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    opacity: 1;
  }
  88% {
    -moz-transform: skewX(2deg);
    -ms-transform: skewX(2deg);
    -webkit-transform: skewX(2deg);
    transform: skewX(2deg);
  }
  80% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
  85% {
    -moz-transform: skewX(-4deg);
    -ms-transform: skewX(-4deg);
    -webkit-transform: skewX(-4deg);
    transform: skewX(-4deg);
    opacity: 0.88;
  }
  90% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    opacity: 1;
  }
  100% {
    -moz-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}

@-webkit-keyframes fading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
//Title Animation
.invisible {
  opacity: 0;
  -webkit-animation: fading ease-in 2.4s;
  animation: fading ease-in 2.4s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-duration: 2.4s;
  animation-duration: 2.4s;
}

.invisible.one {
}

.invisible.two {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
</style>
