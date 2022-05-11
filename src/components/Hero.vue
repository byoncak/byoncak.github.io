<template>
  <div class="hero">
    <div class="hero-block">
      <h1 class="title invisible one">Just a small town boy...</h1>
      <h1 class="title invisible two">&nbsp;doin' his best to get employed.</h1>
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
  margin-bottom: -8em;
  height: 72vh;
  max-height: 100%;
}

.hero-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.title {
  font-weight: 200;
  color: $green;
}
@media (max-width: 900px) {
  .title {
    font-size: 24px;
  }
  .title.two {
    margin-top: -8em;
  }
}

//ANIMATION
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
