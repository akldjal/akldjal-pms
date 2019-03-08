<template>
  <div class="login">
    <div class="window">
      <div class="title">后台人员管理系统</div>
      <div class="form">
        <el-form :label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phonenumber">
            <el-input
              type="phonenumber"
              v-model.number="ruleForm.phonenumber"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item class="submit-button-content">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script src="@/js/login.js"></script>
  
<style src="@/styles/login.less" lang="less"></style>