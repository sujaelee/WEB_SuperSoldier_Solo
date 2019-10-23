<template>
  <Subjects v-bind:subjects="subjects"/>
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
        title: '구급법',
        subtitle: '구급법에 대해 알아 봅니다.',
		taken: true,
      }, {
        title: '군사 영어',
        subtitle: '군대에서 쓰이는 영어 단어들에 대해 알아 봅니다.',
		taken: true,		  
      }, {
        title: '군부대',
        subtitle: '전국의 군부대의 편제와 이름에 대해 알아 봅니다.',
		taken: false,		  
      }
				
				
				],
    };
  },
};

</script>
