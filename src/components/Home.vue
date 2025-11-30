<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>
        <h3>Computed Property</h3>
        <p>Reversed Message: {{ reversedMessage }}</p>
    </div>
</template>
<script>    

export default {
    name: 'Home',
    data() {
        return {
            message: 'Hello, Vue.js!'
        }
    },

    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}

</script>