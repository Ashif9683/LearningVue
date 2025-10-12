<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    Parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background: #f5f6fa;
  min-height: 100vh;
  padding: 40px;
}

h1 {
  color: #42b983;
  margin-bottom: 24px;
}
</style>
