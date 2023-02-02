<template>
    <div class="container game">
        <Score :score="score" />
        <Timer class="mt-5" />
        <Flag class="mt-8" :flag="currentQuestion?.flag" />
        <Question class="mt-8" question="Quel est ce drapeau ?" :index-question="indexQuestion"
            :max-index-question="maxIndexQuestion" />
        <ResponseChoice :choices="choices" class="mt-5" />
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
            score: 0,
            choices: [

            ]
        }
    },
    methods: {
        validAnswer: function () {
            if (this.indexQuestion === this.maxIndexQuestion) return
            this.indexQuestion++
            this.currentQuestion = this.questions[this.indexQuestion - 1]
        },
        shuffleArray: function (array) {
            array.sort(() => 0.5 - Math.random())
        },
    },
    async mounted() {
        this.countries = await FetchData.getapi('https://restcountries.com/v3.1/all?fields=name,flag')
        this.shuffleArray(this.countries)
        this.questions = this.countries.slice(0, this.maxIndexQuestion)
        this.currentQuestion = this.questions[0]
        // filtrer le tableau total et retirer la bonne réponse
        // push 3x des noms au hasard entre 0 et max length du tableau sans la bonne réponse
        this.choices.push(this.questions[0].name.common)
        this.countries = this.countries.filter(country => country.name.common != this.choices[0])
        const tempArray = [
            this.countries[0].name.common,
            this.countries[1].name.common,
            this.countries[2].name.common
        ]
        this.choices.push(...tempArray)
        this.shuffleArray(this.choices)
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