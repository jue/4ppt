<template>
  <div>
    <el-drawer :show-close="false" :visible.sync="drawer" direction="ltr" size="300px">
      <div class="user-view">
        <el-avatar
          :size="50"
          class="avatar"
          src="https://img12.360buyimg.com/uba/jfs/t1/56623/32/16272/50781/5dd4c67eEa265125a/5f07315aec909b7e.jpg"
        ></el-avatar>
        <div class="name">项剑锋</div>
        <div class="sub-name">当前车站：林城西路站</div>
      </div>

      <ul @click="menuSwitch" class="list">
        <li>
          <router-link to="/">
            <i class="iconfont el-icon-bimgo-shouye"></i>总览
          </router-link>
        </li>
        <li>
          <router-link to="equipment">
            <i class="iconfont el-icon-bimgo-shebei"></i>设备列表
          </router-link>
        </li>
        <li>
          <router-link to="keshang">
            <i class="iconfont el-icon-bimgo-shoushang"></i>客伤点
          </router-link>
        </li>
      </ul>
      <el-divider content-position="left">辅助功能</el-divider>
      <ul @click="menuSwitch" class="list">
        <li>
          <router-link to="point">
            <i class="iconfont el-icon-bimgo-shikou"></i>视点
          </router-link>
        </li>
        <li>
          <router-link to="tags">
            <i class="iconfont el-icon-bimgo-biaoqian"></i>标签
          </router-link>
        </li>
      </ul>
      <el-divider content-position="left">开关</el-divider>
      <ul @click="menuSwitch" class="list">
        <li>
          <router-link to="point">
            <i class="iconfont el-icon-bimgo-btns"></i>模型操作按钮
          </router-link>
        </li>
        <li>
          <router-link to="tags">
            <i class="iconfont el-icon-bimgo-ditie1"></i>进出站时间
          </router-link>
        </li>
      </ul>
      <el-divider></el-divider>
      <ul class="list list-txt">
        <li>
          <a href="#">帮助</a>
        </li>
        <li>
          <a href="#">联系我们</a>
        </li>
      </ul>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    menuSwitch() {
      this.drawer = !this.drawer
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-drawer__header {
  margin-bottom: 0;
  padding: 0;
}
.user-view {
  position: relative;
  padding: 32px;
  z-index: 0;
  background: #409eff;
  margin-bottom: 8px;
  // background: linear-gradient(90deg,  #409eff 0%, #66b1ff 100%);
  background-image: url(https://img12.360buyimg.com/uba/jfs/t1/97297/11/2715/40033/5dd50534E3877161b/4228f43b334fd78e.png);
  background-size: 100% 150%;
  .avatar {
    margin-bottom: 16px;
  }
  .name {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 7px;
  }
  .sub-name {
    font-size: 12px;
    color: #fff;
  }
}
.list {
  list-style: none;
  padding: 0;
  li {
    a {
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      font-size: 14px;
      height: 48px;
      line-height: 48px;
      padding: 0 32px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .iconfont {
        font-size: 20px;
        margin-right: 32px;
        display: inline-flex;
        align-self: center;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  &.list-txt {
    li {
      a {
        background: none;
        height: 32px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.8);
        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
/deep/ .el-divider--horizontal {
  margin: 30px 0;
}
/deep/ .el-divider__text {
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
}
</style>