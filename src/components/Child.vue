<template>
    <h2 class="box">Child Component</h2>

    <h3>Details</h3>

    <ul>
        <li>Name : {{ name }}</li>
        <li>Role : {{ user.role }}</li>
        <li>Company : {{ user.company }}</li>
        <li>Technology : {{ getTech ().join(', ')}}</li>
    </ul>
</template>

<script>

export default {
    name: "Child",

    props: {
        name: String,
        user: Object,
        getTech: Function,
    }
}

</script>