<template>
    <div class="ClassBinding">
        <h2>Welcome to the ClassBinding Page</h2>
    </div>

    <div :class="applyStyle">
        <ul>
            <li>Name : Ashif</li>
            <li>Email : Ashif@webkul.in</li>
            <li>Role : Software Engineer</li>
        </ul>
        <button v-on:click="user=!user">Toggle User</button>
    </div>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            user: true
        }
    },
    computed: {
        applyStyle() {
            return {
                'class-one': true,
                'class-two': this.user,
                'class-three': !this.user
            }
        }
    }
}
</script>
<style scoped>
.class-one {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: background 0.3s;
}

.class-two {
    color: green;
    font-size: 1.1rem;
    letter-spacing: 1px;
    border-left: 4px solid green;
    padding-left: 12px;
    transition: color 0.3s;
}

.class-three {
    font-weight: bold;
    color: #333;
    background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
    border-left: 4px solid #333;
    padding-left: 12px;
    transition: background 0.3s, color 0.3s;
}
</style>
