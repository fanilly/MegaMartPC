<template>
    <div class="container" :style="{'margin-top': $route.meta.noLeft ? '0' : '30px'}">
        <div class="navs" v-if="!$route.meta.noLeft">
            <router-link :class="{item: true, active: $route.name == item.name}" :to="{ name: item.name}" v-for="(item,index) in navs" :key="index">{{item.meta.title}}</router-link>
        </div>
        <div class="content" v-if="!$route.meta.noLeft">
            <router-view></router-view>
        </div>
        <div v-if="$route.meta.noLeft">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'centerIndex',
        data() {
            return {
                navs: []
            }
        },
        mounted() {
            this.navs = this.$router.options.routes.find(item => item.name == 'centerIndex').children;
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import './index.less';
</style>
