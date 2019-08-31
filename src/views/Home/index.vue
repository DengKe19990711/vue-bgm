<template>
    <div>
        <img width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567178505674&di=50fc56c83e312789409bde85eca36850&imgtype=0&src=http%3A%2F%2Fm1.biz.itc.cn%2Fpic%2Fnew%2Fn%2F84%2F46%2FImg7024684_n.jpg" alt="">
        <ul>
            <router-link tag="li" to="/xq/1?title=嘤嘤嘤">点击A</router-link>
            <router-link tag="li" :to="{name:'php',params:{id:6},query:{title:'QAQ'}}">点击B</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">

</style>