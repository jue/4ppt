<template>
  <div>
    <el-drawer
      direction="ltr"
      :visible.sync="drawer"
      size="250px"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data(){
    return {
      drawer: false
    }
  },
  methods:{
    menuSwitch() {
      this.drawer = !this.drawer
    }
  }
}
</script>