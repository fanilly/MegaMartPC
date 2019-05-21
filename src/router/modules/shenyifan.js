 // const center = () => import('@/pages/center/center');
 export default [
     {
         path: '/search',
         name: 'search',
         component: (resolve) => require(['@/pages/index/search/search'], resolve),
         meta: {
             keepAlive: true,
             title: '搜索',
             hideTopBar: true,
             needLogin:false
         }
    },
    {
        path: '/message',
        name: 'message',
        component: (resolve) => require(['@/pages/index/message/message'], resolve),
        meta: {
            keepAlive: true,
            title: '消息',
            hideTopBar: false,
            needLogin:false
        }
   },
   {
       path: '/chat',
       name: 'chat',
       component: (resolve) => require(['@/pages/index/chat/chat'], resolve),
       meta: {
           keepAlive: true,
           title: '消息',
           hideTopBar: false,
           needLogin:false
       }
    },
    {
        path: '/notice',
        name: 'notice',
        component: (resolve) => require(['@/pages/index/notice/notice'], resolve),
        meta: {
            keepAlive: true,
            title: '公告消息',
            hideTopBar: false,
            needLogin:false
        }
     },
     {
         path: '/noticeDetail',
         name: 'noticeDetail',
         component: (resolve) => require(['@/pages/index/notice-detail/notice-detail'], resolve),
         meta: {
             keepAlive: true,
             title: '公告详情',
             hideTopBar: false,
             needLogin:false
         }
      },
      {
          path: '/indexCate/:type',
          props:true,
          name: 'indexCate',
          component: (resolve) => require(['@/pages/index/cate/cate'], resolve),
          meta: {
              keepAlive: true,
              title: '',
              hideTopBar: false,
              needLogin:false
          }
       },
       {
           path: '/proDetail',
           name: 'proDetail',
           component: (resolve) => require(['@/pages/index/pro-detail/pro-detail'], resolve),
           meta: {
               keepAlive: true,
               title: '商品详情',
               hideTopBar: true,
               needLogin:false
           }
        }
 ];
