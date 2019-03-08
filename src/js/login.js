export default {
  components: {

  },
  data() {
    var phonenumberCheck = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('手机号只能为数字'));
        } else if (value) {
          callback(new Error('手机号应为11位数字'));
        } else {
          callback();
        }
      })
    };
    var passwordCheck = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不为空'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        phonenumber: '',
        password: '',
      },
      rules: {
        phonenumber: [{
          validator: phonenumberCheck,
          trigger: 'blur'
        }, ],
        password: [{
          validator: passwordCheck,
          trigger: 'blur'
        }, ],
      }
    };
  },
  methods: {
  }
};
