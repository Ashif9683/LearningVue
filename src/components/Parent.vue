<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>

        <h3>Child User Name is : {{ childUserName }}</h3>

        <User :getUser="getUserName"/>
    </div>
</template>
<script>
import User from './User.vue'
export default {
    name:"Parent",
    data() {
        return {
            childUserName: ""
        }
    },
    components: {
        User
    },
    methods: {
        getUserName(name){
            this.childUserName=name
        }
    }
}
</script>
<style scoped>
.home {
    max-width: 600px;
    margin: 40px auto;
    padding: 24px;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    align-content: center;
}
h2 {
    color: #2c3e50;
    margin-bottom: 12px;
}
p {
    color: #555;
    margin-bottom: 20px;
}
h3 {
    color: #3498db;
    margin-bottom: 16px;
}
</style>