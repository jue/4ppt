<template>
  <div class="tools-box">
    <div class="logo" @click="menuSwitch">
      <el-tooltip content="菜单" placement="bottom">
        <i class="iconfont el-icon-bimgo-logo"></i>
      </el-tooltip>
    </div>
    <div class="search-box">
      <el-input class="key" placeholder="请输入内容" v-model="key"></el-input>
    </div>
    <div class="search-btn">
      <i class="iconfont el-icon-bimgo-search"></i>
    </div>
    <el-dropdown class="change-station" placement="bottom" trigger="click">
      <el-tooltip class="el-dropdown-link" content="切换车站" placement="right">
        <i class="el-icon-bimgo-qiehuan"></i>
      </el-tooltip>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item 
          v-for="(item,index) of $store.state.stationList"
          :key="index"
          :disabled="$store.state.currSid == index"
          @click.native="changeStation(index)"
        >
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <Menu ref="menu"></Menu>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import axios from 'axios'
export default {
  components: {
    Menu
  },
  data() {
    return {
      key: '', //搜索关键字
      stationList: {}
    }
  },
  methods: {
    menuSwitch() {
      this.$refs.menu.menuSwitch()
    },
    changeStation(sid){
      this.$store.commit('update_currSid', sid)
      this.$router.push({
        query: {
          s: sid
        }
      })
      this.$emit('changeStation', sid)

    }
  }
}
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tools-box {
  height: 45px;
  display: flex;
  overflow: hidden;
}
.logo {
  .flex;
  width: 45px;
  cursor: pointer;
  .el-icon-bimgo-logo {
    color: #409eff;
    font-size: 37px;
  }
}
.search-box {
  .flex;
  width: 220px;
}
.search-btn {
  .flex;
  width: 45px;
  .el-icon-bimgo-search {
    font-size: 22px;
    color: #7c8196;
    cursor: pointer;
  }
  &:hover {
    .el-icon-bimgo-search {
      color: #409eff;
    }
  }
}
.change-station {
  .flex;
  cursor: pointer;
  width: 45px;
  background-color: #f8f8f8;
  .el-icon-bimgo-qiehuan {
    color: #409eff;
    font-size: 22px;
  }
}
/deep/ .el-dropdown-menu__item.is-disabled {
  color: #409eff;
  font-weight: 700;
}

.key {
  /deep/ .el-input__inner {
    border: none;
  }
}
</style>