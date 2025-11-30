<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>
        <h3>Count : {{ count }}</h3>
        <button v-on:click="count += 1"> + </button><br><br>
        <button v-on:click="count -= 1"> - </button>
    </div>
</template>
<script>    
export default {
    name: 'Home',
    data() {
        return {
            count: 0
        };
    },

    watch: {
        count(val) {
            if (val > 5 || val < 0) {
                this.count = 0;
            }
        }
    }
};
</script>