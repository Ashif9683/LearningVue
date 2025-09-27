<template>

    <!-- <h1 class="box">Home Component</h1> -->
    <h2>All Details : </h2>
    <ul>
        <li>Name : {{ name }}</li>
        <li>Age : {{ age }}</li>
        <li>Role : {{ getRole("Trainee") }}</li>
        <li>Company Name : {{ getCompany().company }}</li>
        <li>Company Address : {{ getCompany().address }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            name: 'Ashif',
            age: 23,
            company: 'Webkul',
            address: "Noida sector 63",
        }
    },

    methods: {
        getRole(role) {
            return role;
        },

        getCompany() {
            return {
                company: this.company,
                address: this.address,
            }
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