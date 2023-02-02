<template>
    <div class="score">
        <Title title="Score"/>
        <p class="text-xl text-center">{{ score }}</p>
    </div>
</template>
<script>
import Title from '../atoms/Title.vue'

export default {
    name: 'Score',
    props: {
        score: Number
    },
    components: {
        Title
    }    
}
</script>
<style lang="scss">
    .score {
        p {
            color: white;
        }
    }
</style>