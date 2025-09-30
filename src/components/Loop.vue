<template>

    <h1 class="box">Loop Component</h1>
    <h2 class="head">Technology</h2>
    <ul>
        <li v-for="item in technology" :key="item">
            {{ item }}
        </li>
    </ul>
    <br>
    <h2 class="head">Users</h2>
    <ul>
        <li v-for="user in users" :key="user.email">
            Name is : {{ user.name }} , Email is : {{ user.email }} and age is {{ user.age }}
        </li>
    </ul>

</template>

<script>
export default {
    name: 'Loop',

    data() {
        return {
            technology: ['Java', 'PHP', 'Node', 'HTML'],
            users: [
                {
                    name: 'ashif',
                    email: 'ashif.webkul.in',
                    age: 23,
                },
                {
                    name: 'shahid',
                    email: 'shahid.accenture.in',
                    age: 26,
                },
                {
                    name: 'Salim',
                    email: 'Salim.gdb.in',
                    age: 29,
                }

            ]
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

.head {
    color: var(--secondary-color);
}
</style>