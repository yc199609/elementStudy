<template>
    <div>
        <yc-avatar :size="60" src="https://empty">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </yc-avatar>
        <yc-avatar :size="80" icon="iconguanlishitu"></yc-avatar>
        <yc-avatar> avatar </yc-avatar>
        <yc-avatar shape="square" fit="contain" :src="avatarData.url"></yc-avatar>
        <yc-avatar size="large"> large </yc-avatar>
        <yc-avatar size="medium"> medium </yc-avatar>
        <yc-avatar size="small"> small </yc-avatar>
    </div>

</template>
<script>
export default {
    data(){
        return {
            avatarData: {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    },
    methods:{
    }
}
</script>