<template>
    <header class="header">

        <section class="top-wapper">
            <section class="top-content">
                <aside class="lside">
                    <router-link class="item a" to="/">商城首页</router-link>
                    <span class="item">Hi~欢迎来到Mega Mart</span>
                    <router-link class="item a" to="">卮言</router-link>
                    <span class="item a">退出</span>
                </aside>
                <aside class="rside">
                    <nav class="nav">
                        <router-link class="item a" to="/">公告消息</router-link>
                        <router-link class="item a" to="/">我的订单</router-link>
                        <router-link class="item a" to="/centerindex/center">个人中心</router-link>
                        <router-link class="item a" to="/">购物车</router-link>
                    </nav>
                    <div class="language"><span class="active a">中文</span> / <span class="a">英文</span></div>
                </aside>
            </section>
        </section>

        <div class="cont-wrap">
            <div class="cont">
                <div class="logo">
                    <img :src="logo" height="66" width="128" />
                </div>
                <div class="search">
                    <i class="iconfont icon-icon-"></i>
                    <input type="text" placeholder="请输入关键词">
                    <button>搜索</button>
                </div>
            </div>
        </div>

        <nav class="nav-wrap">
            <ul class="nav">
                <li class="cate">
                    <a>商品分类</a>
                    <ul class="menuList">
                        <li> <a href="">咖啡</a>/<a href="">饮食</a>/<a href="">眼睛</a></li>
                        <li> <a href="">咖啡／饮食／眼睛</a> </li>
                    </ul>
                </li>
                <li class="nav-item nav-active">
                    <a href="##">首页</a>
                </li>
                <li class="nav-item">
                    <a href="###">全部商品</a>
                </li>
                <li class="nav-item">
                    <a href="###">优惠专区</a>
                </li>
                <li class="nav-item">
                    <a href="###">领券中心</a>
                </li>
                <li class="nav-item">
                    <a href="###">下载APP</a>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script>
    export default {
        name: 'common-header',
        data() {
            return {
                logo: require('../../../../assets/images/logo.png')
            }
        }
    }

</script>

<style scoped lang="less">
    @import './header.less';
</style>
