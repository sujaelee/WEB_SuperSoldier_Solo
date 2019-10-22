<template>
    <Cards v-bind:cards="cards" />
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
                cards: [{
                    title: '구급법',
                    project: '구급법에 대해 알아 봅니다.',
                    number: 30
                }, {
                    title: '화생방',
                    project: 'Project B',
                    number: 30
                }, {
                    title: '정신전력',
                    project: 'Project C',
					number: 40
                }, {
                    title: '군부대',
                    project: 'Project D',
                }],
            };
        },
    };
</script>