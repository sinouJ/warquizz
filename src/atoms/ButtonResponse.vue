<template>
  <button :class="isAnswerRevealed && isCorrect ? 'succes' : ''" @click.stop="click">
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
    selected: {
      type: Boolean,
      default: false
    },
    isCorrect: Boolean,
    isAnswerRevealed: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  methods: {
    click: function () {
      this.$emit('click')
    }
  }
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

  &.succes {
    background-color: $success;
  }

  p {
    &:last-child {
      margin-left: 10px;
    }
  }
}
</style>
