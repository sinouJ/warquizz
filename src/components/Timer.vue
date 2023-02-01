<template>
    <div class="timer">
        <div class="time-container">

            <Time :time="decrementTime" />
        </div>
        <TimerBar :max-time="maxTime" :interval="interval" />
    </div>
</template>

<script>
import TimerBar from '../atoms/TimerBar.vue'
import Time from '../atoms/Time.vue';

export default {
    name: "Timer",
    props: {
        maxTime: {
            type: Number,
            default: 30000
        },
        interval: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            decrementTime: this.maxTime,
            incrementTime: 0
        }
    },
    mounted() {
        const setTimer = setInterval(() => {
            this.decrementTime -= this.interval
            this.incrementTime += this.interval
            if (this.incrementTime === this.maxTime) clearInterval(setTimer)
        }, this.interval);
    },
    components: { TimerBar, Time }
}
</script>

<style lang="scss">
@import '../sass/style.scss';

.timer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .time-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}
</style>