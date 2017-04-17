<template>
<div class="SignUp">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <form class="" action="index.html" method="post">
    <input type="text" v-model="userName" value="">
    <input type="password" v-model="password" value="">
    <input type="password" v-model="passwordRepead" value="">
    <select v-model="departmentId">
      <option v-for="department in departments" v-bind:value="department.pk">
        {{ department.fields.name }}
      </option>
    </select>
    <button type="button" @click="signUp" name="button">提交</button>
  </form>
</div>
</template>

<script>
import * as Department from '@/api/Department'
export default {
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      departments: [],
      departmentId: 0,
      userName: '',
      password: '',
      passwordRepead: ''
    }
  },
  beforeCreate: function () {
    Department.getDepartments().then(res => {
      this.departments = res.data.data
    })
  },
  methods: {
    signUp: function () {
      let params = {
        userName: this.userName,
        password: this.password,
        department_id: this.departmentId
      }
      Department.signUp(params)
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
