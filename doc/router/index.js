
import VueRouter from 'vue-router'
import routes from './router'
import Vue from 'vue'

Vue.use(VueRouter)
const router = new VueRouter({
    mode:'hash',
    routes:routes
})
export default router