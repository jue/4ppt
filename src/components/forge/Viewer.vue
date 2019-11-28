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

    this.seal.setToolBarVisible(false)
  },
  methods: {
    //加载模型
    loadModel() {
      this.seal.loadModel(
        this.$store.state.stationList[this.$store.state.currSid].forge_url
      )
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
