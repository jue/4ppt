<template>
  <div class="eq-box">
    <el-tree
      :data="eqList"
      :highlight-current="true"
      :props="defaultProps"
      empty-text="加载中"
      node-key="id"
      show-checkbox
    ></el-tree>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      eqList: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    //获取设备列表
    this.getEquipmentList()
  },
  methods: {
    getEquipmentList() {
      axios.get('./data/equipment.json').then(res => {
        this.eqList = res.data
      })
    }
  }
}
</script>
<style lang="less" scoped>
.eq-box {
  display: flex;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 15px;
}
/deep/ .el-tree {
  width: 100%;
}
/deep/ .el-tree-node {
  padding: 2px 0;
}
</style>