import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import '@/style/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/scss.scss'


import Icon from './components/icon.vue';
import Link from './components/link.vue';


Vue.component(Icon.name, Icon)
Vue.component(Link.name, Link)

Vue.use(ElementUI);

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
