<template>
  <div>
    <div class="mt-2.5" v-for="(choice, id) in choices" :key="id">
      <button-response
        :response="choice.response"
        @click="click(id)"
        :index="`${id + 1}`"
        :isAnswerRevealed="isAnswerRevealed"
        :isCorrect="choice.valid"
      />
    </div>
  </div>
</template>

<script>
import ButtonResponse from "../atoms/ButtonResponse.vue";

export default {
  name: "ResponseChoice",
  props: {
    choices: {
      type: Array,
      default: [
        "Default response text",
        "Default response text",
        "Default response text",
        "Default response text",
      ],
    },
    isAnswerRevealed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click: function (id) {
      this.$emit("click", id);
    },
  },
  components: {
    ButtonResponse,
  },
};
</script>

<style lang="scss"></style>
