<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <Loop/>
</template>

<script>
import Loop from './components/Loop.vue'

export default {

  name: 'App',

  components: {
       Loop,
  }
}

</script>
