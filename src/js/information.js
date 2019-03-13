import axios from "axios";

export default {
  data() {
    var phoneCheck = (rule, value, callback) => {
      if (value === '') {
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
      if (value === '') {
        return callback(new Error('密码不应为空'));
      } else {
        if (this.form.passwordAgain !== '') {
          this.$refs.form.validateField('passwordAgain');
        }
        callback();
      }
    };
    var checkAgain = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致！'));
      } else {
        callback();
      }
    };
    return {
      info: {},
      dialogA: false,
      rules: {
        tel: [{
          validator: phoneCheck,
          trigger: 'blur'
        }, ],
        passwordAgain: [{
          validator: checkAgain,
          trigger: 'blur'
        }],
        password: [{
          validator: passCheck,
          trigger: 'blur'
        }, ],
      },
      form: {
        sex: '',
        tel: '',
        name: '',
        password: '',
        passwordAgain: '',
        age: '',
        role: ''
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getInfo();
    })
  },
  methods: {

    getInfo() {
      var consumer = localStorage.getItem('info');
      // console.log(consumer);
      var info = JSON.parse(consumer);
      // console.log(info);
      this.info = info.userInfo;
    },
    logout() {
      this.$router.push('/');
      localStorage.clear('info');
      sessionStorage.clear('li');
    },

    openAdd() {
      if (this.info.role == 0) {
        this.$message('权限不足');
      } else {
        this.dialogA = true;
      }
    },

    toInfo() {
      this.$router.push('/information');
    },
    //人员列表
    toList() {
      if (this.info.role == 0) {
        this.$message('权限不足');
      } else {
        var self = this;

        axios.get('http://192.168.5.11:8686/pms/list', {
            params: {
              // tel: this.tel,
              // state: 1,
              page: 1,
              count: 10
            }
          })
          .then(function (res) {
            var listing = res.data.response;
            // console.log(listing);
            listing = JSON.stringify(listing);
            sessionStorage.setItem('li', listing);
            self.$router.push('/list');
            // res.data.response:
            // page	//当前页数
            // allPage //总页数
            // count	//每页数量
            // countNum//总数量
            // data	//数据(数组list<body>)
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },

    toAdd() {
      var self = this;
      axios.post('http://192.168.5.11:8686/pms/add', {
          sex: self.form.sex,
          name: self.form.name,
          tel: self.form.tel,
          age: self.form.age,
          role: self.form.role,
          password: self.form.password,
        })
        .then(function (res) {
          // console.log(res);
          axios.get('http://192.168.5.11:8686/pms/list', {
              params: {
                // tel: this.tel,
                // state: 1,
                page: 1,
                count: 10
              }
            })
            .then(function (res) {
              var listing = res.data.response;
              // console.log(listing);
              listing = JSON.stringify(listing);
              sessionStorage.setItem('li', listing);
              self.dialogA = false;
              window.location.reload();
              // res.data.response:
              // page	//当前页数
              // allPage //总页数
              // count	//每页数量
              // countNum//总数量
              // data	//数据(数组list<body>)
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        })
    },

  }
}
