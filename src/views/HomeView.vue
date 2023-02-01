<template lang="">
    <div class="container home">
        <Title title="Bienvenue soldat" />
        <button-cta text="Lancer une partie" />
    </div>
</template>
<script>
import Title from "../atoms/Title.vue";
import ButtonCta from "../atoms/ButtonCTA.vue";

export default {
  components: {
    Title,
    ButtonCta,
  },
};
</script>
<style lang="">
    
</style>