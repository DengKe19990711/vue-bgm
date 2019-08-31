<template>
    <div class="list">
        <img width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567178555813&di=e3b2e9475f14d00dd29bf7c8f4b74b86&imgtype=0&src=http%3A%2F%2Fimg1.ali213.net%2Fpicfile%2FNews%2F2014%2F07%2F21%2Fpm%2F584_20140721211937460.jpg" alt="">
        <div>
            <router-link :to="{name:'list1'}">我是按钮A</router-link>
            <router-link to="/list/list2">我是按钮B</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">

</style>