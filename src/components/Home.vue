<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>
        <h4>{{ form }}</h4>
        <form action="">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" id="email" v-model="form.email" class="form-input"/>
            <br>

            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" id="password" v-model="form.password" class="form-input"/>
            <br>

            <h3>Country</h3>
            <select v-model="form.country">
                <option disabled value="">Please select one</option>
                <option>India</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Australia</option>
            </select>

            <h3>Technology</h3>
            <label>Java</label>
            <input type="checkbox" value="Java" v-model="form.technology"/>

            <label>Laravel</label>
            <input type="checkbox" value="laravel" v-model="form.technology"/>

            <label>Vue</label>
            <input type="checkbox" value="Vue" v-model="form.technology"/>

            <h3>Gender</h3>
            <label>Male</label>
            <input type="radio" value="Male" v-model="form.gender"/>

            <label>Female</label>
            <input type="radio" value="Female" v-model="form.gender"/>
            <br><br>
            <button v-on:click="login" type="button" class="btn">Sign In</button>
        </form>
    </div>
</template>

<script>    
export default {
    name: "Home",   
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                gender: '',
                technology: []
            }
        };
    },

    methods: {
        login() {
            console.log('Form submitted with:', this.form);
        }
    }
}
</script>

<style>
.home {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;

    /* ensure content inside .home is left-aligned */
    text-align: left;
}

/* make headings left-aligned as well */
.home h2,
.home h3 {
    text-align: left;
    margin-top: 12px;
    margin-bottom: 8px;
}

.form-label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
}

/* ensure general labels (checkbox/radio inline labels) are left aligned */
label {
    text-align: left;
}

/* inputs and select styling */
.form-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

/* keep inline controls spaced nicely */
input[type="checkbox"],
input[type="radio"] {
    margin-left: 6px;
    margin-right: 10px;
}

/* button styling */
.btn {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}
</style>