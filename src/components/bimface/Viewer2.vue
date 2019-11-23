<template>
  <div class="view-box">
    <div id="view"></div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      fileId: this.$store.state.defStation.fileId,
      viewer3D: '',
      app: '',
      viewToken: ''
    }
  },
  mounted() {
    //获取bimface viewtoken
    this.getViewToken(this.fileId)

    var loaderConfig = new BimfaceSDKLoaderConfig()
    loaderConfig.viewToken = this.viewToken
    BimfaceSDKLoader.load(
      loaderConfig,
      this.successCallback,
      this.failureCallback
    )
  },
  methods: {
    successCallback() {
      //获取DOM元素
      var domShow = document.getElementById('view')
      //创建WebApplication3DConfig
      var webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig()
      //设置创建WebApplication3DConfig的dom元素值
      webAppConfig.domElement = domShow
      //创建WebApplication3D
      this.app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig)
      //添加待显示的模型
      this.app.addView(this.viewToken)
      //获取viewer3D对象
      this.viewer3D = this.app.getViewer()
    },
    failureCallback(error) {
      console.log(error)
    },

    //获取目录树
    getModelTree() {
      this.viewer.getModelTree(objectdata => {
        console.log(objectdata)
      })
    },

    //设置背景颜色
    setBackgroundColor() {
      var solidColor = new Glodon.Web.Graphics.Color(250, 250, 250, 0)
      this.viewer.setBackgroundColor(solidColor)
      // this.viewer.render();
    },

    //切换模型
    changeView() {},

    //获取bimface viewtoken
    getViewToken(fileId) {
      axios
        .post('https://api.jue.sh/bimface/token', {
          fileId: fileId
        })
        .then(res => {
          this.viewToken = res.data.viewToken
        })
    }
  },
  watch: {
    '$store.state.defStation.fileId': function() {
      this.getViewToken(this.$store.state.defStation.fileId)
    }

    // $route() {
    //   console.log(this.$route.query.s)
    //   this.changeView(this.$route.query.s)
    // }
  }
}
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
