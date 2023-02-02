<template>
    <div class="container game">
        <Timer class="mt-12" />
        <Flag class="mt-12" :flag="countries[1]?.flag" />
        <Question class="mt-12" :index-question="1" :max-index-question="10" />
        <ResponseChoice class="mt-12" />
    </div>
</template>
<script>
import { FetchData } from '../utils/fetch'
import ResponseChoice from '../components/ResponseChoice.vue'
import Timer from '../components/Timer.vue'
import Question from '../atoms/Question.vue'
import Flag from '../atoms/Flag.vue'

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
    Flag
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