<script>
import Title from "./atoms/Title.vue";
import ButtonCta from "./atoms/ButtonCTA.vue";

export default {
  components: {
    Title,
    ButtonCta,
  },
};
</script>

<template>
  <div class="container home">
    <Title title="Bienvenue soldat" />

    <button-cta text="Lancer une partie" />
  </div>
</template>

<style lang="scss">
@import "./sass/style.scss";

#app {
  height: 100vh;
  background-color: $background;

  .home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
