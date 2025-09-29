<template>

    <h1 class="box">Two inputs Two way binding component</h1>

    <h2>Enter Details</h2>
    <input type="text" v-model="name" placeholder="Enter your name"/>
    <br><br>
    <input type="email" v-model="email" placeholder="Enter your email"/>
    <br><br>

    <ul>
        <li><strong>Name:</strong> {{ name }}</li>
        <li><strong>Email:</strong> {{ email }}</li>
    </ul>



</template>

<script>

export default {
    name: 'TwoInputs',

    data(){
        return {
            name: '',
            email: '',
        }
    }
    
}

</script>


<style scoped>
.box {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px;
}
</style>