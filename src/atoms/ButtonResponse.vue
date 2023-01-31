<template>
  <button>
    <p class="semibold">{{ index }}.</p>
    <p>{{ response }}</p>
  </button>
</template>

<script>
export default {
  name: "ButtonResponse",
  props: {
    response: String,
    index: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/style.scss";

button {
  font-family: "Cabin", sans-serif;
  display: block;
  width: 100%;
  background-color: $primary;
  padding: 20px 20px;
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: $radius;

  p {
    &:last-child {
      margin-left: 10px;
    }
  }
}
</style>
