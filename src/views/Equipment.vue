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
  position: absolute;
  width: 355px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  top: 75px;
  left: 20px;
  display: flex;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
  background: #fff;
}
/deep/ .el-tree{
  width: 100%;
}
</style>