<template>
  <el-card class="point-list" shadow="always">
    <div class="header">
      <div class="title">
        <span>客伤列表</span>
      </div>
    </div>
    <div :key="index" class="list" v-for="(item, index) of accident">
      <div class="txt">
        <div class="name">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
      </div>
      <div class="icon">
        <i @click="showDtail(item.forge_data)" class="iconfont el-icon-bimgo-accident"></i>
      </div>
    </div>
  </el-card>
</template>
<script>
import axios from 'axios'
export default {
  props: ['accident'],
  mounted() {},
  methods: {
    showDtail(json) {
      this.$emit('restoreState', json.state)
      this.$emit('addMarkUp', json.point, json.dbId)
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-card__body {
  padding: 0;
}
/deep/ .el-button-group {
  display: flex;
  align-self: center;
  padding: 0 15px;
}
.header {
  display: flex;
  align-self: center;
  justify-content: center;
  height: 50px;
  border-bottom: 1px #ebeef5 solid;
  .title {
    flex: 1;
    display: flex;
    align-self: center;
    padding: 0 15px;
    color: rgba(0, 0, 0, 0.6);
    flex-direction: column;
    span {
      font-size: 14px;
      font-weight: 600;
    }
    small {
      display: block;
      font-size: 11px;
      margin-top: 3px;
      strong {
        color: #409eff;
      }
      .iconfont {
        cursor: pointer;
        font-size: 11px;
        color: #f51d1d;
      }
    }
  }
  /deep/ .el-dropdown {
    display: flex;
    width: 49px;
    .iconfont {
      display: flex;
      align-self: center;
      justify-content: center;
      padding: 0 15px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
      &.add-point-btn {
        padding: 0;
      }
    }
  }
}
.list {
  display: flex;
  padding: 15px;
  border-bottom: 1px #ebeef5 solid;
  // & > :hover {
  //   background-color: rgba(0, 0, 0, 0.2);
  // }
  &:last-child {
    border: none;
  }
  .txt {
    flex: 1;
    .name {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .desc {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
      padding-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 240px;
    }
    .tag {
      margin-top: 5px;
      cursor: pointer;
    }
  }
  .icon {
    display: flex;
    align-self: center;
    justify-content: center;
    cursor: pointer;
    .iconfont {
      font-size: 22px;
      color: rgba(0, 0, 0, 0.6);
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.5);
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
  .delete {
    color: #f56c6c;
    padding-left: 15px;
    display: flex;
    align-self: center;
    cursor: pointer;
  }

  /deep/ .el-tag--mini {
    font-size: 11px;
  }
}
</style>