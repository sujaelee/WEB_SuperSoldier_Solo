<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Main from '@/components/Main.vue'

  export default {
    name: 'app',
    components: {
      Header,
      Main
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>
