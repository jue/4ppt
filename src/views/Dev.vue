<template>
  <div class="dev-box">
    <div id="view"></div>
    <div class="bar">
      <el-button @click="addMarkUp">开启插入标签</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seal: '',
      //功能开关
      switch: {
        setMarkUp: false
      }
    }
  },
  mounted() {
    this.seal = new Seal(document.querySelector('#view'), {
      name: '3d',
      docid: './01/Resource/____/3D/3D.svf',
      env: 'Local'
    })

    this.seal.on('geometry.loaded', () => {
      if (this.switchsetMarkUp == true) {
      }
    })

    this.seal.on('click', ele => {})
  },
  methods: {
    addMarkUp() {
      console.log(this.$store.state.switch)
    },

    //代码开发测试
    dev() {
      let _this = this
      this.seal.on('click', e => {
        console.log(e)
        // _this.seal.markupExtension.add(e.point, e.dbId)
      })

      // this.seal.fitToView([16124])

      this.seal.markupExtension.add(
        {
          x: -87.33223822421317,
          y: -76.76081060058664,
          z: -27.288406372070312
        },
        16124,
        { innerHTML: '<i class="iconfont el-icon-bimgo-camera"></i>' }
      )
    }
  }
}
</script>
<style lang="less" scoped>
.dev-box {
  display: flex;
  min-height: 100vh;
  #view {
    position: relative;
    flex: 1;
  }
  .bar {
    width: 200px;
    background: #fff;
    padding: 40px 20px;
  }
}
</style>