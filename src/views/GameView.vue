<template>
    <div class="container game">
        <Timer class="mt-12" />
        <Question 
            class="mt-12"
            :index-question="1"
            :max-index-question="10"
        />
        <ResponseChoice class="mt-12" />
    </div>
</template>
<script>
import { FetchData } from '../utils/fetch'
import ResponseChoice from '../components/ResponseChoice.vue'
import Timer from '../components/Timer.vue'
import Question from '../atoms/Question.vue'

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
    Question
}
}
</script>
<style lang="scss">

</style>