import Vue from 'vue';

let scrollBarWidth;

export default function() {
    if(Vue.prototype.$isServer) return 0;
    if(scrollBarWidth !== undefined) return scrollBarWidth;

    const outer = document.createElement('div');
    outer.className = 'yc-scrollbar__wrap';
    // 强制出现滚动条
    // .el-scrollbar__wrap {
    //   overflow: scroll;
    //   height: 100%
    // }
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    // 父元素出现滚动条，子元素无滚动条，父元素减去子元素的宽度就是滚动条宽度
    scrollBarWidth = widthNoScroll - widthWithScroll;

    return scrollBarWidth;
}