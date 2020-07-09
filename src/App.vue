<template>
  <div id="app">
    <nav class="mb-5 text-center">
      <b-button variant="outline-primary" class="mr-3" to="/hello_world">Go to Hello World</b-button>
      <b-button variant="outline-primary" to="/team_builder">Go to Team Builder</b-button>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #f6f6f6;
    padding-top: 60px;
  }

  html{
    background-color: #f6f6f6;
  }
</style>
