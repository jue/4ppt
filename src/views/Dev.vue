<template>
  <div class="dev-box">
    <div id="view"></div>
    <div class="bar">
      <el-button >开启插入标签</el-button>
    </div>
  </div>
</template>
<script>
// import Markup3D from '@/components/forge-extension/Viewing.Extension.Markup3D.min.js'
export default {
  data() {
    return {
      viewer: '',
      svfURL: './01/Resource/____/3D/3D.svf',
      //功能开关
      switch: {
        setMarkUp: false
      }
    }
  },
  mounted() {
    this.initializeViewer()
  },
  methods: {
    initializeViewer() {
      this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(
        document.getElementById('view'),
        {
          // extensions: ['Markup3D']
        }
      )
      var options = {
        env: 'Local',
        useConsolidation: true,
        useADP: false
      }
      Autodesk.Viewing.Initializer(options, () => {
        this.viewer.start(this.svfURL, options, this.onSuccess)
      })
    },

    onSuccess() {
      // this.viewer.setBackgroundColor(0, 0, 0, 155, 155, 155)
      this.viewer.impl.toggleGroundShadow(true)
      // this.viewer.loadExtension('markup3d')

      console.log(this.viewer)
    }
  }
}
</script>
<style lang="less" scoped>
.dev-box {
  display: flex;
  min-height: 100vh;
  #view {
    position: relative;
    flex: 1;
  }
  .bar {
    width: 200px;
    background: #fff;
    padding: 40px 20px;
  }
}
</style>