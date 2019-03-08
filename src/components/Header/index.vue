<template>
  <div class="header-wrap">
    <div>后台人员管理系统</div>
    <div class="dropdown-wrap">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="SignOut">SignOut</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less"></style>
