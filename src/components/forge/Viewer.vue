<template>
  <div class="view-box">
    <div id="view"></div>
    <equipment-detail ref="equipmentDetail"></equipment-detail>
  </div>
</template>
<script>
import axios from "axios";
import EquipmentDetail from "@/components/EquipmentDetail.vue";
export default {
  components: {
    EquipmentDetail
  },
  data() {
    return {
      seal: "",
      currEle: {}
    };
  },
  mounted() {
    this.seal = new Seal(document.querySelector("#view"), {
      name: "3d",
      docid: this.$store.state.stationList[this.$store.state.currSid].forge_url,
      env: "Local"
    });

    this.seal.on("geometry.loaded", () => {
      this.$emit("modelLoaded");
    });

    // let heapData = [];

    this.seal.on("click", ele => {
      console.log(ele);
      //客伤热力图添加数据
      // heapData.push({
      //   dbId: ele.dbId,
      //   point: ele.point
      // });

      // this.seal.heatmapExtension.add(ele.point, ele.dbId);

      // axios.put("https://api.myjson.com/bins/xuwtk", heapData).then(res => {
      //   console.log(heapData, " 热力图数据已保存");
      // });

      //设置标签
      if (this.$store.state.switch.setMarkUp) {
        if (this.seal.markupExtension.list.length > 0) {
          this.seal.markupExtension.removeAll();
        }
        this.setMarkUp();
        this.$emit("getClickData", {
          dbId: ele.dbId,
          point: ele.point,
          state: this.getState()
        });
      }

      //查看设备
      if (
        this.$route.name == "equipment" &&
        !this.$store.state.switch.setMarkUp
      ) {
        // this.$emit('showEqDtail')
        this.$refs.equipmentDetail.drawer = true;
        this.$refs.equipmentDetail.dbId = ele.dbId;
      }
    });

    // this.seal.off('click')
  },
  methods: {
    //设置客伤热力图
    activeHeatmap(heatmap) {
      if (heatmap) {
        
        axios.get("https://api.myjson.com/bins/xuwtk").then(res => {
          res.data.forEach((item, index) => {
            this.seal.heatmapExtension.add(item.point, item.dbId);
          });
        });
      } else {
        this.seal.heatmapExtension.removeAll();
      }
    },
    showEquipmentStatus(data, color = "") {
      if (this.seal.markupExtension.list.length) {
        this.seal.markupExtension.removeAll();
      }
      this.seal.fitToView(data.dbid);
      if (color != "") {
        this.seal.clearThemingColors();
        this.seal.setThemingColor(data.dbid, color);
      }
      this.seal.markupExtension.addByBounds(data.dbid, {
        innerHTML: '<div class="model-tips"><span>故障处理中</span></div>'
      });
    },
    //缩放并隔离构件集
    showComponents(dbIdArr) {
      this.seal.fitToView(dbIdArr);
      this.seal.isolate(dbIdArr);
    },
    //加载模型
    loadModel() {
      this.seal.loadModel(
        this.$store.state.stationList[this.$store.state.currSid].forge_url
      );
    },
    //点击模型获取数据
    getForgeData1(type) {
      let tmpHtml =
        '<i style="color:#c33;" class="iconfont el-icon-bimgo-dingwei"></i>';

      this.seal.on("click", event => {
        if (this.seal.markupExtension.list.length) {
          this.seal.markupExtension.removeAll();
        }
        this.seal.markupExtension.add(event.point, event.dbId, {
          innerHTML: tmpHtml
        });

        this.$emit("getClickData", {
          dbId: event.dbId,
          point: event.point
        });
      });

      return event;
    },
    //获取当前模型state
    getState() {
      return this.seal.getCurrentState();
    },
    //获取当前模型state截图
    getShot() {
      return this.seal.getScreenShot(203, 100).then(res => {
        return res;
      });
    },
    //恢复视角
    restoreState(state) {
      this.seal.restoreState(state);
    },

    //点击设置标签
    setMarkUp() {
      let _this = this;
      this.seal.on("click", ele => {
        this.currEle = ele;
        _this.seal.markupExtension.add(ele.point, ele.dbId);
      });
    },

    //添加标记符
    addMarkUp(point, dbId, type = "clear") {
      if (this.seal.markupExtension.list.length && type == "clear") {
        this.seal.markupExtension.removeAll();
      }
      //临时添加
      if (this.$route.name == "tags") {
        this.seal.markupExtension.add(point, dbId, {
          innerHTML:
            '<div class="model-tips"><svg viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="30"height="30"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z"fill="#FF3D00"></path></svg><div class="info-box"><div class="head"><div class="name">摄像头</div></div><div class="body"><video width="100%"height="150"playsinline webkit-playsinline autoplay controls preload="auto"x-webkit-airplay="true"x5-video-player-fullscreen="true"x5-video-player-typ="h5"><source src="http://hls.open.ys7.com/openlive/65275bd31eab4b9794936d86248876e7.m3u8"type="application/x-mpegURL"></video></div></div></div>'
        });
      } else {
        this.seal.markupExtension.add(point, dbId);
      }
    }
  },
  watch: {
    "$store.state.modelBtns": function() {
      this.seal.setToolBarVisible(this.$store.state.modelBtns);
    }
  }
};
</script>
<style lang="less" scoped>
.view-box {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
#view {
  position: absolute;
  width: 100%;
  height: 100%;
}
/deep/ .viewcubeWrapper {
  right: 60px;
}

/deep/ .model-tips {
  text-align: center;
  font-size: 12px;
  position: relative;
  span {
    display: inline-block;
    border: 1px #f00 solid;
    color: #f00;
    border-radius: 3px;
    padding: 2px 4px;
    &:before {
      position: absolute;
      content: "";
      height: 10px;
      width: 2px;
      background: #f00;
      top: 100%;
      left: calc(~"50% - 1px");
    }
    &:after {
      position: absolute;
      content: "";
      height: 2px;
      width: 6px;
      background-color: rgba(153, 153, 153, 0.2);
      top: calc(~"100% + 10px");
      left: calc(~"50% - 3px");
      border-radius: 4px;
    }
  }
  .info-box {
    position: absolute;
    top: 0;
    left: 100%;
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
  }
  .body {
    background: #fff;
    margin: 0 5px 5px;
    font-size: 12px;
    video {
      vertical-align: bottom;
    }
  }
}
</style>
