<template>
    <div>
        <p v-if="countries && countries.length > 0">{{ countries[1].name.common }}</p>
        <p v-else>Loading</p>
    </div>
</template>
<script>
import { FetchData } from '../utils/fetch'

export default {
    name: 'GameView',
    data() {
        return {
            countries: []
        }
    },
    async mounted() {
        const apiRes = await FetchData.getapi('https://restcountries.com/v3.1/all')
        this.countries = apiRes
    }
}
</script>
<style lang="scss">

</style>