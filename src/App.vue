<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <p class="el-yc">sdsadsasa</p>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { addResizeListener } from './utils/resize-event';

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    mounted() {
        console.log(this.$yc)
        this.$yc()

        // addResizeListener(document.body,this.handleResize)
    },
    methods:{
        handleResize(e){
            console.log(e)
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
