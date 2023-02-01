<template>
  <router-link to="/game">
    <button class="w-40 mt-8">
      <p>{{ text }}</p>
    </button>
  </router-link>
</template>

<script>
export default {
  name: "ButtonCTA",
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
@import "../sass/style.scss";

button {
  font-family: "Cabin", sans-serif;
  display: block;
  width: 100%;
  background-color: $primary;
  padding: 15px 0px;
  font-size: 18px;
  font-weight: $semibold;
  color: white;
  border-radius: $radius;
}
</style>
