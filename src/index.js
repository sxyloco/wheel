
import Gbutton from './components/button/button'
import Gicon from './components/icons/icon.vue'
import GbuttonGroup from './components/button/g-button-group.vue'
import GInput from './components/input/input.vue'
import GCol from './components/grid/col.vue'
import GRow from './components/grid/row.vue'
import './style/index.scss'
const install = (Vue)=>{
    Vue.component('g-button',Gbutton)
    Vue.component('g-icon',Gicon)
    Vue.component('g-button-group',GbuttonGroup)
    Vue.component('g-input',GInput)
    Vue.component('g-row',GRow)
    Vue.component('g-col',GCol)
}

// Vue.component('g-button',Gbutton)
// Vue.component('g-icon',Gicon)
// Vue.component('g-button-group',GbuttonGroup)
// Vue.component('g-input',GInput)
// new Vue({
//     el:'#app',
//     render:(h)=>{
//         return h(app)
//     }
// })

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    Gbutton,Gicon,GbuttonGroup,GInput,GCol,GRow,install
}

// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect


// {
//     const Constructor = Vue.extend(Gbutton)
//     const vm = new Constructor({
//         propsData:{
//             icon:'setting'
//         }
//     })
//     vm.$mount()
//     let useElment = vm.$el.querySelector('use')
//     let href = useElment.getAttribute('xlink:href')
//     expect(href).to.eq('#iconsetting')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Gbutton)
//     const vm = new Constructor({
//         propsData:{
//             icon:'setting',
//             loading:true
//         }
//     })
//     vm.$mount()
//     let useElment = vm.$el.querySelector('use')
//     let href = useElment.getAttribute('xlink:href')
//     expect(href).to.eq('#icong-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Gbutton)
//     const vm = new Constructor({
//         propsData:{
//             icon:'g-setting',
//             loading:false,
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Gbutton)
//     const vm = new Constructor({
//         propsData:{
//             icon:'g-setting',
//             loading:false,
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)
//     let spy = chai.spy(function(){})
//     vm.$on('click',spy)// 绑定事件
//     let button = vm.$el
//     button.click()// 执行事件
//     expect(spy).to.have.been.called()
//     // vm.$el.remove()
//     // vm.$destroy()
// }

