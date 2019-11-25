<template>
  <div class="view-box">
    <div id="view"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seal: ''
    }
  },
  mounted() {
    this.seal = new Seal(document.querySelector('#view'), {
      name: '3d',
      docid:
        'https://filecdn.jue.sh/data/228159488-05--rvt/Resource/____/3D/3D.svf',
      env: 'Local'
    })

    this.seal.setToolBarVisible(false)
  },
  watch: {
    '$store.state.modelBtns': function(){
      this.seal.setToolBarVisible(this.$store.state.modelBtns)
    }
  }
}
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
</style>
