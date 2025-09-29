<template>
  <div id="app">
    <h1>Hello Vue 3!</h1>
  </div>
  <TwoWayBinding/>
  <TwoInputs/>
  <CheckBoxRadio/>
</template>

<script>
import TwoInputs from './components/TwoInputs.vue';
import TwoWayBinding from './components/TwoWayBinding.vue'
import CheckBoxRadio from './components/CheckBoxRadio.vue'

export default {

  name: 'App',

  components: {
       TwoWayBinding,
       TwoInputs,
       CheckBoxRadio,
  }
}

</script>
