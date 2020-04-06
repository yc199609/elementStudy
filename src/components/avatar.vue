<script>
export default {
    name: 'YcAvatar',
    props :{
        size : {
            type: [Number, String],
            validator(val) {
                if (typeof val === 'string') {
                    return ['large', 'medium', 'small'].includes(val);
                }
                return typeof val === 'number'
            }
        },
        shape: {
            type: String,
            default: 'circle',
            validator(val) {
                return ['circle', 'square'].includes(val);
            }
        },
        icon: String,
        src: String,
        alt: String,
        srcSet: String,
        error: Function,
        fit: {
            type: String,
            default: 'cover'
        }
    },
    data() {
        return {
            isImageExist: true
        }
    },
    computed: {
        avatarClass() {
            const { size, icon, shape } = this;
            let classList = ['yc-avatar'];
            if(size && typeof size === 'string') {
                classList.push(`yc-avatar--${size}`);
            }
            if(icon) {
                classList.push('yc-avatar--icon');
            }
            if(shape) {
                classList.push(`yc-avatar--${shape}`);
            }
            return classList.join(' ');
        }
    },
    methods:{
        handleError() {
            const { error } = this;
            const errorFlag = error ? error() : undefined;
            if(errorFlag !== false) {
                this.isImageExist = false
            }
        },
        renderAvatar(){
            const { icon, src, alt, isImageExist, srcSet, fit } = this;
            if (isImageExist && src) {
                return <img
                    src={src}
                    onError={this.handleError}
                    alt={alt}
                    srcSet={srcSet}
                    style={{ 'object-fit': fit }}
                />
            }

            if(icon){
                return (<i class={'iconfont ' + icon} />)
            }

            return this.$slots.default
        }
    },
    render() {
        const { avatarClass, size } = this;
        const sizeStyle = typeof size === 'number' ? {
            height: `${size}px`,
            width: `${size}px`,
            lineHeight: `${size}px`
        } : {};
        return (
            <span class={ avatarClass } style={sizeStyle}>
                {
                    this.renderAvatar()
                }
            </span>
        )
    }
}
</script>
<style lang="scss" scoped>
@include b(avatar) {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    color: #fff;
    background: #C0C4CC;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;

    >img {
        display: block;
        height: 100%;
    }
    
    @include m(circle) {
        border-radius: 50%;
    }

    @include m (square) {
        border-radius: $--border-radius-base;
    }

    @include m (icon){
        font-size: 18px;
    }

    @include m (large) {
        $--avatar-large-size: 40px;
        width: $--avatar-large-size;
        height: $--avatar-large-size;
        line-height: $--avatar-large-size;
    }

    @include m (medium) {
        $--avatar-medium-size: 36px;
        width: $--avatar-medium-size;
        height: $--avatar-medium-size;
        line-height: $--avatar-medium-size;
    }

    @include m (small) {
        $--avatar-small-size: 28px;
        width: $--avatar-small-size;
        height: $--avatar-small-size;
        line-height: $--avatar-small-size;
    }
}


</style>