<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  transition: all 0.2s linear;
}
body {
  color: #303133;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 0;
}
a {
  text-decoration: none;
  color: #409eff;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
#app {
  min-height: 100vh;
}
[class*=' el-icon-bimgo-'],
[class^='el-icon-bimgo-'] {
  font-family: 'iconfont' !important;
}
</style>
