<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
    <HTMLbinding />
  </div>
</template>

<script>
import HTMLbinding from './components/HTMLbinding.vue'

export default {
  name: 'App',
  components: {
    HTMLbinding
  }
}
</script>
