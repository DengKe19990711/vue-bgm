import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  routes: [
      {path:"/",redirect:"/home"},
      {path:"/home",component:()=>import("@/views/Home")},
      {path:"/mine",component:()=> import ("@/views/Mine")},
      {path:"/list",component:()=>import("@/views/List"),children:[
        {path:"",redir8ect:"/list/list1"},
        {path:"list1",component:()=>import("@/views/List/List1"),name:'list1'},
        {path:"list2",component:()=>import("@/views/List/List2")}
      ]},
      {path:"/car",component:()=>import("@/views/Car")},
      {path:"/xq/:id",component:()=>import("@/views/Home/Xq"),name:'php'},
  ] 
})

export default router