<template>
    <div class="user-container">
        <h2>User Component</h2>
        <button v-on:click="getUser(userName)">Send the childUserName</button>
    </div>
</template>
<script>
export default {
    name: "User",
    data() {
        return {
            userName: "Ashif"
        }
    },
    props: {
        getUser: Function
    }
}
</script>
<style scoped>
.user-container {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    background: #f9f9f9;
}
h2 {
    color: #2c3e50;
    margin-bottom: 16px;
}
button {
    background: #42b983;
    color: #fff;
    border: none;
    padding: 10px 18px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background: #369870;
}
</style>