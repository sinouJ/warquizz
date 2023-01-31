<script>
import ButtonResponse from "./atoms/ButtonResponse.vue";

export default {
  components: {
    ButtonResponse,
  },
};
</script>

<template>
  <div class="container">
    <button-response index="A" response="Îles Malouines" />
  </div>
</template>

<style lang="scss">
@import "./sass/style.scss";

#app {
  height: 100vh;
  background-color: $background;
}
</style>
