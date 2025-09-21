<template>

<h1>Interpolation</h1>

<h2>User Details</h2>
<ul>
    <li>Name  : {{ name }}</li>
    <li>Email : {{ email }}</li>
    <li>Mobile : {{ getNumber() }}</li>
</ul>

</template>

<script>

export default {
    name: 'Interpolation',

    data(){
        return{
            name: 'Ashif',
            email: 'ashif@gmail.com',
            getNumber: function(){
                return '7706012785';
            }
        }
    }
}

</script>