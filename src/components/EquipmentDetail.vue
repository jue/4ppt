<template>
  <el-drawer :modal="false" :visible.sync="drawer" direction="rtl" title="设备明细">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item name="1" title="描述">
        <div class="content">
          <div class="list">
            <div class="item">
              <span class="title">位置：</span>
              <span>L01Z01AFCAGM</span>
            </div>
            <div class="item">
              <span class="title">名称：</span>
              <span>闸机</span>
            </div>
            <div class="item">
              <span class="title">报障响应时间：</span>
              <span>-</span>
            </div>
            <div class="item">
              <span class="title">故障完全修复时间：</span>
              <span>-</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2" title="作业中的工单 (0)">
        <div class="content">无</div>
      </el-collapse-item>
      <el-collapse-item name="3" title="故障工单 (0)">
        <div class="content">无</div>
      </el-collapse-item>
      <el-collapse-item name="4" title="计划工单 (0)">
        <div class="content">无</div>
      </el-collapse-item>
      <el-collapse-item name="5" title="历史工单 (0)">
        <div class="content">无</div>
      </el-collapse-item>
      <el-collapse-item name="6" title="PM信息 (0)">
        <div class="content">无</div>
      </el-collapse-item>
    </el-collapse>
  </el-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      dbId: '',
      activeName: 1
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-collapse-item__header {
  padding-left: 10px;
}
/deep/ .el-drawer__header {
  margin-bottom: 20px;
}
.content {
  padding: 0 15px;
}
.item {
  display: flex;
  padding: 3px 0;
  span {
    flex: 1;
    padding: 0 5px;
    &.title {
      text-align: right;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>