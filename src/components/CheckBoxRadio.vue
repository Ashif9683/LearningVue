<template>

    <h1 class="box">CheckBox and Radio</h1>

    <h3>Who I am</h3>

    <label for="developer">Developer</label>
    <input type="checkbox" value="developer" v-model="who" id="developer">

    <label for="tester">Tester</label>
    <input type="checkbox" value="tester" v-model="who" id="tester" />

    <label for="designer">Designer</label>
    <input type="checkbox" value="designer" v-model="who"  id="designer">

    <h3>Technology</h3>
    <label for="laravel">Laravel</label>
    <input type="radio" value="laravel" v-model="technology" id="laravel">

    <label for="vue">Vue</label>
    <input type="radio" value="vue" v-model="technology" id="vue">

    <h3 class="box">I am {{ who }} and used {{ technology }}</h3>

</template>

<script>
export default {

    name: "CheckBoxRadio",

    data() {
        return {
            technology:null,
            who:[]
        }

    }
}

</script>