<template>

    <h1 class="box">Two-Way Binding Component</h1>

    <input type="text" v-model="count"/>
    <h2>Count : {{ count }}</h2>

</template>

<script>
export default {
    name: 'TwoWayBinding',

    data(){
        return {
            count: 0
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