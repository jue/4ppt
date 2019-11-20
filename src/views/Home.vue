<template>
  <div class="bim-box">
    <bimface-viewer class="z-1"></bimface-viewer>
    <!-- 左上角工具栏 -->
    <Tools class="z-2"></Tools>
  </div>
  
</template>

<script>
// @ is an alias to /src
import BimfaceViewer from '@/components/bimface/Viewer.vue'
import Tools from '@/components/Tools.vue'

export default {
  name: 'home',
  components: {
    BimfaceViewer,
    Tools
  }
}
</script>
<style lang="less" scoped>
.bim-box{
  position: relative;
  min-height: 100vh;
}

.z-1{
  z-index: 1;
}
.z-2{
  z-index: 2;
}
</style>
