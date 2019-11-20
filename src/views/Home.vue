<template>
  <div class="bim-box">
    <bimface-viewer class="abs z-1"></bimface-viewer>
    <!-- 左上角工具栏 -->
    <Tools class="abs z-2"></Tools>
    <div class="router-view abs z-2">
      <router-view></router-view>
    </div>
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
.abs {
  position: absolute;
}
.bim-box {
  position: relative;
  min-height: 100vh;
}

.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
</style>
