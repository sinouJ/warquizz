<template>
    <div class="timer-bar">
        <span class="background-bar w-64">
            <span class="timer-bar" :style="`width: ${this.width}%`"></span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'TimerBar',
    props: {
        maxTime: {
            type: Number,
            default: 30000
        },
        interval: {
            type: Number
        }
    },
    data() {
        return {
            currentTime: 0,
            width: 0
        }
    },
    methods: {
        calcWidth : (maxTime, currentTime) => {
            return (currentTime / maxTime) * 100
        }
    },
    mounted() {
        const increment = setInterval(() => {
            this.currentTime += this.interval
            this.width = this.calcWidth(this.maxTime, this.currentTime, this.interval)
            if (this.currentTime >= this.maxTime) clearInterval(increment)
        }, this.interval)
    },
}
</script>
<style lang="scss">
@import '../sass/style.scss';

.timer {
    display: flex;
    justify-content: flex-end;

    span {
        display: block;
        position: relative;
        height: 4px;

        &.background-bar {
            background-color: white;
        }

        &.timer-bar {
            background-color: $primary;
        }
    }
}
</style>