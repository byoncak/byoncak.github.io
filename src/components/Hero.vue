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
}

.title {
  font-weight: 200;
  color: $green;
  font-size: 2em;
  margin-top: 0px;
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
