<template>
    <div>
        <Icon name="iconguanlishitu" />
        <yc-link href="https://element.eleme.io" target="_blank">默认链接</yc-link><br>
        <yc-link type="primary">主要链接</yc-link> <br>
        <yc-link type="success">成功链接</yc-link><br>
        <yc-link type="warning">警告链接</yc-link><br>
        <yc-link type="danger">危险链接</yc-link><br>
        <yc-link type="info">信息链接</yc-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
            tableData: [
                // {
                //     date: '2016-05-02',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1518 弄'
                // }, 
                // {
                //     date: '2016-05-04',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1517 弄'
                // }, 
                // {
                //     date: '2016-05-01',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1519 弄'
                // }, 
                // {
                //     date: '2016-05-03',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1516 弄'
                // }
            ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
