<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>

        <h3>Form Modifiers</h3>
        <label>Name : </label>
        <input type="text" v-model.lazy="name">
        <br><br>
        <label>Age : </label>
        <input type="number" v-model.number="age">
        <br><br>
        <ul>
            <li>Your Name is : {{ name }}</li>
            <li>Your age is : {{ age }}</li>
        </ul>
    </div>
</template>
<script>    

export default {
    name : 'Home',

    data() {
        return {
            name: '',
            age: null,
        }
    }
}

</script>