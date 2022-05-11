<template>
  <div class="nav-container">
    <div class="nav">
      <div class="connect button">
        <img class="icon" src="@/assets/heart-solid.svg" />
        <h2>Connect</h2>
      </div>

      <div class="skills button">
        <img class="icon" src="@/assets/wand-magic-sparkles-solid.svg" />
        <h2>Skills</h2>
      </div>
      <div class="github button">
        <img class="icon" src="@/assets/code-commit-solid.svg" />
        <h2>GitHub</h2>
      </div>

      <div class="contact button">
        <img class="icon" src="@/assets/address-card-solid.svg" />
        <h2>Contact</h2>
      </div>
    </div>
    <div class="locations">
      <div class="home location button">
        <img class="icon" src="@/assets/location-crosshairs-solid.svg" />
        <h2>Home Location</h2>
      </div>
      <div class="current location button">
        <img class="icon" src="@/assets/location-crosshairs-solid.svg" />
        <h2>Current Location</h2>
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

.location.button {
  display: flex;
  justify-self: left;
  font-size: 0.6em;
  margin-bottom: 2em;
}

.nav-container {
  display: flex;

  flex-direction: column;
  height: 100%;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8em;
}

.button {
  align-items: center;
  display: inline-flex;
  color: $green;
  font-size: 1em;
  font-weight: lighter;
}

.icon {
  filter: invert(87%) sepia(4%) saturate(4085%) hue-rotate(81deg)
    brightness(91%) contrast(81%);
  height: 2em;
  margin-right: 0.8em;
}
</style>
