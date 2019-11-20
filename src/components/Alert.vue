<template>
  <div class="alert-box">
    <div class="badge">
      <i class="iconfont el-icon-bimgo-alert" :class="{ alert : alertNum > 0 }"></i>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      alertNum: 7
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
.badge{
  cursor: pointer;
  .flex;
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  .iconfont{
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
    &.alert{
      color: rgba(250, 0, 0, 0.9);
    }
  }
}
</style>