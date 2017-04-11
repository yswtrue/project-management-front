<template>
<div class="SignUp">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <form class="" action="index.html" method="post">
    <input type="text" name="username" value="">
    <input type="text" name="password" value="">
    <button type="submit" name="button">提交</button>
    <router-link :to="{ name: 'SignUp'}">注册</router-link>
  </form>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
