<template>
    <i :class="'iconfont ' + name"></i>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        name: String
    }
}
</script>
