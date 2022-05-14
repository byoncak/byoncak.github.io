<template>
  <div class="home">
    <HeroBlock />
    <NavBlock />
  </div>
</template>

<script>
import HeroBlock from "@/components/Hero.vue";
import NavBlock from "@/components/Nav.vue";
export default {
  name: "HomeView",
  components: { HeroBlock, NavBlock },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";
h4 {
  color: $green;
  font-weight: 200;
}
</style>
