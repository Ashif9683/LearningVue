<template>
    <div class="user">
        <ul>
            <li>Name : {{ data.name }}</li>
            <li>Name : {{ data.email }}</li>
            <li><button v-on:click="getData(data.name)">Alert Name</button></li>
        </ul>
        <br><br>
    </div>
</template>

<script>
export default {
    name: 'User',

    props: {
        data: Object,
        getData: Function,
    }
}
</script>
<style>
.user {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.user ul {
    list-style-type: none;
    padding: 0;
}

.user li {
    margin: 5px 0;
}

.user button {
    padding: 5px 10px;
    border: none;
    background-color: #42b983;
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
</style>
