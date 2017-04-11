<template>
<div class="SignUp">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <form class="" action="index.html" method="post">
    <input type="text" name="username" value="">
    <input type="text" name="password" value="">
    <input type="text" name="password_repeat" value="">
    <select v-model="departmentId">
      <option v-for="department in departments" v-bind:value="department.id">
        {{ option.text }}
      </option>
    </select>
    <button type="submit" name="button">提交</button>
  </form>
</div>
</template>

<script>
import Api from '@/api/Api'
export default {
  data: function () {
    return {
      departments: this.getDepartments(),
      departmentId: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getDepartments: function () {
      return Api.get('http://127.0.0.1:8001/department/departments')
    },
    createUser: function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
