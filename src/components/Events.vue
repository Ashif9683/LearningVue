<template>

    <h1 class="box">Events Component</h1>
    <h2 v-on:mousemove="getConsole()">Mouse Move Event</h2>
    <button v-on:click="getData()">Click me!</button>
    <br><br>
    <button v-on:dblclick="dblClick()">DoubleClick</button>
    <h2>Count : {{ count }}</h2>

</template>

<script>
export default {
    name: 'Events',

    data(){
        return {
            count: 0
        }
    },

    methods:{
        getData(){
            this.count += 5;
        },

        getConsole(){
            console.log("Mouse Moved");
        },

        dblClick(){
            this.count +=10;
        },

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