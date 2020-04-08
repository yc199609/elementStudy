<script>
import { addResizeListener, removeResizeListener } from '@/utils/resize-event.js';
import scrollbarWidth from './scrollbar-width';
import { toObject } from '@/utils/util';
import Bar from './bar';

export default {
    name: 'YcScrollbar',
    components: { Bar },
    props: {
        native: Boolean,
        wrapStyle: {},
        wrapClass: {},
        viewClass: {},
        viewStyle: {},
        noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
        tag: {
            type: String,
            default: 'div',
        }
    },
    data() {
        return {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0
        }
    },
    computed: {
        wrap() {
            return this.$refs.wrap;
        }
    },
    render(h) {
        let gutter = scrollbarWidth();
        let style = this.wrapStyle;
        if(gutter) {
            const gutterWidth = `-${gutter}px`;
            const gutterStyle = `margin-bottom: ${gutterWidth}; margin-right: ${gutterWidth};`;

            if(Array.isArray(this.wrapStyle)) {
                style = toObject(this.wrapStyle);
                style.marginRight = style.marginBottom = gutterWidth;
            } else if(typeof this.wrapStyle === 'string') {
                style += gutterStyle
            } else {
                style = gutterStyle;
            }
        }

        const view = h(this.tag, {
            class: ['yc-scrollbar__view', this.viewClass],
            style: this.viewStyle,
            ref: 'resize'
        },this.$slots.default);

        // eslint-disable-next-line no-unused-vars
        const wrap = (
            <div
                ref="wrap"
                style = { style }
                onScroll = { this.handleScroll }
                class={ [this.wrapClass,'yc-scrollbar__wrap', gutter ? '' : 'yc-scrollbar__wrap--hidden-default'] }
            >{ [view] }</div>
        );

        let nodes;

        // eslint-disable-next-line no-empty
        if(!this.native) {
            nodes = ([
                wrap,
                <Bar
                    move={ this.moveX }
                    size={ this.sizeWidth } />,
                <Bar
                    vertical
                    move={ this.moveY }
                    size={ this.sizeHeight } />
            ]);
        } else {
            nodes = ([
                <div
                    ref="wrap"
                    class={ [this.wrapClass, 'yc-scrollbar__wrap'] }
                    style={ style }>{ [view] }</div>
            ])
        }
        return h('div', { class: 'yc-scrollbar' }, nodes)
    },
    methods:{
        handleScroll() {
            const wrap = this.wrap;
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
        },
        update() {
            let heightPercentage, widthPercentage;
            const wrap = this.wrap;
            if (!wrap) return;

            heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
            widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

            this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
            this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
        }
    },
    mounted() {
        if (this.native) return;
        this.$nextTick(this.update);
        !this.noresize && addResizeListener(this.$refs.resize, this.update);
    },
    beforeDestroy() {
        if (this.native) return;
        !this.noresize && removeResizeListener(this.$refs.resize, this.update);
    }
}
</script>
<style lang="scss" scoped>
@include b(scrollbar) {
    overflow: hidden;
    position: relative;

    &:hover,
    &:active,
    &:focus {
        > .yc-scrollbar__bar {
            opacity: 1;
            transition: opacity 340ms ease-out;
        }
    }

    @include e(wrap) {
        overflow: scroll;
        height: 100%;

        @include m(hidden-default) {
            scrollbar-width: none;
            &::-webkit-scrollbar {
                width: 0;
                height: 0;
            }
        }
    }
}
</style>
