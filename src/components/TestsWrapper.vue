<template>
    <Tests v-bind:tests="tests" />
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
                tests: [{
                    title: '군부대',
                    explanation: '전국 군부대의 이름을 맞춰봅시다.',
					taken : false,
					score : '',
                }, {
                    title: '군사영어',
                    explanation: '군대에서 쓰이는 영어 용어들을 맞춰봅시다.',
					taken : true,
					score : 85
                },],
            };
        },
    };
</script>