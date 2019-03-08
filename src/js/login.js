export default {
  components: {

  },
  data() {
    var phoneCheck = ( rule, value, callback ) => {
      if (!value) {
        return callback(new Error('手机号不应为空'));
      } else if (!Number.isInteger(value)) {
        return callback(new Error('手机号应为纯数字'));
      } else {
        const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('手机号错误'));
        }
      }
    };
    return {
      ruleForm: {
        phonenumber: '',
        password: '',
      },
      rules: {
        phonenumber: [{
          validator: phoneCheck,
          trigger: 'blur'
        }, ],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }, ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$router.push('/information');
      // this.$refs[formName].validate(valid) => {
      //   if (valid) {
      //     localStorage.setItem('')
      //   }
      // }
    }
  }
};
