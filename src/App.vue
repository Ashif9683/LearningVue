<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <Conditional/>
</template>

<script>
import Conditional from './components/Conditional.vue'

export default {

  name: 'App',

  components: {
       Conditional,
  }
}

</script>
