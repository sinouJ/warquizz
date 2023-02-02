<template>
    <div>
        <div class="mt-2.5" v-for="(choice, id) in choices">
            <button-response :response="choice.response" @click="click(id)" :index="`${id+1}`" />
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
    methods: {
        click: function (id) {
            this.$emit('click', id)
        }
    },
    components: {
        ButtonResponse
    }
}
</script>

<style lang="scss">

</style>