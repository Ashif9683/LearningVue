<template>
    <div class="home">
        <h2>Welcome to the HTMLbinding Page</h2>
        <p>This is the HTMLbinding page of our Vue.js application.</p>

        <div>
            <h2>Details</h2>
            <ul>
                <li>{{ name }}</li>
                <li v-html="tag1"></li>
                <li v-html="tag2"></li>
            </ul>
        </div>
    </div>
</template>
<script>    

export default {
    name: 'HTMLbinding',

    data(){
        return{
            name: "Ashif",
            tag1:"<p>Email:ashif@webkul.com</p>",
            tag2:"<p>Role : Trainee Software Engineer</p>"
        }
    }
}

</script>