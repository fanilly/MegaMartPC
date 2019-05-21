<template>
    <div id="app">
        <!-- 公共头部 默认显示 若顶部有特殊需求 在路由meta中添加hideHeader为true即可隐藏 -->
        <common-header v-if="!$route.meta.hideHeader"></common-header>
        <div id="content">
            <!-- <transition name="fade"> -->
                <keep-alive v-if="$route.meta.keepAlive">
                    <router-view class="child-view" />
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" class="child-view" />
            <!-- </transition> -->
        </div>
        <!-- 公共底部 默认显示 若顶部有特殊需求 在路由meta中添加hideFooter为true即可隐藏 -->
        <common-footer v-if="!$route.meta.hideFooter"></common-footer>
    </div>
</template>
<script>
    import { Header } from './pages/common/header/index';
    import { Footer } from './pages/common/footer/index';
    export default {
        name: 'App',
        data() {
            return {
                transitionName: '',
            }
        },
        components: {
            [Header.name]: Header,
            [Footer.name]: Footer,
        },
        methods: {

        },
        mounted() {

        },
        watch: {}
    }

</script>
<style lang="less" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        background: url(./assets/images/watermark.png) repeat;
        background-color: #f5f5f5;
    }

    #content {
        width: 1200px;
        margin: auto;
    }
</style>
