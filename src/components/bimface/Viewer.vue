<template>
  <div class="view-box">
    <div id="view"></div>
  </div>
</template>
<script>
//bimface离线加载模型
export default {
  data() {
    return {
      modelUrl: this.$store.state.defStation.model_url,
      viewer: "",
      BimfaceLoaderConfig: new BimfaceSDKLoaderConfig()
    };
  },
  mounted() {
    this.BimfaceLoaderConfig.dataEnvType = BimfaceEnvOption.Local;
    this.BimfaceLoaderConfig.sdkPath = this.modelUrl + "/jssdk";
    this.BimfaceLoaderConfig.path = this.modelUrl + "/viewToken.json";
    BimfaceSDKLoader.load(
      this.BimfaceLoaderConfig,
      this.onSDKLoadSucceeded,
      this.onSDKLoadFailed
    );
  },
  methods: {
    onSDKLoadSucceeded(viewMetaData) {
      if (viewMetaData.viewType == "3DView") {
        let view = document.getElementById("view");
        let config = new Glodon.Bimface.Application.WebApplication3DConfig();
        config.enableViewHouse = false; //隐藏home图标
        config.Toolbars = ["MainToolbar"];
        config.Buttons = [
          "Home",
          "RectangleSelect",
          "Measure",
          "Section",
          "Walk",
          "Map",
          "Property",
          "FullScreen"
        ];
        config.domElement = view;
        let viewer3D = new Glodon.Bimface.Application.WebApplication3D(config);

        this.viewer = viewer3D.getViewer();
        this.viewer.addModel(viewMetaData);
        this.setBackgroundColor();
      }
    },
    onSDKLoadFailed(viewMetaData) {},

    //获取目录树
    getModelTree() {
      this.viewer.getModelTree(objectdata => {
        console.log(objectdata);
      });
    },

    //设置背景颜色
    setBackgroundColor() {
      var solidColor = new Glodon.Web.Graphics.Color(250, 250, 250, 0);
      this.viewer.setBackgroundColor(solidColor);
      // this.viewer.render();
    },

    //切换模型
    changeView() {
      console.log(this.viewer.removeView);
    }
  },
  watch: {
    $route() {
      console.log(this.$route.query.s);
      this.changeView(this.$route.query.s);
    }
  }
};
</script>
<style lang="less" scoped>
.view-box {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
#view {
  position: absolute;
  width: 100%;
  height: 100%;
}

// 重置bimface样式
</style>
