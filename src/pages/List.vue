<template>
  <div class="page-wrap list-wrap">
      <div><button @click="returnInfo">返回个人信息</button></div>
      <el-table :data="tableData" stripe="true" style="width:100%">
      <el-table-column
        prop="sex"
        label="性别"
        width:100px
        :filters="[{ text: '男', value: '男' }, { text: '女', value: '女' }]"
        :filter-method="filterSex"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.sex === '男' ? 'primary' : 'success'"
            disable-transitions
          >{{ scope.row.sex }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号" width:180px></el-table-column>
      <el-table-column prop="name" label="姓名" width:180px></el-table-column>
      <el-table-column prop="age" label="年龄" width:180px></el-table-column>
      <el-table-column prop="role" label="角色" width:180px></el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="100"
        :filters="[{ text: '启用', value: '启用' }, { text: '禁用', value: '禁用' }]"
        :filter-method="filterState"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state === '启用' ? 'primary' : 'success'"
            disable-transitions
          >{{ scope.row.state }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script src="@/js/list.js"></script>
  
<style src="@/styles/list.less" lang="less"></style>