const defaultPath = '/guide'
import GUIDE from '../guide.md'
// import INPUT from '../pages/input.md'
const COMP_MAP={
    'input': ()=> import('../pages/input.md'),
    'grid': ()=> import('../pages/grid.md')
}
let routes = [
    {
        path: '/',
        redirect: defaultPath
      }, {
        path: '*',
        redirect: defaultPath
      },{
          path:'/guide',
          name:'guide',
          component:GUIDE
      }

]
const addRoute=()=>{
   Object.keys(COMP_MAP).forEach(item=>{
     routes.push({
       path:`/${item}`,
       name:item,
       component:COMP_MAP[item]
     })
   })
}
addRoute()
export default routes