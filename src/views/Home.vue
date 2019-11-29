<template>
  <div class="bim-box" v-loading.fullscreen.lock="!modelLoaded">
    <Viewer @modelLoaded="modelLoaded=true" class="bim-viewer abs z-1" ref="view"></Viewer>
    <!-- 左上角工具栏 -->
    <Tools @changeStation="changeStation" class="tools abs z-2"></Tools>
    <Alert class="alert abs z-2"></Alert>
    <Info v-show="$store.state.showInfo"></Info>
    <div class="router-view abs z-2" v-if="showRouterView">
      <router-view></router-view>
    </div>

    <Point :points="points" @restoreState="restoreState"></Point>
    <point-edit
      :currPoint="currPoint"
      @getShot="getShot"
      @getState="getState"
      @savePoint="savePoint"
    ></point-edit>
  </div>
</template>

<script>
// @ is an alias to /src
// import Viewer from '@/components/bimface/Viewer2.vue'
import Viewer from '@/components/forge/Viewer.vue'
import Tools from '@/components/Tools.vue'
import Alert from '@/components/Alert.vue'
import Info from '@/components/Info.vue'
import Point from '@/components/Point.vue'
import PointEdit from '@/components/PointEdit.vue'

import axios from 'axios'
export default {
  name: 'home',
  components: {
    Viewer,
    Tools,
    Alert,
    Info,
    Point,
    PointEdit
  },
  data() {
    return {
      showRouterView: false,
      points: [], //视角列表
      isShowPointEdit: false, //是否显示视角编辑框
      currPoint: {
        name: '',
        state: {},
        shot: ''
      },
      currSid: '',
      modelLoaded: false //模型加载完成
    }
  },
  beforeMount() {
    //设置默认站点SID
    if (this.$route.query.s != undefined && this.$route.query.s != '') {
      this.$store.commit('update_currSid', this.$route.query.s)
    }
  },
  mounted() {
    this.showRouter()

    //初始化车站
    this.init()
  },
  methods: {
    //获取当前模型state
    getState(callback) {
      callback(this.$refs.view.getState())
    },
    getShot(callback) {
      callback(this.$refs.view.getShot())
    },
    showRouter() {
      if (this.$route.name === 'home') {
        this.showRouterView = false
      } else {
        this.showRouterView = true
      }
    },
    //保存视角
    savePoint() {
      this.points.push(this.currPoint)
      axios
        .put(
          this.$store.state.stationList[this.$store.state.currSid].pointDataUrl,
          this.points
        )
        .then(res => {
          this.$message.success('视角保存成功')
          this.currPoint = { name: '', state: {}, shot: '' }
          this.$store.commit('update_showPointEdit', false)
        })
    },

    //恢复视角
    restoreState(state) {
      this.$refs.view.restoreState(state)
    },

    //获取当前车站视角列表
    getPointsList() {
      //获取视角列表
      axios
        .get(
          this.$store.state.stationList[this.$store.state.currSid].pointDataUrl
        )
        .then(res => {
          this.points = res.data
        })
    },

    //第一次打开
    init() {
      this.getPointsList()
    },

    //切换车站
    changeStation() {
      //更换模型
      this.$refs.view.loadModel()
      this.getPointsList()
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
  width: 310px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  top: 75px;
  left: 20px;
}

.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
.tools {
  position: absolute;
  top: 20px;
  left: 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
  background: #fff;
}

.alert {
  position: absolute;
  top: 24.5px;
  right: 20px;
}
.no-click {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(250, 250, 250, 0);
  z-index: 9999;
}
</style>
