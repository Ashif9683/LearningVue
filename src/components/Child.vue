<template>
    <div class="child-container">
        <h2>Child Component</h2>
    </div>
</template>

<script>
export default {
    name: "Child",

    methods: {
        getName() {
            return "Ashif"
        }
    }
}
</script>

<style scoped>
.child-container {
    background-color: #f0f4f8;
    padding: 20px;
    border-radius: 8px;
}

.child-container h2 {
    color: #2c3e50;
    font-weight: bold;
}
</style>
