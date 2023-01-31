<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
h1 {
  display: block;
  width: 100%;
  font-family: "Righteous", cursive;
  text-align: center;
  color: white;
  font-size: 36px;
}
</style>
