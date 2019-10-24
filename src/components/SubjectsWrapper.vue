<template>

    <Subjects v-if="this.$store.state.logined"/>
	<h1 v-else>
		학습을 위해 로그인이 필요합니다.
	</h1>
</template>

<style>
</style>

<script>
    import Subjects from '../components/Subjects.vue';
    export default {
        name: 'subjects-wrapper',
        components: {
            Subjects,
        },
        // data function avails data to the template
        data() {
            return {
                
            };
        },
    };
</script>