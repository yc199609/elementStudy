<template>
    <a
        :class="[
            'yc-link',
            type ? `yc-link--${type}` : '',
            disabled && 'is-disabled',
            underline && !disabled && 'is-underline'
        ]"
        :href="disabled? null : href"
        v-bind="$attrs"
        @click="handleClick"
    >
        <i :class="'iconfont ' + icon" v-if="icon"></i>

        <span class="yc-link--inner">
            <slot></slot>
        </span>

        <slot name="icon"></slot>
    </a>
</template>
<script>
export default {
    name: 'YcLink',
    props: {
        icon: String,
        disabled: Boolean,
        href: String,
        underline: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: 'default',
        }
    },
    methods: {
        handleClick(event){
            if(!this.disabled) {
                if(!this.href) {
                    this.$emit('click', event)
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$typeMap:(
    primary: $--color-primary,
    danger: $--color-danger,
    success: $--color-success,
    warning: $--color-warning,
    info: $--color-info,
);

@include b(link) {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: normal;

    @include when(underline) {
        &:hover:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 0;
            bottom: 0;
            border-bottom: 1px solid #409EFF;
        }
    }

    @include when(disabled) {
        cursor: not-allowed;
    }

    & [class*="iconfont"] {
        & + span {
            margin-left: 5px;
        }
    }

    &.yc-link--default {
        color: $--color-text-regular;
        &:hover{
            color: $--color-primary;
        }
        &:after{
            border-color: $--color-primary;
        }
        @include when(disabled) {
            color: $--color-text-placeholder;
        }
    }

    @each $type, $primaryColor in $typeMap {
        &.yc-link--#{$type} {
            color: $primaryColor;
            &:hover {
                color: mix($primaryColor, $--color-white, 80%)
            }
            &:after {
                border-color: $primaryColor;
            }
            @include when(disabled) {
                color: mix($primaryColor, $--color-white, 50%);
            }
            @include when(underline) {
                &:hover:after{
                    border-color: $primaryColor;
                }
            }
        }
    }

}
</style>
