<template>
    <div class="flag">
        <div>
            <p class="text-9xl">{{ flag }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Flag',
    props: {
        flag: String
    }
}
</script>

<style lang="scss">
.flag {
            p {
                text-align: center;
            }
        }
</style>