<template>
  <div class="bim-box">
    <bimface-viewer></bimface-viewer>
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import BimfaceViewer from '@/components/bimface/Viewer.vue'

export default {
  name: 'home',
  components: {
    BimfaceViewer
  }
}
</script>
<style lang="less" scoped>
.bim-box{
  position: relative;
  min-height: 100vh;
}
</style>
