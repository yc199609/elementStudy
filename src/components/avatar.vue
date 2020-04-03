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
