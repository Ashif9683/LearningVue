<template>
  <div id="app" class="min-h-screen bg-linear-to-b from-gray-50 to-gray-200 flex flex-col items-center p-10 font-sans">

    <h1 class="text-5xl font-extrabold text-green-600 tracking-tight mb-10 drop-shadow-sm">
      Hello Vue 3!
    </h1>
    <div class="flex space-x-6 mb-10">
        <router-link to="/" class="text-lg text-gray-700 hover:text-green-600 transition-colors duration-100 mb-4">
          Home
        </router-link>
        <router-link to="/login" class="text-lg text-gray-700 hover:text-green-600 transition-colors duration-100 mb-4">
          Login
        </router-link>  
        <router-link to="/profile/1" class="text-lg text-gray-700 hover:text-green-600 transition-colors duration-100 mb-4">
         1'st Profile
        </router-link>  
        <router-link to="/profile/2" class="text-lg text-gray-700 hover:text-green-600 transition-colors duration-100 mb-4">
          2'nd Profile
        </router-link>  
    </div>
    <router-view class="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6" />
  </div>
</template>

<script>
</script>

<style>
/* All styling handled by Tailwind */
</style>
