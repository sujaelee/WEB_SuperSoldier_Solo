<template>
    <div>
		
	<Cards v-if="this.$store.state.logined"/>
	<h1 v-else>
		학습을 위해 로그인이 필요합니다.
	</h1>
	</div>
</template>

<style>
</style>

<script>
    import Cards from '../components/Cards.vue';
    export default {
        name: 'card-wrapper',
        components: {
            Cards,
        },
        // data function avails data to the template
        data() {
            return {
               
            };
        },
    };
</script>