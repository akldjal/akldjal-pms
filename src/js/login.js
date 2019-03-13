import axios from 'axios';
// import md5 from 'blueimp-md5';

export default {
  data() {
    var phoneCheck = (rule, value, callback) => {
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
    var passCheck = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不应为空'));
      } else {
        callback();
      }
    };
    return {
      user: {
        tel: '',
        password: '',
      },
      rules: {
        tel: [{
          validator: phoneCheck,
          trigger: 'blur'
        }, ],
        password: [{
          validator: passCheck,
          trigger: 'blur'
        }, ],
      }
    };
  },
  methods: {
    login() {
      let self = this;
      if (self.user.tel == '' || self.user.password == '') {
        self.$message('账号密码不能为空');
      } else {
        axios.get('http://192.168.5.11:8686/pms/login', {
            params: {
              tel: self.user.tel,
              password: self.user.password
            }
          })
          .then(function (res) {
            // console.log(res);
            self.$router.push('/information');
            var consumer = res.data.response;
            consumer = JSON.stringify(consumer);
            localStorage.setItem('info', consumer);
            //res.data.response: id, role, tel, name, sex, state, age
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  }
};
