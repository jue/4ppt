<template>
  <div id="view"></div>
</template>
<script>
export default {
  data() {
    return {
      viewer: '',
      BimfaceLoaderConfig: new BimfaceSDKLoaderConfig()
    }
  },
  mounted() {
    this.BimfaceLoaderConfig.dataEnvType = BimfaceEnvOption.Local
    this.BimfaceLoaderConfig.sdkPath = './jssdk'
    this.BimfaceLoaderConfig.path = 'http://filecdn.jue.sh/demo/viewToken.json'

    BimfaceSDKLoader.load(
      this.BimfaceLoaderConfig,
      this.onSDKLoadSucceeded,
      this.onSDKLoadFailed
    )
  },
  methods: {
    onSDKLoadSucceeded(viewMetaData) {
      if (viewMetaData.viewType == '3DView') {
        let view = document.getElementById('view')
        let config = new Glodon.Bimface.Application.WebApplication3DConfig()
        console.log(config)
        config.enableViewHouse = false //隐藏home图标
        config.Toolbars = ['MainToolbar']
        config.Buttons = [
          'Home',
          'RectangleSelect',
          'Measure',
          'Section',
          'Walk',
          'Map',
          'Property',
          'FullScreen'
        ]
        config.domElement = view
        let viewer3D = new Glodon.Bimface.Application.WebApplication3D(config)
        this.viewer = viewer3D.getViewer()
        this.viewer.addModel(viewMetaData)
      }
    },
    onSDKLoadFailed(viewMetaData) {},

    //获取目录树
    getModelTree() {
      this.viewer.getModelTree(objectdata => {
        console.log(objectdata)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#view {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
