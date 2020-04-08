import Vue from 'vue'
import Alert from './index.vue'

export const Message = () => {
    var Profile = Vue.extend(Alert);
    var instance = new Profile();
    instance.$mount();
    document.body.appendChild(instance.$el)
}
