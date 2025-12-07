<template>
  <div id="app" class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center p-10 font-sans">

    <h1 class="text-5xl font-extrabold text-green-600 tracking-tight mb-10 drop-shadow-sm">
      Hello Vue 3!
    </h1>

    <Home />

  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: { Home }
}
</script>

<style>
/* All styling handled by Tailwind */
</style>
