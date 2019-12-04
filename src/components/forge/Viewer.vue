<template>
  <div class="view-box">
    <div id="view"></div>
    <equipment-detail ref="equipmentDetail"></equipment-detail>
  </div>
</template>
<script>
import axios from 'axios'
import EquipmentDetail from '@/components/EquipmentDetail.vue'
export default {
  components: {
    EquipmentDetail
  },
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
      console.log(ele)

      //设置标签
      if (this.$store.state.switch.setMarkUp) {
        if (
          this.seal.markupExtension.list &&
          this.seal.markupExtension.list.length > 0
        ) {
          this.seal.markupExtension.removeAll()
        }
        this.setMarkUp()
        this.$emit('getClickData', {
          dbId: ele.dbId,
          point: ele.point
        })
      }

      //查看设备
      if (
        this.$route.name == 'equipment' &&
        !this.$store.state.switch.setMarkUp
      ) {
        // this.$emit('showEqDtail')
        this.$refs.equipmentDetail.drawer = true
        this.$refs.equipmentDetail.dbId = ele.dbId
      }
    })
  },
  methods: {
    showEquipmentStatus(data, color = '') {
      this.seal.fitToView(data.dbid)
      if (color != '') {
        this.seal.clearThemingColors()
        this.seal.setThemingColor(data.dbid, color)
      }
      this.seal.markupExtension.addByBounds(data.dbid, {
        innerHTML: '<div class="model-tips"><span>故障处理中</span></div>'
      })
    },
    //缩放并隔离构件集
    showComponents(dbIdArr) {
      this.seal.fitToView(dbIdArr)
      this.seal.isolate(dbIdArr)
    },
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
    addMarkUp(json, type) {
      console.log(json)
      var ele = '<i class="model-tag iconfont el-icon-bimgo-dingwei"></i>'
      if (type == 'camera') {
        ele = '<i class="model-tag iconfont el-icon-bimgo-camera"></i>'
      }
      if (type == 'accident') {
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

.model-tips {
  text-align: center;
  font-size: 12px;
  position: relative;
  span {
    display: inline-block;
    border: 1px #f00 solid;
    color: #f00;
    border-radius: 3px;
    padding: 2px 4px;
    &:before {
      position: absolute;
      content: '';
      height: 10px;
      width: 2px;
      background: #f00;
      top: 100%;
      left: calc(~'50% - 1px');
    }
    &:after {
      position: absolute;
      content: '';
      height: 2px;
      width: 6px;
      background-color: rgba(153, 153, 153, 0.2);
      top: calc(~'100% + 10px');
      left: calc(~'50% - 3px');
      border-radius: 4px;
    }
  }
}
</style>
