<template>
  <div class="window-box" v-drag v-if="$store.state.showTagEdit">
    <div class="head">
      <div class="name">标签设定</div>
      <i @click="closeWindow" class="iconfont el-icon-bimgo-close"></i>
    </div>
    <div class="body">
      <el-form :model="currTag" label-position="right" label-width="50px" size="small">
        <el-form-item label="名称">
          <el-input v-model="currTag.name"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select placeholder="请选择" style="width: 100%;" v-model="currTag.type">
            <el-option label="摄像头" value="camera"></el-option>
            <el-option label="客伤事故" value="accident"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标记">
          <el-button @click="getForgeData" v-html="getForgeData_json[getForgeData_status].title"></el-button>
          <el-tooltip effect="light" placement="right">
            <div slot="content">
              <strong>操作说明：</strong>
              <br />1. 点击按钮开户模型选点功能
              <br />2. 将模型旋转、缩放到合适的视角
              <br />3. 点击想要设置标签点的位置
              <br />4. 完成选点
            </div>
            <i class="iconfont icon-help el-icon-bimgo-question-circle"></i>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="网址" v-if="currTag.type=='camera'">
          <el-input v-model="currTag.desc"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="currTag.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['currTag'],
  data() {
    return {
      tagDataUrl: 'https://api.myjson.com/bins/15jsmy',
      getForgeData_status: 0,
      getForgeData_json: [
        {
          title: '开始选择构件点'
        },
        {
          title: '点击构件上位置'
        },
        {
          title: '已获取位置信息'
        }
      ]
    }
  },
  methods: {
    closeWindow() {
      this.$store.commit('update_showTagEdit', false)
      this.getForgeData_status = 0
      this.currTag.type = ''
      this.currTag.name = ''
      this.currTag.desc = ''
      this.currTag.video_url = ''
      this.currTag.forge_data = {}
      
    },

    //获取当前模型标记点开关
    getForgeData() {
      if (this.currTag.type == '') {
        this.$message.error('请先选择标签分类')
        return false
      }

      if(this.getForgeData_status == 0){
        this.getForgeData_status = 1
        this.$emit('getForgeData', this.currTag.type)
      }

    },

    //获取当前模型state
    getState() {
      this.$emit('getState', res => {
        this.currPoint.state = res
      })
    },

    //新增视角
    addState() {
      this.getState()
      this.getShot()
    },

    savePoint() {
      if (this.currPoint.shot == '') {
        this.$message.error('没有获取视角')
        return false
      }

      if (this.currPoint.name == '') {
        this.$message.error('没有为视角输入标题')
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
  top: 60px;
  right: 150px;
  z-index: 2;
  background: #008cd6;
  width: 300px;
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
.icon-help {
  font-size: 20px;
  display: inline-block;
  padding: 0 5px;
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.6);
  cursor: help;
  vertical-align: middle;
}
.body {
  background: #fff;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
}
</style>