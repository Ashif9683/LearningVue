<template>
    <div class="home">
        <h2>Welcome to the Ref Page</h2>
        <p>This is the home page of our Vue.js application.</p>

        <input type="text" ref="nameInput">
        <button @click="getData">Click me</button>

        <!-- Add Child Component -->
        <Child ref="childRef" />

        <!-- Show the name from Child -->
        <h3>Child Name: {{ childName }}</h3>
        <button @click="showChildName">Get Child Name</button>
    </div>
</template>

<script>
import Child from "./Child.vue"

export default {
    components: { Child },

    name: "Home",

    data() {
        return {
            childName: ""
        }
    },

    methods: {
        getData() {
            this.$refs.nameInput.focus();
            let val = this.$refs.nameInput.value;
            console.warn(val);
            this.$refs.nameInput.style.color = "red";
        },

        showChildName() {
            // Access the child component instance using ref
            this.childName = this.$refs.childRef.getName();
            console.log("Child name:", this.childName);
        }
    }
}
</script>

<style scoped>
.home {
    max-width: 500px;
    margin: 40px auto;
    padding: 24px;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

h2 {
    color: #2c3e50;
    margin-bottom: 12px;
}

input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
}

button {
    padding: 8px 16px;
    background: #42b983;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
}

button:hover {
    background: #369870;
}

h3 {
    margin-top: 24px;
    color: #34495e;
}
</style>
