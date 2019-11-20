<template>
  <div class="bim-box">
    <bimface-viewer class="abs z-1"></bimface-viewer>
    <!-- 左上角工具栏 -->
    <Tools class="abs z-2"></Tools>
    <div class="router-view abs z-2" v-if="showRouterView">
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
  },
  data() {
    return {
      showRouterView: false
    }
  },
  mounted() {
    this.showRouter()
  },
  methods: {
    showRouter(){
      if (this.$route.name === 'home') {
          this.showRouterView = false
        } else {
          this.showRouterView = true
        }
    }
  },
  watch: {
    $route: {
      handler(val, oldval) {
        this.showRouter()
      }
    }
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

.router-view {
  position: absolute;
  width: 355px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  top: 75px;
  left: 20px;
  padding: 15px;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
</style>
