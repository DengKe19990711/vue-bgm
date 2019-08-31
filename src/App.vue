<template>
  <div id="app">
      <router-link
        v-for="item in navs"
        :key="item.id"
        :to="item.path"
      >
        {{item.title}}
      </router-link>
       <router-view></router-view>
  </div>
</template>

<style lang="scss">
//设置两个颜色
 .router-link-active{
   color:pink;
 }
 .router-link-exact-active{
   color:plum;
 }
</style>

<script>
  export default {
    components:{

    },
    data(){
      return {
        navs:[
          {id:"1",title:"首页",path:"/home"},
          {id:"2",title:"我的",path:"/mine"},
          {id:"3",title:"列表",path:"/list"},
          {id:"4",title:"购物车",path:"/car"},
        ]
      }
    }
  }
</script>
