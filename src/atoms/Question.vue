<template>
  <div class="contaier">
    <div class="question">
      <p>
        <span class="font-semibold">
          {{ indexQuestion }} / {{ maxIndexQuestion }}.
        </span>
        {{ question }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {
      type: String,
      default: "Default question text ?"
    },
    indexQuestion: Number,
    maxIndexQuestion: Number
  }
}
</script>

<style lang="scss">
  .question {

    p {
      color: white;
      font-size: 18px;
      font-family: 'Cabin', sans-serif;
    }
  }
</style>