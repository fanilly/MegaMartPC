/**
* @Author: 姬俊峰
* @Email: iallenaugustine@gmail.com - misterji0708@qq.com
* @DateTime: 2019-05-20 14:39:50
* @Description: Description
* @Last Modified time: 2019-05-20 14:39:50
*/
<template>
    <div class="main">
        <img :src="errorjpg" class="error-jpg">
        <h2>哎呀！您访问的页面走丢了！！！</h2>
        <div class="btn-group">
        </div>
    </div>
</template>

<script>
    import { Button } from 'element-ui';
    export default {
        name: 'error',
        components: {
            [Button.name]: Button
        },
        data() {
            return {
                errorjpg: require('../../assets/images/404error.jpg')
            }
        },
        methods: {
            handleReload() {
                location.reload();
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .main {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 100px;
        background-color: #fff;

        .error-jpg {
            width: 200px;
        }

        h2 {
            font-size: 12px;
            color: #999;
            font-weight: normal;
            padding: 20px;
        }
    }
</style>
