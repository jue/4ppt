<template>
  <div class="view-box">
    <div id="view"></div>
  </div>
</template>
<script>
//bimface在线加载模型
import axios from 'axios'
export default {
  data() {
    return {
      viewer3D: '',
      app: '',
      viewToken: ''
    }
  },
  computed: {
    fileId() {
      return this.$store.state.defStation.fileId
    }
  },
  mounted() {
    //获取bimface viewtoken
    this.getViewToken()
  },
  methods: {
    loadModel() {
      var loaderConfig = new BimfaceSDKLoaderConfig()
      loaderConfig.viewToken = this.viewToken
      BimfaceSDKLoader.load(
        loaderConfig,
        this.successCallback,
        this.failureCallback
      )
    },
    successCallback() {
      //获取DOM元素
      var domShow = document.getElementById('view')
      //创建WebApplication3DConfig
      var webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig()

      webAppConfig.enableViewHouse = false //隐藏home图标
      webAppConfig.Toolbars = ['MainToolbar']
      webAppConfig.Buttons = [
        'Home',
        'RectangleSelect',
        'Measure',
        'Section',
        'Walk',
        'Map',
        'Property',
        'FullScreen'
      ]

      //设置创建WebApplication3DConfig的dom元素值
      webAppConfig.domElement = domShow
      //创建WebApplication3D
      this.app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig)

      //添加待显示的模型
      this.app.addView(this.viewToken)

      //获取viewer3D对象
      this.viewer3D = this.app.getViewer()
      this.setBackgroundColor()
    },
    failureCallback(error) {
      console.log(error)
    },

    //获取目录树
    getModelTree() {
      this.viewer3D.getModelTree(objectdata => {
        console.log(objectdata)
      })
    },

    //设置背景颜色
    setBackgroundColor() {
      var solidColor = new Glodon.Web.Graphics.Color(250, 250, 250, 0)
      this.viewer3D.setBackgroundColor(solidColor)
      this.viewer3D.render()
    },

    //切换模型
    changeView() {},

    //获取bimface viewtoken
    getViewToken(type = 'def') {
      axios
        .post('https://api.jue.sh/bimface/token', {
          fileId: this.fileId
        })
        .then(res => {
          this.viewToken = res.data.viewToken

          if (type == 'def') {
            this.loadModel()
          } else {
            this.app.addView(this.viewToken)
          }
        })
    }
  },
  watch: {
    $route() {
      this.viewer3D.removeView(this.viewToken)
      this.getViewToken('change')
    }
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
