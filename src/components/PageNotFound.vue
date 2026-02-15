<template>
    <div>
        <h1>{{ message }}</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script>    
export default {
    name: 'PageNotFound',
    data() {
        return {
            message: '404 - Page Not Found'
        }
    }
}
</script>