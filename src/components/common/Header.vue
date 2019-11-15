<template>
  <div class="header">
    <div class="header-logo">
      <svg height="40" version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M896 64H128C92.8 64 64 92.8 64 128v768c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m-128 514.8c0 98.8-22.8 165.2-207.6 165.2h-33.8c-88.2 0-124.8-29.8-140.8-77.6h-1.8V736H256V272h128v149.4h2.2c9.2-61 79.4-77.6 139.4-77.6h34.6c184.8 0 207.6 66.2 207.6 165v70z m-128-57.8v45.8c0 43.4-6.8 67.6-76.8 67.6h-90.6c-57.8 0-88.2-13-88.2-71.4v-38c0-58.6 30.4-71.4 88.2-71.4h90.6c70-0.4 76.8 24 76.8 67.4z"
          fill="#409EFF"
        />
      </svg>
      <span class="sys-name"></span>
    </div>

    <div class="header-title">
      <div class="title">林城西路站</div>
    </div>

    <div class="header-body">
      <div class="header-body-item">
        <el-badge is-dot>
          <i class="el-icon-bimgo-bell"></i>
        </el-badge>
      </div>
      <el-dropdown class="header-body-item" trigger="hover">
        <span class="el-dropdown-link">
          <el-avatar icon="el-icon-bimgo-user" size="small"></el-avatar>
          <span class="user-name">项剑锋</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-bimgo-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-bimgo-setting">设置</el-dropdown-item>
          <el-dropdown-item divided icon="el-icon-bimgo-logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  display: flex;
  height: 100%;
  margin: 0 -6px;
}
.header-logo {
  display: flex;
  align-items: center;
  .ripple-menu {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    .iconfont {
      font-size: 22px;
    }
  }
  .sys-name {
    font-size: 18px;
    padding: 0 5px;
    color: #5f6368;
  }
}

.header-title{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .title{
    font-size: 21px;
    font-weight: 900;
    letter-spacing: 1px;
  }
}

.header-body {
  display: flex;
  align-items: center;
  margin-right: -10px;

  .header-body-item {
    padding: 0 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    &:hover{
      background: rgba(0,0,0,.025);
    }
    .el-dropdown-link {
      display: flex;
      align-items: center;
    }
    .user-name {
      margin-left: 5px;
    }
    .el-icon-bimgo-bell{
      font-size: 20px;
      color: #606266;
    }
  }
}
</style>