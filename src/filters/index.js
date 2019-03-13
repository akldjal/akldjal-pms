import Vue from "vue";

Vue.filter('sex-filter', function (value) {
  let sex = ""
  if (value === 0) {
    sex = "女"
  } else {
    sex = "男"
  }
  return sex
})
Vue.filter('role-filter', function (value) {
  let role = ""
  if (value === 1) {
    role = "管理员"
  } else {
    role = "普通人员"
  }
  return role
})
Vue.filter('state-filter', function (value) {
  let state = ""
  if (value === 0) {
    state = "已禁用"
  } else {
    state = "已启用"
  }
  return state
})