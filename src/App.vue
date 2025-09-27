<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <Events/>
</template>

<script>
import Events from './components/Events.vue'

export default {

  name: 'App',

  components: {
       Events,
  }
}

</script>
