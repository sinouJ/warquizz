<template>
    <div class="container game">
        <Score :score="30"/>
        <Timer class="mt-5" />
        <Flag class="mt-8" :flag="countries[1]?.flag" />
        <Question class="mt-8" :index-question="1" :max-index-question="10" />
        <ResponseChoice class="mt-5" />
        <button-cta text="Next"/>
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
            countries: []
        }
    },
    async mounted() {
        this.countries = await FetchData.getapi('https://restcountries.com/v3.1/all')
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