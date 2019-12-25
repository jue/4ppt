<template>
  <div class="window-box" v-drag v-if="$store.state.showPointEdit">
    <div class="head">
      <div class="name">视角设定</div>
      <i @click="closeWindow" class="iconfont el-icon-bimgo-close"></i>
    </div>
    <div class="body">
      <div class="preview">
        <div class="def-preview">
          <el-button @click="addState" class="get-btn" round size="mini" :loading="loading">获取视角</el-button>
        </div>
        <img :src="currPoint.shot" class="img" v-if="currPoint.shot" />
        <div class="get">
          <el-button @click="addState" class="get-btn" round size="mini":loading="loading">获取视角</el-button>
        </div>
      </div>

      <div class="input-box">
        <el-input placeholder="输入标题" size="small" v-model="currPoint.name"></el-input>
        <el-button @click="savePoint" class="add-btn" size="small" type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['currPoint'],
  data(){
    return {
      loading: false
    }
  },
  methods: {
    closeWindow() {
      this.$store.commit('update_showPointEdit', false)
    },
    //获取当前模型state
    getState() {
      this.$emit('getState', res => {
        this.currPoint.state = res
      })
    },
    //获取当前模型截图
    getShot() {
      let _this = this
      this.$emit('getShot', res => {
        res.then(blobUrl => {
          var xhr = new XMLHttpRequest()
          xhr.open('GET', blobUrl, true)
          xhr.responseType = 'blob'
          xhr.onload = function(e) {
            if (this.status == 200) {
              var myBlob = this.response
              // myBlob is now the blob that the object URL pointed to.
              let data = new FormData()
              data.append('smfile', myBlob)
              axios.post('https://sm.ms/api/upload', data).then(res => {
                this.loading = false
                if (res.data.code == 'success') {
                  //成功返回图片后
                  _this.currPoint.shot = res.data.data.url
                } else {
                  let msg = res.data.message
                  let arr = msg.split('this image exists at: ')
                  _this.currPoint.shot = arr[1]
                }
              })
            }
          }
          xhr.send()
        })
      })
    },

    //新增视角
    addState() {
      this.loading = true
      this.getState()
      this.getShot()
    },

    savePoint() {
      if (this.currPoint.shot == '') {
        this.$message.error('没有获取视角');
        return false
      }

      if (this.currPoint.name == '') {
        this.$message.error('没有为视角输入标题');
        return false
      }

      this.$emit('savePoint')
    }
  }
}
</script>
<style lang="less" scoped>
.window-box {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  background: #008cd6;
  width: 233px;
}
.head {
  font-size: 14px;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  line-height: 24px;
  cursor: move;
  .name {
    flex: 1;
  }
  .iconfont {
    cursor: pointer;
  }
}
.body {
  background: #fff;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;

  .preview {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;

    width: 100%;
    height: 100px;
    border: 1px solid #dcdfe6;

    .def-preview {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .img {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 2;
    }

    &:hover {
      .get {
        display: block;
      }
    }
    .get {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: none;
      transition: all 0.2s linear;
    }
    .get-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .input-box {
    display: flex;
    /deep/ .el-input__inner {
      border-radius: 4px 0 0 4px;
    }
    /deep/ .el-button--small {
      border-radius: 0 4px 4px 0;
      background: #008cd6;
      border: none;
    }
  }
}
</style>