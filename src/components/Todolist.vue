<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
	<div class='ui centered card' v-for="todo in todos"  v-bind:key="todo">
      <div class='header'>
        {{ todo.title }}
      </div>
	</div>
  </div>
</template>


<script type = "text/javascript" >

export default {  
    props: ['todos'],
}

</script>
<style>
</style>