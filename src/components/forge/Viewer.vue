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
      seal: ''
    }
  },
  mounted() {
    this.seal = new Seal(document.querySelector('#view'), {
      name: '3d',
      docid: this.$store.state.stationList[this.$store.state.currSid].forge_url,
      env: 'Local'
    })

    this.seal.on('geometry.loaded', () => {
      this.$emit('modelLoaded')

      this.getForgeData('dd')
    })
  },
  methods: {
    //代码开发测试
    dev() {
      let _this = this
      this.seal.on('click', e => {
        console.log(e)
        // _this.seal.markupExtension.add(e.point, e.dbId)
      })

      // this.seal.fitToView([16124])

      this.seal.markupExtension.add(
        {x: -87.33223822421317, y: -76.76081060058664, z: -27.288406372070312},
        16124,
        {'innerHTML':'<i class="iconfont el-icon-bimgo-camera"></i>'}
      )
    },
    //加载模型
    loadModel() {
      this.seal.loadModel(
        this.$store.state.stationList[this.$store.state.currSid].forge_url
      )
    },
    //点击模型获取数据
    getForgeData(type){
      console.log('00000')
      // this.seal.on('click', e => {
      //   console.log(e)
      // })
    },
    //获取当前模型state
    getState() {
      return this.seal.getCurrentState()
    },
    //获取当前模型state截图
    getShot() {
      return this.seal.getScreenShot(203, 100).then(res => {
        return res
      })
    },
    //恢复视角
    restoreState(state) {
      this.seal.restoreState(state)
    },

    //点击设置标签
    setMarkUp() {
      let _this = this
      this.seal.on('click', e => {
        console.log(e)
        _this.seal.markupExtension.add(e.point, e.dbId)
      })
    }
  },
  watch: {
    '$store.state.modelBtns': function() {
      this.seal.setToolBarVisible(this.$store.state.modelBtns)
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
/deep/ .viewcubeWrapper {
  right: 60px;
}
</style>
