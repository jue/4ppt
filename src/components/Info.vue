<template>
  <div class="info-box" v-drag>
    <div class="head">
      <div class="name">{{$store.state.stationList[$store.state.currSid].name}}</div>
      <i @click="closeInfo" class="iconfont el-icon-bimgo-close"></i>
    </div>
    <div class="body">
      <div class="line-name">地铁1号线</div>
      <div class="timer">
        <div class="line-timer">
          <span class="text">
            开住
            <strong>贵阳火车站</strong>
          </span>
          <span class="text">
            预计到站
            <strong>04:20</strong>
          </span>
        </div>

        <div class="line-timer">
          <span class="text">
            开住
            <strong>下麦西</strong>
          </span>
          <span class="text">
            预计到站
            <strong>01:08</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeInfo(){
      this.$store.commit('update_showInfo', false)
    }
  }
}
</script>
<style lang="less" scoped>
.info-box {
  position: absolute;
  top: 20px;
  left: 395px;
  z-index: 2;
  background: #008cd6;
  width: 250px;
}
.head {
  font-size: 14px;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  line-height: 24px;
  cursor: move;
  .name {
    flex: 1;
  }
  .iconfont {
    cursor: pointer;
  }
}
.body {
  background: #fff;
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  .line-name {
    font-weight: 700;
    color: #86b81c;
  }
  .timer {
    margin-top: 8px;
    .line-timer {
      display: flex;
      .text {
        &:first-child {
          flex: 1;
        }
        line-height: 22px;
      }
    }
  }
}
</style>