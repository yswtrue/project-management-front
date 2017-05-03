<template>
<div class="left">
  <el-col :span="8">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @router="true" theme="dark">
      <el-submenu index="1">
        <div slot="title">
          导航烂一
        </div>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <div slot="title">
            选项4
          </div>
          <el-menu-item index="1-4-1">选项6</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
  </el-col>
</div>
</template>

<script>
export default {
  name: 'left',
  data: () => {
    return {

    }
  },
  methods: {
    handleOpen: (key, keyPath) => {
      console.log(key, keyPath)
    },
    handleClose: (key, keyPath) => {
      console.log(key, keyPath)
    }
  }

}
</script>
