<template>
    <div class="container game">
        <Score :score="score" />
        <Timer class="mt-5" />
        <Flag class="mt-8" :flag="currentQuestion?.flag" />
        <Question class="mt-8" question="Quel est ce drapeau ?" :index-question="indexQuestion"
            :max-index-question="maxIndexQuestion" />
        <ResponseChoice class="mt-5" />
        <button-cta @click="validAnswer()" text="Suivant" />
    </div>
</template>
<script>
import { FetchData } from '../utils/fetch'
import ResponseChoice from '../components/ResponseChoice.vue'
import Timer from '../components/Timer.vue'
import Question from '../atoms/Question.vue'
import Flag from '../atoms/Flag.vue'
import Score from '../components/Score.vue'
import ButtonCta from '../atoms/ButtonCTA.vue'

export default {
    name: 'GameView',
    data() {
        return {
            countries: [],
            questions: [],
            currentQuestion: {},
            indexQuestion: 1,
            maxIndexQuestion: 10,
            score: 0
        }
    },
    methods: {
        validAnswer: function () {
            if (this.indexQuestion === this.maxIndexQuestion) return
            this.indexQuestion++
            this.currentQuestion = this.questions[this.indexQuestion - 1]
            console.log('click', this.indexQuestion)
        }
    },
    async mounted() {
        this.countries = await FetchData.getapi('https://restcountries.com/v3.1/all?fields=name,flag')
        this.countries.sort(() => 0.5 - Math.random())
        this.questions = this.countries.slice(0, this.maxIndexQuestion)
        this.currentQuestion = this.questions[0]
    },
    components: {
    ResponseChoice,
    Timer,
    Question,
    Flag,
    Score,
    ButtonCta
}
}
</script>
<style lang="scss">
    .game {
        .response {
            background-color: white;
            padding: 5px;
        }
    }
</style>