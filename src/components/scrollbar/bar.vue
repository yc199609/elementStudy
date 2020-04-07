<script>
import { on, off } from '@/utils/dom';
import { BAR_MAP, renderThumbStyle } from './util';
export default { 
    name: 'Bar',
    props: {
        vertical: Boolean,
        size: String,
        move: Number,
    },
    computed: {
        bar() {
            return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
        },

        wrap() {
            return this.$parent.wrap;
        }
    },

    render() {
        const { size, move, bar } = this;

        return (
            <div
                class={ ['yc-scrollbar__bar', 'is-' + bar.key] }
                onMousedown={ this.clickTrackHandler }
            >
                <div
                    ref="thumb"
                    class="yc-scrollbar__thumb"
                    onMousedown={ this.clickTrackHandler }
                    style={ renderThumbStyle({ size, move, bar })}
                />
            </div>
        )
    },
    methods: {
        clickThumbHandler(e) {
            // prevent click event of right button
            if (e.ctrlKey || e.button === 2) {
                return;
            }
            this.startDrag(e);
            this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
        },
        clickTrackHandler(e) {
            if (e.ctrlKey || e.button === 2) {
                return;
            }
            this.startDrag(e);
            this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
        },
        startDrag(e) {
            e.stopImmediatePropagation();
            this.cursorDown = true;

            on(document, 'mousemove', this.mouseMoveDocumentHandler);
            on(document, 'mouseup', this.mouseUpDocumentHandler);
            document.onselectstart = () => false;
        },
        mouseMoveDocumentHandler(e) {
            if (this.cursorDown === false) return;
            const prevPage = this[this.bar.axis];

            if (!prevPage) return;

            const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
            const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage);
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);

            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        },
        mouseUpDocumentHandler() {
           this.cursorDown = false;
           this[this.bar.axis] = 0;
           off(document, 'mousemove',);
           document.onselectstart = null;
        }
    },
    destroyed() {
        off(document, 'mouseup', this.mouseUpDocumentHandler);
    }
}
</script>
<style lang="scss" scoped>
@include b(scrollbar) {
    @include e(thumb) {
        position: relative;
        display: block;
        width: 0;
        height: 0;
        cursor: pointer;
        border-radius: inherit;
        background-color: rgba(#909399, .3);
        transition: .3s background-color;

        &:hover {
            background-color: rgba(#909399, .5);
        }
    }
    
    @include e(bar) {
        position: absolute;
        right: 2px;
        bottom: 2px;
        z-index: 1;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 120ms ease-out;

        @include when(vertical) {
            width: 6px;
            top: 2px;

            > div {
                width: 100%;
            }
        }

        @include when(horizontal) {
            height: 6px;
            left: 2px;

            > div {
                height: 100%;
            }
        }
    }
}
</style>
