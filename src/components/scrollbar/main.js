// import { addResizeListener, removeResizeListener } from 'src/utils/resize-event.js';
import scrollbarWidth from './scrollbar-width';
import { toObject } from 'src/utils/util';

export default {
    name: 'YcScrollbar',
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

        const wrap = (
            <div
                ref="wrap"
                style = { style }
                onScroll = { this.handleScroll }
                class={[this.wrapClass,'yc-scrollbar__wrap', gutter ? '' : 'yc-scrollbar__wrap--hidden-default']}
            >{ [view] }</div>
        );

        let nodes;

        if(!this.native) {

        } else {
            nodes = ([
                <div
                    ref="wrap"
                    class={ [this.wrapClass, 'yc-scrollbar__wrap'] }
                    style={ style }>{ [view] }</div>
            ])
        }
        return h('div', { class: 'yc-scrollbar' }, nodes)
    }
}