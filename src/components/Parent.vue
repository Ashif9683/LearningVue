<template>
    <h1 class="box">Pass Data Parent to Child Component</h1>

    <Child name = "Ashif" :user="user" :getTech="getTech"/>
</template>

<script>
import Child from './Child.vue';

export default {
    name: 'Parent',

    components:{
        Child,
    },

    data() {
        return {
            user: {
                role: 'Ashif',
                company: 'Webkul',
            }
        }
    },

    methods: {
        getTech(){
            return ["Laravel", "Vue", "RestApi", "GraphQL", "MySql"]
        }
    }
}
</script>

<style>
.box {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px;
}
</style>