<template>
  <div class="container game">
    <Score :score="score" />
    <div v-if="indexQuestion <= 10">
      <Timer
        :time="time"
        :remainingTime="remainingTime"
        :maxTime="maxTime"
        class="mt-5"
      />
      <Flag class="mt-8" :flag="currentQuestion?.flag" />
      <Question
        class="mt-8"
        question="Quel est ce drapeau ?"
        :index-question="indexQuestion"
        :max-index-question="maxIndexQuestion"
      />
      <ResponseChoice
        :isAnswerRevealed="isAnswerRevealed"
        @click="setAnswer"
        :choices="choices"
        class="mt-5"
      />
      <button-cta v-if="isAnswerRevealed" @click="validAnswer" text="Suivant" />
    </div>
    <div class="flex justify-center" v-else>
      <button-cta text="Rejouer" />
    </div>
  </div>
</template>
<script>
import { FetchData } from "../utils/fetch";
import ResponseChoice from "../components/ResponseChoice.vue";
import Timer from "../components/Timer.vue";
import Question from "../atoms/Question.vue";
import Flag from "../atoms/Flag.vue";
import Score from "../components/Score.vue";
import ButtonCta from "../atoms/ButtonCTA.vue";

export default {
  name: "GameView",
  data() {
    return {
      countries: [],
      questions: [],
      currentQuestion: {},
      indexQuestion: 1,
      maxIndexQuestion: 10,
      score: 0,
      choices: [],
      maxTime: 30000,
      interval: 1000,
      time: 0,
      remainingTime: 30000,
      isAnswerRevealed: false,
    };
  },
  methods: {
    validAnswer: function () {
      if (this.indexQuestion === this.maxIndexQuestion) return;
      this.indexQuestion++;
      this.currentQuestion = this.questions[this.indexQuestion - 1];
    },
    shuffleArray: function (array) {
      array.sort(() => 0.5 - Math.random());
    },
    setAnswer: function (id) {
      if (id == this.choices.findIndex((choice) => choice.valid === true)) {
        this.score++;
      }
      this.isAnswerRevealed = !this.isAnswerRevealed;
      //   this.indexQuestion++;
      //   this.setQuestion();
      //   this.resetTime();
      return;
    },
    setQuestion: function () {
      this.currentQuestion = this.questions[this.indexQuestion - 1];
      this.choices = [];
      this.choices.push({
        response:
          this.questions[this.indexQuestion - 1].translations.fra.common,
        valid: true,
        selected: false,
      });
      this.shuffleArray(this.countries);
      this.countries = this.countries.filter(
        (country) => country.translations.fra.common != this.choices[0].response
      );
      const tempArray = [
        {
          response: this.countries[0].translations.fra.common,
          valid: false,
          selected: false,
        },
        {
          response: this.countries[1].translations.fra.common,
          valid: false,
          selected: false,
        },
        {
          response: this.countries[2].translations.fra.common,
          valid: false,
          selected: false,
        },
      ];
      this.choices.push(...tempArray);
      this.shuffleArray(this.choices);
    },
    setTimer: function () {
      const updateTimer = setInterval(() => {
        this.remainingTime -= this.interval;
        this.time += this.interval;
        if (this.time === this.maxTime) clearInterval(updateTimer);
      }, this.interval);
    },
    validAnswer: function () {
      this.setQuestion();
    },
    revealAnswer: function () {
      this.isNextButtonDisplayed = true;
    },
    resetTime: function () {
      this.time = 0;
      this.remainingTime = 30000;
    },
  },
  async mounted() {
    this.countries = await FetchData.getapi(
      "https://restcountries.com/v3.1/all?fields=translations,flag"
    );
    this.shuffleArray(this.countries);
    this.questions = this.countries.slice(0, this.maxIndexQuestion);
    this.setQuestion();
    this.setTimer();
  },
  components: {
    ResponseChoice,
    Timer,
    Question,
    Flag,
    Score,
    ButtonCta,
  },
};
</script>
<style lang="scss">
.game {
  .response {
    background-color: white;
    padding: 5px;
  }
}
</style>
