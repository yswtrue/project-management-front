<template>
<div id="app">
  <el-row>
    <el-col :xs="8" :sm="6" :md="4" :lg="5">
      <Left></Left>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="7">
      <router-view></router-view>
    </el-col>
  </el-row>

</div>
</template>

<script>
import Left from './components/public/Left'
export default {
  name: 'app',
  components: {
    Left
  }
}
</script>
