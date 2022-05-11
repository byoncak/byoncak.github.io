<template>
  <div class="nav-container">
    <div class="nav">
      <div class="connect button" @click="showSocials()">
        <img class="icon" src="@/assets/heart-solid.svg" />
      </div>

      <div class="skills button" :class="button">
        <img class="icon" src="@/assets/wand-magic-sparkles-solid.svg" />
      </div>
      <div class="github button" :class="button">
        <img class="icon" src="@/assets/code-commit-solid.svg" />
      </div>

      <div class="contact button" :class="button">
        <img class="icon" src="@/assets/address-card-solid.svg" />
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
  align-items: center;
  display: inline-flex;
  color: $green;
  font-size: 1em;
  font-weight: lighter;
  margin-top: 0px;
  transition: margin 0.2s ease-in-out;
  cursor: pointer;
}
.icon {
  padding: 16px;
  transition: margin 0.2s ease-in-out;
}

.button.active,
.button :hover {
  margin-top: -24px;
  transition: margin 0.2s ease-in-out;
  cursor: pointer;
}

.icon {
  filter: invert(87%) sepia(4%) saturate(4085%) hue-rotate(81deg)
    brightness(91%) contrast(81%);
  height: 2em;
}
</style>
