<template>
  <router-view />
</template>

<style lang="scss">
@import "@/global-styles/colors.sass";

#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #070606;
  height: 100%;
}
html {
  max-height: 100%;
  background-color: #070606;
}

body {
  max-height: 100%;
}

nav {
  a {
    font-weight: bold;
    color: #f5f5f5;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
