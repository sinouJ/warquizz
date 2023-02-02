<template>
    <div>
        <div class="mt-2.5" v-for="(choice, id) in choices">
            <button-response :response="choice" :index="`${id+1}`" />
        </div>
    </div>
</template>

<script>
import ButtonResponse from '../atoms/ButtonResponse.vue';

export default {
    name: 'ResponseChoice',
    props: {
        choices: {
            type: Array,
            default: [
                'Default response text',
                'Default response text',
                'Default response text',
                'Default response text',
            ]
        }
    },
    components: {
        ButtonResponse
    }
}
</script>

<style lang="scss">

</style>