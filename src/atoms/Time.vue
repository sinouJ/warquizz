<template>
    <div class="time">
        <p>{{ time / 1000 }}s.</p>
    </div>
</template>
<script>
export default {
    name: 'Time',
    props: {
        time: Number,
    },
    mounted() {
        this.currentTime = this.maxTime
    }
}
</script>
<style lang="scss">
.time {
    p {
        color: white;
        font-family: 'Cabin', sans-serif;
    }
}
</style>