export default {
  data() {
    return {
      tableData: [{
        age: '2016-05-02',
        name: '王小虎',
        state: '禁用',
        sex: '男',
      }, {
        age: '2016-05-04',
        name: '王小虎',
        state: '禁用',
        sex: '女',
      }, {
        age: '2016-05-01',
        name: '王小虎',
        state: '禁用',
        sex: '男',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '女',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '女',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '男',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '男',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '女',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '女',
      }, {
        age: '2016-05-03',
        name: '王小虎',
        state: '启用',
        sex: '女',
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterState(value, row) {
      return row.state === value;
    },
    filterSex(value, row) {
      return row.sex === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    returnInfo() {
      this.$router.push('/information');
    }
  },
}
