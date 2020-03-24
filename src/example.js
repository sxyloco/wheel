import Vue from 'vue'
import app from './app.vue'
import './style/index.scss'
import Gbutton from './components/button/button'
import Gicon from './components/icons/icon.vue'
import GbuttonGroup from './components/button/g-button-group.vue'
Vue.component('g-button',Gbutton)
Vue.component('g-icon',Gicon)
Vue.component('g-button-group',GbuttonGroup)
new Vue({
    el:'#app',
    render:(h)=>{
        return h(app)
    }
})