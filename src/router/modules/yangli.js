const setting = () => import('@/pages/center/setting.vue');
const person = () => import('@/pages/center/person.vue');
const changePsd = () => import('@/pages/center/changePsd.vue'); 
const language = () => import('@/pages/center/language.vue'); 
const mailbox = () => import('@/pages/center/mailbox.vue'); 
const edit_mailbox = () => import('@/pages/center/edit_mailbox.vue'); 
const new_mailbox = () => import('@/pages/center/new_mailbox.vue'); 
const phone = () => import('@/pages/center/phone.vue'); 
const edit_phone = () => import('@/pages/center/edit_phone.vue'); 
const new_phone = () => import('@/pages/center/new_phone.vue'); 
const wallet = () => import('@/pages/center/wallet.vue'); 
const coupon = () => import('@/pages/center/coupon.vue'); 
const invite = () => import('@/pages/center/invite.vue'); 
const collection = () => import('@/pages/center/collection.vue'); 
const opinion = () => import('@/pages/center/opinion.vue'); 
const contact = () => import('@/pages/center/contact.vue'); 
const about = () => import('@/pages/center/about.vue'); 

export default [
    {
        path: '/setting',
        name: 'setting',
        component: setting,
        meta: {
            keepAlive: false,
            title: '设置',
        }
    },
    {
        path: '/person',
        name: 'person',
        component: person,
        meta: {
            keepAlive: false,
            title: '个人资料',
            hideTopBar: true, //隐藏顶部默认导航栏
        }
    },
    {
        path: '/changePsd',
        name: 'changePsd',
        component: changePsd,
        meta: {
            keepAlive: false,
            title: '修改密码',
        }
    },
    {
        path: '/language',
        name: 'language',
        component: language,
        meta: {
            keepAlive: false,
            title: '语言选择',
        }
    },
    {
        path: '/mailbox',
        name: 'mailbox',
        component: mailbox,
        meta: {
            keepAlive: false,
            title: '绑定邮箱',
        }
    },
   
    {
        path: '/edit_mailbox',
        name: 'edit_mailbox',
        component: edit_mailbox,
        meta: {
            keepAlive: false,
            title: '更改绑定邮箱',
        }
    },
    {
        path: '/new_mailbox',
        name: 'new_mailbox',
        component: new_mailbox,
        meta: {
            keepAlive: false,
            title: '绑定新邮箱',
        }
    },
    {
        path: '/phone',
        name: 'phone',
        component: phone,
        meta: {
            keepAlive: false,
            title: '绑定手机',
        }
    },
    {
        path: '/edit_phone',
        name: 'edit_phone',
        component: edit_phone,
        meta: {
            keepAlive: false,
            title: '更改绑定手机',
        }
    },
    {
        path: '/new_phone',
        name: 'new_phone',
        component: new_phone,
        meta: {
            keepAlive: false,
            title: '绑定新手机',
        }
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: wallet,
        meta: {
            keepAlive: false,
            title: '我的钱包',
            hideTopBar: true, //隐藏顶部默认导航栏
        }
    },
    {
        path: '/coupon',
        name: 'coupon',
        component: coupon,
        meta: {
            keepAlive: false,
            title: '代金券',
        }
    },
    {
        path: '/invite',
        name: 'invite',
        component: invite,
        meta: {
            keepAlive: false,
            title: '我的邀请',
        }
    },
    {
        path: '/collection',
        name: 'collection',
        component: collection,
        meta: {
            keepAlive: false,
            title: '我的收藏',
            hideTopBar: true, //隐藏顶部默认导航栏
        }
    },
    {
        path: '/opinion',
        name: 'opinion',
        component: opinion,
        meta: {
            keepAlive: false,
            title: '意见反馈',
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact,
        meta: {
            keepAlive: false,
            title: '联系我们',
        }
    },
    {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
            keepAlive: false,
            title: '关于我们',
        }
    },
];
