<template>
    <footer class="footer">
        <section class="footer-content">
            <section class="top">
                <img :src="logo">
            </section>
            <section class="main">
                <aside class="lside">
                    <ul class="menus">
                        <li>新手上路</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">意见反馈</a></li>
                    </ul>
                    <ul class="menus">
                        <li>配送方式</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">意见反馈</a></li>
                    </ul>
                    <ul class="menus">
                        <li>购物指南</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">意见反馈</a></li>
                    </ul>
                    <ul class="menus">
                        <li>售后服务</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">意见反馈</a></li>
                    </ul>
                    <ul class="menus">
                        <li>关于我们</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">意见反馈</a></li>
                    </ul>
                    <ul class="menus">
                        <li>服务支持</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">意见反馈</a></li>
                    </ul>
                </aside>
                <aside class="rside">
                    <div class="item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558327261432&di=147b8cfdabe8409604de472b750a41e5&imgtype=0&src=http%3A%2F%2Fimg.atobo.com%2FProductImg%2FEWM%2FUWeb%2F3%2F1%2F4%2F1%2F4469%2F31414469%2F1.gif">
                        <p class="title">Android</p>
                    </div>
                    <div class="item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558327261432&di=147b8cfdabe8409604de472b750a41e5&imgtype=0&src=http%3A%2F%2Fimg.atobo.com%2FProductImg%2FEWM%2FUWeb%2F3%2F1%2F4%2F1%2F4469%2F31414469%2F1.gif">
                        <p class="title">IOS</p>
                    </div>
                </aside>
            </section>
        </section>
    </footer>
</template>

<script>
    export default {
        name: 'common-footer',
        data() {
            return {
                logo: require('../../../../assets/images/logo.png')
            }
        }
    }

</script>

<style scoped lang="less">
    @import './footer.less';
</style>
