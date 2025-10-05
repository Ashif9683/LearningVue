<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>

        <!-- Pass props to child components -->
        <Trainee :tname="tname"/>
        <Mentor :mname="mname"/>
    </div>
</template>

<script>
import Trainee from './Trainee.vue'
import Mentor from './Mentor.vue'

export default {
    name: 'Home',
    components: {
        Trainee,
        Mentor
    },
    data() {
        return {
            tname: 'John Doe',
            mname: 'Jane Smith'
        }
    }
}
</script>
