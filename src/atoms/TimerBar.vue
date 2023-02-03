<template>
  <div class="timer-bar">
    <span class="background-bar w-72">
      <span class="timer-bar" :style="`width: ${calcWidth}%`"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: "TimerBar",
  props: {
    maxTime: {
      type: Number,
      default: 30000,
    },
    time: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    calcWidth() {
      return (this.time / this.maxTime) * 100;
    },
  },
};
</script>
<style lang="scss">
@import "../sass/style.scss";

.timer {
  display: flex;
  justify-content: flex-end;

  span {
    display: block;
    position: relative;
    height: 4px;

    &.background-bar {
      background-color: white;
    }

    &.timer-bar {
      transition: width ease 1.5s;
      background-color: $primary;
    }
  }
}
</style>
