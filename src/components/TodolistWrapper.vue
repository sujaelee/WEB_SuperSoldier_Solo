<template>
  <Todolist v-bind:todos="todos"/>
</template>

<style>
</style>

<script>
import Todolist from '../components/Todolist.vue';
export default {
  name: 'todo-wrapper',
  components: {
    Todolist,
  },
  // data function avails data to the template
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
};

</script>
