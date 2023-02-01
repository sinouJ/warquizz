<script>
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./sass/style.scss";

#app {
  height: 100vh;
  background-color: $background;
  position: fixed;
  inset: 0;

  .home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
