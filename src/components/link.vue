<template>
    <a>
        <i :class="'iconfont ' + icon" v-if="icon"></i>
        <span class="">
            <slot></slot>
        </span>

        <slot name="icon"></slot>
    </a>
</template>
<script>
export default {
    name: 'ElLink',
    props: {
        icon: String
    }
}
</script>
