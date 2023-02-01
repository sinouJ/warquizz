<template>
    <div>
        <div class="mt-2.5" v-for="choice in choices">
            <button-response response="DefaultText response" :index="choice" />
        </div>
    </div>
</template>

<script>
import ButtonResponse from '../atoms/ButtonResponse.vue';

export default {
    name: 'ResponseChoice',
    data() {
        return {
            choices: ['A', 'B', 'C', 'D']
        }
    },
    components: {
        ButtonResponse
    }
}
</script>

<style lang="scss">

</style>