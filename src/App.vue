<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>

  <Interpolation></Interpolation>
</template>

<script>
import Interpolation from './components/Interpolation.vue'

export default {

  name: 'App',

  components: {
       Interpolation,
  }
}

</script>
