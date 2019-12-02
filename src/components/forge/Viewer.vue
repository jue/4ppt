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
      seal: '',
      currEle: {}
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
    })

    this.seal.on('click', ele => {
      if(this.$store.state.switch.setMarkUp){
        if(this.seal.markupExtension.list && this.seal.markupExtension.list.length>0){
          this.seal.markupExtension.removeAll()
        }
        this.setMarkUp()
        this.$emit('getClickData', {
          dbId: ele.dbId,
          point: ele.point
        })
      }
    })

  },
  methods: {
    //加载模型
    loadModel() {
      this.seal.loadModel(
        this.$store.state.stationList[this.$store.state.currSid].forge_url
      )
    },
    //点击模型获取数据
    getForgeData1(type) {
      let tmpHtml =
        '<i style="color:#c33;" class="iconfont el-icon-bimgo-dingwei"></i>'

      this.seal.on('click', event => {
        if (this.seal.markupExtension.list.length) {
          this.seal.markupExtension.removeAll()
        }
        this.seal.markupExtension.add(event.point, event.dbId, {
          innerHTML: tmpHtml
        })

        this.$emit('getClickData', {
          dbId: event.dbId,
          point: event.point
        })

      })

      return event
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
      this.seal.on('click', ele => {
        this.currEle = ele
        _this.seal.markupExtension.add(ele.point, ele.dbId)
      })
    },

    //添加标记符
    addMarkUp(json, type){
      console.log(json)
      var ele = '<i class="model-tag iconfont el-icon-bimgo-dingwei"></i>'
      if(type == 'camera'){
        ele = '<i class="model-tag iconfont el-icon-bimgo-camera"></i>'
      }
      if(type == 'accident'){
        ele = '<i class="model-tag iconfont el-icon-bimgo-accident"></i>'
      }

      this.seal.markupExtension.add(json.point, json.dbId, {
        innerHTML: ele
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
