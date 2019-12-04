<template>
  <div class="eq-box">
    <el-tree
      :data="eqList"
      :filter-node-method="filterNode"
      :highlight-current="true"
      :props="defaultProps"
      @check="getDbid"
      empty-text="加载中"
      node-key="id"
      ref="tree"
      show-checkbox
      :default-expand-all="true"
    >
      <span class="el-tree-node__label" slot-scope="{ node, data }">
        <span class="label">{{ node.label }}</span>
        <span v-if="data.alert" class="alert">
          <i @click="showEquipmentStatus(data)" class="iconfont el-icon-bimgo-guzhang"></i>
        </span>
      </span>
    </el-tree>
    
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
      },
      filterText: ''
    }
  },
  mounted() {
    //获取设备列表
    this.getEquipmentList()
  },
  methods: {
    showEquipmentStatus(data){
      this.$emit('showEquipmentStatus', data, '#f00')
    },
    getDbid(data, node) {
      let arr = []
      let tmpArr = []
      let checkedArr = this.$refs.tree.getCheckedNodes()
      checkedArr.forEach(ele => {
        if (ele.dbid != undefined && ele.dbid != '') {
          tmpArr = tmpArr.concat(ele.dbid)
        }
      })
      arr = Array.from(new Set(tmpArr))
      this.$emit('showComponents', arr)
    },
    getEquipmentList() {
      axios.get('./data/equipment.json').then(res => {
        this.eqList = res.data
      })
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
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
  flex-direction: column;
}
.el-tree-node__label {
  display: flex;
  width: 100%;
  .label {
    flex: 1;
  }
  .alert{
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconfont{
    font-size: 12px;
    color: #f00;
  }
}
/deep/ .el-tree {
  width: 100%;
}
/deep/ .el-tree-node {
  padding: 2px 0;
}
</style>