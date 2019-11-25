<template>
  <div :class="{open: open}" class="point-box">
    <div @click="changeOpen" class="expand-button">
      <i class="iconfont el-icon-bimgo-dongtaishijiao"></i>
      <span>视角探索</span>
      <i class="iconfont el-icon-bimgo-up"></i>
    </div>
    <div class="list">
      <div class="item">
        <img class="pic" src="https://i.loli.net/2019/11/25/ZEue5iQhgoRWSCy.jpg" />
        <div class="txt">
          <i class="iconfont el-icon-bimgo-dongtaishijiao"></i> 站厅层
        </div>
      </div>
      <div class="item">
        <img class="pic" src="https://i.loli.net/2019/11/25/ZEue5iQhgoRWSCy.jpg" />
        <div class="txt">
          <i class="iconfont el-icon-bimgo-dongtaishijiao"></i> 站厅层
        </div>
      </div>
      <div class="item">
        <img class="pic" src="https://i.loli.net/2019/11/25/ZEue5iQhgoRWSCy.jpg" />
        <div class="txt">
          <i class="iconfont el-icon-bimgo-dongtaishijiao"></i> 站厅层
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    changeOpen() {
      this.open = !this.open
    }
  }
}
</script>
<style lang="less" scoped>
.point-box {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
}

.expand-button {
  display: flex;
  position: absolute;
  z-index: 5;
  bottom: 0px;
  transform: translateY(-10px);
  right: 20px;
  cursor: pointer;
  height: 30px;
  font-size: 12px;
  padding: 0 15px;
  background-color: white;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.2s linear;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
  .iconfont {
    display: flex;
    align-self: center;
  }
  .el-icon-bimgo-up {
    transition: all 0.2s linear;
  }
  span {
    display: inline-block;
    padding: 0 10px;
    display: flex;
    align-self: center;
  }
}

.list {
  position: relative;
  background: #fff;
  z-index: 4;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.15);
  border-top: 2px solid white;
  width: 100%;
  transform: translateY(100%);
  display: flex;
  padding: 15px 0;
  cursor: pointer;
  .item {
    width: 203px;
    height: 100px;
    position: relative;
    margin: 0 10px;
    border-radius: 8px;
    overflow: hidden;
    .pic {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
    }
    .txt {
      position: absolute;
      font-size: 12px;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100%;
      color: #fff;
      padding: 0 10px 5px;
      background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
      text-shadow: rgba(0, 0, 0, 0.7) 0px 1px 8px;
      font-weight: 700;
    }
  }
}

.open {
  .expand-button {
    border-radius: 8px 8px 0 0;
    box-shadow: -1px -1px 2px 0px rgba(0, 0, 0, 0.1),
      1px -1px 2px 0px rgba(0, 0, 0, 0.1);
    top: 0;
    transform: translateY(-100%);
    .el-icon-bimgo-up {
      transform: rotate(180deg);
    }
  }
  .list {
    display: flex;
    transform: translateY(0%);
  }
}
</style>