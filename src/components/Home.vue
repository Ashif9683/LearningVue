<template>
    <div class="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our Vue.js application.</p>

        <ul v-if="errors.length">
            <li v-for="(item, idx) in errors" :key="idx">
                {{ item }}
            </li>
        </ul>

        <form @submit.prevent="login">
            <label for="email" class="form-label">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                v-model.trim="form.email"
                class="form-input"
                :class="{ invalid: invalidFields.email }"
            />
            <br>

            <label for="password" class="form-label">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                class="form-input"
                :class="{ invalid: invalidFields.password }"
            />
            <br>

            <h3>Country</h3>
            <select v-model="form.country" :class="{ invalid: invalidFields.country }">
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
            <div v-if="invalidFields.technology" class="field-error">Select at least one technology.</div>

            <h3>Gender</h3>
            <label>Male</label>
            <input type="radio" value="Male" v-model="form.gender"/>

            <label>Female</label>
            <input type="radio" value="Female" v-model="form.gender"/>
            <div v-if="invalidFields.gender" class="field-error">Please select a gender.</div>

            <br><br>
            <button type="submit" class="btn">Sign In</button>
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
            },
            errors: [],
            invalidFields: {
                email: false,
                password: false,
                country: false,
                gender: false,
                technology: false
            }
        };
    },

    methods: {
        validEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        login() {
            // reset
            this.errors = [];
            Object.keys(this.invalidFields).forEach(k => (this.invalidFields[k] = false));

            // email
            if (!this.form.email) {
                this.errors.push('Email is required.');
                this.invalidFields.email = true;
            } else if (!this.validEmail(this.form.email)) {
                this.errors.push('Email is not valid.');
                this.invalidFields.email = true;
            }

            // password
            if (!this.form.password) {
                this.errors.push('Password is required.');
                this.invalidFields.password = true;
            } else if (this.form.password.length < 6) {
                this.errors.push('Password must be at least 6 characters.');
                this.invalidFields.password = true;
            }

            // country
            if (!this.form.country) {
                this.errors.push('Country is required.');
                this.invalidFields.country = true;
            }

            // technology (checkbox array)
            if (!Array.isArray(this.form.technology) || this.form.technology.length === 0) {
                this.errors.push('Select at least one technology.');
                this.invalidFields.technology = true;
            }

            // gender (radio)
            if (!this.form.gender) {
                this.errors.push('Gender is required.');
                this.invalidFields.gender = true;
            }

            if (this.errors.length === 0) {
                alert('Form is valid');
                // proceed with submit logic...
            }

            console.log('Form submitted with:', this.form, this.errors);
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
    text-align: left;
}
.home h2,
.home h3 { text-align: left; margin-top: 12px; margin-bottom: 8px; }
.form-label { display: block; margin-bottom: 5px; text-align: left; }
label { text-align: left; }
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
input[type="checkbox"],
input[type="radio"] { margin-left: 6px; margin-right: 10px; }
.btn {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn:hover { background-color: #0056b3; }

/* validation styles */
.invalid {
    border-color: #e74c3c !important;
    box-shadow: 0 0 0 2px rgba(231,76,60,0.08);
}
.field-error {
    color: #e74c3c;
    font-size: 0.9em;
    margin-bottom: 8px;
}
ul { color: #e74c3c; }
</style>