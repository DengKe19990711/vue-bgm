<template>
    <div class="xq">
        <img width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567185955407&di=09efc7513f62be21640f2a6cd8ad7be6&imgtype=0&src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2F838ba61ea8d3fd1fab5cef4417e90f1a94ca5fa7.jpeg%3Ftoken%3Da598565986739db926ab5dc83f036743%26s%3D36BD7C84DACBD92C372430730300E0D0" alt="">
        {{$route.params.id}}
        {{$route.query.title}}
    </div>
</template>

<script>
export default {
    mounted(){
        //console.log(this.$route.query.title)
    }
}
</script>

<style lang="stylus">

</style>