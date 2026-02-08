<template>
  <!-- Section 1 -->
  <div class="flex justify-center w-full mt-10">
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

  <!-- Section 2 -->
  <div class="flex justify-center w-full mt-8">
    <div class="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full border border-gray-100 text-center">
      <h1 class="text-4xl font-bold text-red-700 mb-4" ref="count">
        {{ counter }}
      </h1>

      <button
        class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        v-on:click="counter = counter + 1"
      >
        Update Count
      </button>
    </div>
  </div>

  <!-- Section 3 -->
  <div class="flex justify-center w-full mt-8 mb-16">
    <div class="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full border border-gray-100">
      <h4 class="text-lg font-medium text-gray-700 mb-4">
        Before Unmounted (HTML still present) and Unmounted (HTML removed)
      </h4>

      <button
        class="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mb-4"
        v-on:click="show = !show"
      >
        Toggle
      </button>

      <User v-if="show" />
    </div>
  </div>
</template>
  
<script>
import User from './User.vue';

export default {
  name: "Home",

  components : {
    User
  },

  data() {
    return {
      counter : 0,
      show : true
    };
  },

  beforeCreate(){
    console.log("Component is about to be created...");
  },

  created(){
    console.log("Component is created...");
  },

  beforeMount(){
    console.log("Component is about to be mounted...");
  },

  mounted(){
    console.log("Component is mounted...");
  },

  beforeUpdate(){
    console.log("Component is about to update...", this.$refs['count'].textContent);
  },

  updated(){
    console.log("Component is updated...", this.$refs['count'].textContent);
  }
}
</script>

<style>
/* Styling handled by Tailwind */
</style>
