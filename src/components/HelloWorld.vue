<template>
    <div class="yu">
        <yc-scrollbar style="height:60px;">
            <Icon name="iconguanlishitu" />
            <example/>
        </yc-scrollbar>
    </div>
</template>

<script>
import example from '../example/avatar'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components:{
        example
    },
    data(){
        return {
            tableData: []
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
<style lang="scss" scoped>
/deep/ .yc-scrollbar__wrap{
    overflow-x: hidden !important;
}
</style>
