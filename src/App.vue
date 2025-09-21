<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <Home/>
</template>

<script>
import Home from './components/Home.vue'

export default {

  name: 'App',

  components: {
       Home,
  }
}

</script>
