<template>
    <Tests  v-if="this.$store.state.logined"/>
	<h1 v-else>
		학습을 위해 로그인이 필요합니다.
	</h1>
</template>

<style>
</style>

<script>
    import Tests from '../components/Tests.vue';
    export default {
        name: 'test-wrapper',
        components: {
            Tests,
        },
        // data function avails data to the template
        data() {
            return {
                
            };
        },
    };
</script>