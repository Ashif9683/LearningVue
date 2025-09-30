<template>

    <h1 class="box">Conditional Component</h1>

    <div>
        <button v-on:click="show = !show">Toggle</button>
        <h2 class="box" v-if="show">If Win! Work Hard</h2>
        <h2 class="box" v-else>Else! Work even harder</h2>
    </div>

</template>

<script>
export default {
    name: 'Conditional',

    data() {
        return {
            show: true,
        }
    }
}
</script>

<style scoped>
button {
    padding: 10px;
    background-color: grey;
    font-size: 20px;
}

.box {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px;
}
</style>