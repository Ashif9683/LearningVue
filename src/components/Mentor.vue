<template>
    <ul>
        <li>This is the Mentor component.</li>
        <li>Mentor Name: {{ mname }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Mentor',
    props: {
        mname: String,
    }
}
</script>
