import Vue from 'vue';
import Router from 'vue-router';
// import weiqiuge from './modules/weiqiuge.js';

import store from '../store/index.js';
import Storage from '../utils/Storage.js';
import { SET_USER_LOGIN_INFO } from '../store/mutation-type.js';

import index from '../pages/index/index.vue';
import error from '../pages/other/error.vue';
const centerIndex = () => import('@/pages/center/index/index.vue');
const center = () => import('@/pages/center/center/center.vue');
const car = () => import('@/pages/center/car/car.vue');
const address_info = () => import('@/pages/center/address_info/address_info.vue');
const collections = () => import('@/pages/center/collections/collections.vue');
const coupons = () => import('@/pages/center/coupons/coupons.vue');
const invitation = () => import('@/pages/center/invitation/invitation.vue');
const message = () => import('@/pages/center/message/message.vue');
const orders = () => import('@/pages/center/orders/orders.vue');
const userinfo = () => import('@/pages/center/userinfo/userinfo.vue');
const wallet = () => import('@/pages/center/wallet/wallet.vue');
const account_security = () => import('@/pages/center/account_security/account_security.vue');
const customer_service = () => import('@/pages/center/customer_service/customer_service.vue');
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                keepAlive: true,
                title: '首页',
                navbar: 1,
                hideTopBar: true,
                needLogin: false
            }
        },
        {
            path: '/error',
            name: 'error',
            component: error,
            meta: {
                keepAlive: true,
                title: '404',
            }
        },
        {
            path: '/centerindex',
            name: 'centerIndex',
            component: centerIndex,
            meta: {
                keepAlive: true,
                title: '个人中心',
                navbar: 1,
                hideTopBar: true,
                needLogin: false
            },
            children: [
                {
                    path: '/centerindex/center',
                    name: 'center',
                    component: center,
                    meta: {
                        keepAlive: false,
                        title: '个人中心'
                    }
                },
                {
                    path: '/centerindex/orders',
                    name: 'orders',
                    component: orders,
                    meta: {
                        keepAlive: false,
                        title: '我的订单'
                    }
                },
                {
                    path: '/car',
                    name: 'car',
                    component: car,
                    meta: {
                        keepAlive: false,
                        title: '我的购物车',
                        noLeft: true,
                    }
                },
                {
                    path: '/centerindex/coupons',
                    name: 'coupons',
                    component: coupons,
                    meta: {
                        keepAlive: false,
                        title: '我的优惠券'
                    }
                },
                {
                    path: '/centerindex/collections',
                    name: 'collections',
                    component: collections,
                    meta: {
                        keepAlive: false,
                        title: '我的收藏'
                    }
                },
                {
                    path: '/centerindex/wallet',
                    name: 'wallet',
                    component: wallet,
                    meta: {
                        keepAlive: false,
                        title: '我的钱包'
                    }
                },
                {
                    path: '/centerindex/invitation',
                    name: 'invitation',
                    component: invitation,
                    meta: {
                        keepAlive: false,
                        title: '我的邀请'
                    }
                },
                {
                    path: '/centerindex/userinfo',
                    name: 'userinfo',
                    component: userinfo,
                    meta: {
                        keepAlive: false,
                        title: '用户信息'
                    }
                },
                {
                    path: '/centerindex/account_security',
                    name: 'account_security',
                    component: account_security,
                    meta: {
                        keepAlive: false,
                        title: '账户安全'
                    }
                },
                {
                    path: '/centerindex/address_info',
                    name: 'address_info',
                    component: address_info,
                    meta: {
                        keepAlive: false,
                        title: '收货地址'
                    }
                },
                {
                    path: '/centerindex/message',
                    name: 'message',
                    component: message,
                    meta: {
                        keepAlive: false,
                        title: '系统消息'
                    }
                },
                {
                    path: '/centerindex/customer_service',
                    name: 'customer_service',
                    component: customer_service,
                    meta: {
                        keepAlive: false,
                        title: '联系客服'
                    }
                }
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) document.title = to.meta.title;

    //如果store中不存在uid 但是storage中存在USER_INFO信息
    //此时将storage中的USER_INFO信息取出存入store中
    if (!store.state.user.uid && Storage.getJson('USER_LOGIN_INFO')) {
        store.commit(SET_USER_LOGIN_INFO, Storage.getJson('USER_LOGIN_INFO'));
    }

    //如果页面需要登录而当前未登录 直接跳转至登录页面
    if (!store.state.user.uid && !Storage.getJson('USER_LOGIN_INFO') && to.meta.needLogin) {
        router.push({ name: 'Login' })
    }

    if (to.matched.length === 0) { //匹配前往的路由不存在
        from.name ? next({
            name: from.name
        }) : next('/error'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
    } else {
        next(); //如果匹配到正确跳转
    }
});
export default router;
