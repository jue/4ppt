<template>
  <el-drawer direction="rtl" :visible.sync="drawer" title="设备明细" :modal="false">
    <span>设备明细!</span>
  </el-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      dbId: ''
    }
  }
}
</script>