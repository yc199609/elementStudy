import Vue from 'vue'
import App from './App.vue'
import '@/style/index.css'
import '@/style/scss.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Icon from './components/icon.vue';
import Link from './components/link.vue';
import Avatar from './components/avatar.vue'
import Scrollbar from './components/scrollbar/index.vue'
import Message from './components/alert/index';

Vue.use(ElementUI);


Vue.component(Icon.name, Icon)
Vue.component(Link.name, Link)
Vue.component(Avatar.name, Avatar)
Vue.component(Scrollbar.name, Scrollbar)

Vue.prototype.$yc = Message;

Vue.config.productionTip = false

Vue.directive('demo',{
    bind:(el)=>{
        console.log(el)
        // console.log(vnode)
        // console.log(oldVnode)
    }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
