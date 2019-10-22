<template>
  <Subjects v-bind:subjects="subjects"/>
</template>

<style>
</style>

<script>
import Subjects from '../components/Subjects.vue';
export default {
  name: 'todo-wrapper',
  components: {
    Subjects,
  },
  // data function avails data to the template
  data() {
    return {
      subjects: [{
        title: '화생방',
        project: '화생방에 대해 알아 봅니다.',
      }, {
        title: '구급법',
        project: '대충',
      }, {
        title: '정신전력',
        project: '대충',
      }, {
        title: '군부대',
        project: '대충',
      }],
    };
  },
};

</script>
