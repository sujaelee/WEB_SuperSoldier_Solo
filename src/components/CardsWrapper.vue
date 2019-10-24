<template>
    <div>
		
	<Cards v-bind:cards="cards" v-if="this.$store.state.logined"/>
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
                cards: [{
                        title: '구급법',
                        number: 10
                    }, {
                        title: '군사 영어',
                        number: 10
                    }, {
                        title: '북한군 전술',
                        number: 10
                    }, {
                        title: '군부대',
                        number: 10						
                    },
                    {
                        title: '한식 조리 기능사',
                        number: 40
						
                    },
                ],
            };
        },
    };
</script>