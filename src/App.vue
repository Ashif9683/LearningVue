<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <Methods/>
</template>

<script>
import Methods from './components/Methods.vue'

export default {

  name: 'App',

  components: {
       Methods,
  }
}

</script>
