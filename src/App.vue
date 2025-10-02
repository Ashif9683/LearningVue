<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <Parent/>
</template>

<script>
import Parent from './components/Parent.vue'

export default {

  name: 'App',

  components: {
       Parent,
  }
}

</script>
