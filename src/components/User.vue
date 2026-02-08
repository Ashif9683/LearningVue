<template>
  <div
    class="bg-gray-900 text-red-400 font-semibold rounded-xl p-6 shadow-md border border-gray-700"
    ref="user"
  >
    <h1 class="text-2xl text-center">
      User Component
    </h1>
  </div>
</template>

<script>
    export default {
        name: "User",
        
        beforeUnmount(){
            console.log("User Component is about to be unmounted...", this.$refs['user']);
        },

        unmounted(){
            console.log("User Component is unmounted...", this.$refs['user']);
        }
    }
</script>