<template>
    <div class="container game">
        <Timer />
        <ResponseChoice />
    </div>
</template>
<script>
import { FetchData } from '../utils/fetch'
import ResponseChoice from '../components/ResponseChoice.vue'
import Timer from '../components/Timer.vue'

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
    Timer
}
}
</script>
<style lang="scss">

</style>