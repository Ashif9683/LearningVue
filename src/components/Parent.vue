<template>
  <h2>Parent Component</h2>
  <ul>
    <li v-for="item in users" :key="item.name">
      <User :data="item" :getData="getData" />
    </li>
  </ul>
</template>

<script>
import User from './User.vue'

export default {
  name: "Parent",

  components: {
    User,
  },

  methods: {
    getData(name) {
      alert("Name: " + name)
    }
  },

  data() {
    return {
      users: [
        { name: "Ashif", email: "ashif@webkul.com" },
        { name: "Shahid", email: "shahid@accenture.com" },
        { name: "Salim", email: "salim@dhl.com" },
      ]
    }
  }
}
</script>
