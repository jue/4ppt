<template>
  <el-card class="point-list" shadow="always">
    <div class="header">
      <div class="title">视点列表</div>
      <el-tooltip content="编辑" placement="right" v-if="!status">
        <i @click="status=true" class="iconfont el-icon-bimgo-edit-square"></i>
      </el-tooltip>

      <el-tooltip content="新增视点" placement="right" v-if="status">
        <i @click="status=false" class="iconfont add-point-btn el-icon-bimgo-plus"></i>
      </el-tooltip>
      <el-tooltip content="取消" placement="right" v-if="status">
        <i @click="status=false" class="iconfont el-icon-bimgo-close"></i>
      </el-tooltip>
    </div>
    <div class="list">
      <div class="txt">
        <div class="name">站厅层</div>
        <div class="desc">11月24日站厅人数查看</div>
      </div>
      <div class="pic">
        <img src="https://via.placeholder.com/100x55" />
      </div>
      <div class="delete" v-if="status">
        <i class="iconfont el-icon-bimgo-delete-fill"></i>
      </div>
    </div>
    <div class="list">
      <div class="txt">
        <div class="name">站厅层</div>
        <div class="desc">11月24日站厅人数查看</div>
      </div>
      <div class="pic">
        <img src="https://via.placeholder.com/100x55" />
      </div>
      <div class="delete" v-if="status">
        <i class="iconfont el-icon-bimgo-delete-fill"></i>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      status: false //是否编辑状态
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
  }
  .iconfont {
    display: flex;
    align-self: center;
    padding: 0 15px;
    font-size: 20px;
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
.list {
  display: flex;
  padding: 15px;
  border-bottom: 1px #ebeef5 solid;
  // & > :hover {
  //   background-color: rgba(64, 158, 255, 0.2);
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
    }
  }
  .pic {
    border-radius: 5px;
  }
  .delete {
    color: #f56c6c;
    padding-left: 15px;
    display: flex;
    align-self: center;
    cursor: pointer;
  }
}
</style>