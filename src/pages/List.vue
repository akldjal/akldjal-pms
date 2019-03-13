<template>
  <div class="list-wrap">
    <div class="header">
      <div class="InfoTitle">后台人员管理系统</div>
      <div class="userName">欢迎您,{{ info.name }}</div>
      <div>
        <button @click="logout">注销</button>
      </div>
    </div>

    <div class="content">
      <div class="menu">
        <div @click="toInfo">个人信息</div>
        <div class="Info" @click="toList">人员列表</div>
        <div @click="openAdd">新增人员</div>
      </div>
      <el-dialog title="新增人员" :visible.sync="dialogA" width="300px">
        <el-form :model="form" :rules="rules" label-width="80px">
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
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
              <el-option label="管理员" :value="1"></el-option>
              <el-option label="普通人员" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogA = false">取 消</el-button>
          <el-button type="primary" @click="toAdd">确 定</el-button>
        </div>
      </el-dialog>

      <div class="page-content">
        <div>
          <template>
            <el-input v-model="value9" style="width:40%"></el-input>

            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-button @click.native.prevent="checkInfo(value9, value)">查询</el-button>
          </template>
        </div>

        <div>
          <el-table style="width:100%" :data="datas" ref="lists">
            <el-table-column prop="sex" label="性别" width="60">
              <template slot-scope="scope">
                <span>{{ scope.row.sex | sex-filter }}</span>
              </template>
            </el-table-column>

            <el-table-column prop="tel" label="手机号" width="120"></el-table-column>

            <el-table-column prop="name" label="姓名" width="100"></el-table-column>

            <el-table-column prop="age" label="年龄" width="60"></el-table-column>

            <el-table-column prop="role" label="角色" width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.role | role-filter }}</span>
              </template>
            </el-table-column>

            <el-table-column prop="state" label="状态" width="80">
              <template slot-scope="scope">
                <span>{{ scope.row.state | state-filter }}</span>
              </template>
            </el-table-column>

            <el-table-column prop="id" fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="deleteInfo(scope.row.id)" type="text" size="small">删除</el-button>
                <el-button @click="openEdit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click="blockInfo(scope.row.id, scope.row.state)"
                  type="text"
                  size="small"
                >启/禁</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-dialog title="编辑" :visible.sync="dialogE" width="300px">
            <el-form :model="form2" label-width="80px">
              <el-form-item prop="id" v-model="form2.id"></el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-select v-model="form2.sex" placeholder="请选择性别">
                  <el-option label="男" :value="1"></el-option>
                  <el-option label="女" :value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="手机号" prop="tel">
                <div>{{ form2.tel }}</div>
              </el-form-item>
              <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="form2.name"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-input v-model="form2.age"></el-input>
              </el-form-item>
              <el-form-item label="角色" prop="role">
                <el-select v-model="form2.role" placeholder="请选择角色">
                  <el-option label="管理员" :value="1"></el-option>
                  <el-option label="普通人员" :value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogE = false">取 消</el-button>
              <el-button type="primary" @click="editInfo">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>


<script src="@/js/list.js"></script>
  
<style src="@/styles/list.less" lang="less"></style>