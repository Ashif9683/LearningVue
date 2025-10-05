<template>
    <ul>
        <li>This is the Trainee component.</li>
        <li>Trainee Name: {{ tname }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Trainee',
    props: {
        tname: String,
    }
}
</script>
