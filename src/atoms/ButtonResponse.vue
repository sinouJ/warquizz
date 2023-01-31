<template>
    <button>{{ response }}</button>
</template>

<script>
export default {
    name: "ButtonResponse",
    props: {
        response: String
    }
};

</script>

<style lang="scss" scoped>
@import '../sass/style.scss';

    button {
        background-color: $yellow;
    }
</style>
