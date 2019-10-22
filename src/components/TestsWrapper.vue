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
                    title: '구급법',
                    project: '구급법에 대해 알아 봅니다.',
                    number: 30
                }, {
                    title: '화생방',
                    project: 'Project B',
                }, {
                    title: '정신전력',
                    project: 'Project C',
                }, {
                    title: '군부대',
                    project: 'Project D',
                }],
            };
        },
    };
</script>