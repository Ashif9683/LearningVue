<template>
  <div class="flex justify-center w-full">
    
    <div class="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full border border-gray-100">
      
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">
        Welcome to the Home Page
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed">
        This is the home page of our Vue.js application.  
        Explore, learn, and build amazing things with Vue 3 + Tailwind CSS!
      </p>

    </div>

  </div>

  <Teleport to="#footer">
    <Footer />
  </Teleport>

</template>

<script>
import Footer from './Footer.vue';

export default {
  name: "Home",

  components: {
    Footer,
  }
}
</script>

<style>
/* Styling handled by Tailwind */
</style>
