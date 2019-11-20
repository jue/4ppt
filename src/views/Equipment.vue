<template>
  <div class="eq-box">
    <el-tree
      :data="eqList"
      :highlight-current="true"
      empty-text="加载中"
      node-key="id"
      show-checkbox
      :props="defaultProps"
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
}
/deep/ .el-tree{
  width: 100%;
}
/deep/ .el-tree-node{
  padding: 2px 0;
}
</style>