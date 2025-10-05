<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
    <ClassBinding />
  </div>
</template>

<script>
import ClassBinding from './components/ClassBinding.vue'

export default {
  name: 'App',
  components: {
    ClassBinding
  }
}
</script>
