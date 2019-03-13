<template>
  <div class="information-wrap">
    <div class="header">
      <div class="InfoTitle">后台人员管理系统</div>
      <div class="userName">欢迎您,{{ info.name }}</div>
      <div><button @click="logout">注销</button></div>
    </div>
    <div class="content">
      <div class="menu">
        <div class="Info" @click="toInfo">个人信息</div>
        <div @click="toList">人员列表</div>
        <div @click="openAdd">新增人员</div>
      </div>
      <el-dialog title="新增人员" :visible.sync="dialogA" width="300px">
        <el-form :model="form" :rules="rules" label-width="80px">
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="密码确认" prop="passwordAgain">
            <el-input type="password" v-model="form.passwordAgain"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="role">
            <el-select v-model="form.role" placeholder="请选择角色">
              <el-option label="管理员" value="1"></el-option>
              <el-option label="普通人员" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogA = false">取 消</el-button>
          <el-button type="primary" @click="toAdd">确 定</el-button>
        </div>
      </el-dialog>

      <div class="page-content">
        <div class="showInfo">
          姓名:{{ info.name }}<br/>
          性别:{{ info.sex | sex-filter }}<br/>
          手机号:{{ info.tel }}<br/>
          年龄:{{ info.age }}<br/>
          角色:{{ info.role | role-filter }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="@/js/information.js"></script>
  
<style src="@/styles/information.less" lang="less"></style>