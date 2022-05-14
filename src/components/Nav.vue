<template>
  <div class="nav-container">
    <div class="nav">
      <div class="connect button" @click="showSocials()">
        <div class="svg-wrapper">
          <img class="icon" src="@/assets/heart-solid.svg" />
        </div>
      </div>

      <div class="skills button" :class="button">
        <div class="svg-wrapper">
          <img class="icon" src="@/assets/wand-magic-sparkles-solid.svg" />
        </div>
      </div>

      <div class="github button" :class="button">
        <div class="svg-wrapper">
          <img class="icon" src="@/assets/code-commit-solid.svg" />
        </div>
      </div>

      <div class="contact button" :class="button">
        <div class="svg-wrapper">
          <img class="icon" src="@/assets/address-card-solid.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBlock",
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";

.locations {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-end;
  margin-top: 8em;
  margin-right: 2em;
}

.location {
  display: flex;
  justify-self: left;
  align-items: center;
  font-size: 0.6em;
  margin-bottom: 2em;
  color: $green;
}

.svg-wrapper {
  filter: drop-shadow(0px 0px 5px rgba(#73d393, 1));
}

img.icon {
  filter: invert(87%) sepia(4%) saturate(4085%) hue-rotate(81deg)
    brightness(91%) contrast(81%);
  animation: glitch 4s infinite;
}

.nav-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4.8em;
  transition: margin 0.2s ease-in-out;
}

.button {
  padding: 24px;
  align-items: center;
  display: inline-flex;
  color: $green;
  font-size: 1em;
  font-weight: lighter;
  margin-top: 0px;
  transition: margin 0.3s ease-in-out;
  background: transparent;
  cursor: pointer;
}
.icon {
  height: 2em;
}

.button:hover {
  margin-top: -24px;
  transition: margin 0.3s ease-in-out;
  cursor: pointer;
}

//animations
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
</style>
