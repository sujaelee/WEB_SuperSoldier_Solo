<template>
    <Subjects v-bind:subjects="subjects" v-if="this.$store.state.logined"/>
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
                subjects: [{
                        id: 1,
                        title: '구급법',
                        subtitle: '구급법에 대해 알아 봅니다.',
                        taken: true,
                    }, {
                        id: 2,
                        title: '군사 영어',
                        subtitle: '군대에서 쓰이는 영어 단어들에 대해 알아 봅니다.',
                        taken: true,
                    },
                    {
                        id: 3,
                        title: '군부대',
                        subtitle: '전국의 군부대의 편제와 이름에 대해 알아 봅니다.',
                        taken: false,
                    }, {
                        id: 4,
                        title: '국기검 - 한식 조리 기능사',
                        subtitle: '국기검 한식 조리 기능사 시험을 위한 기본 개념에 대해 알아 봅니다.',
                        taken: false,
                    }, {
                        id: 5,
                        title: '북한군 전술',
                        subtitle: '북한군의 전술에 대해 알아 봅니다.',
                        taken: true,
                    },
                ],
            };
        },
    };
</script>