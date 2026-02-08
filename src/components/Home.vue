<template>
  <div class="flex flex-col items-center w-full min-h-screen bg-gray-50 p-10">

    <!-- Card -->
    <div class="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full border border-gray-100">

      <h2 class="text-3xl font-semibold text-gray-800 mb-4">
        Welcome to the Home Page
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed mb-6">
        This is the home page of our Vue.js application.  
        Explore, learn, and build amazing things with Vue 3 + Tailwind CSS!
      </p>

      <!-- Tabs -->
      <h3 class="text-xl font-medium text-gray-700 mb-3">All Tabs :</h3>

      <div class="flex gap-4">
        <button
          @click="tab = 'Java'"
          class="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Java
        </button>

        <button
          @click="tab = 'Node'"
          class="px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
        >
          Node
        </button>

        <button
          @click="tab = 'Php'"
          class="px-5 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
        >
          PHP
        </button>
      </div>
    </div>

    <!-- Dynamic Component Output -->
    <div class="mt-10 bg-white shadow-md rounded-xl p-8 max-w-xl w-full">
      <component :is="tab" />
    </div>

  </div>
</template>

<script>
import Java from './Java.vue';
import Node from './Node.vue';
import Php from './Php.vue';

export default {
  name: "Home",

  components: {
    Java,
    Node,
    Php
  },

  data() {
    return {
      tab: 'Java',
    };
  }
}
</script>
