import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index.js';
import ArrayExpand from './utils/Array.expand.js';
import Requests from './api/index.js';
import Storage from './utils/Storage.js';
import config from './config/index.js';

global.host = config.host;

ArrayExpand();

import './assets/styles/common.less';
import './assets/iconfont/iconfont.less';
import './assets/styles/animate.less';
import './assets/styles/variable.less';
import './assets/styles/public.less';
import './assets/styles/my.less';
import './assets/styles/shenyifan.less';

import { Loading, MessageBox, Notification, Message } from 'element-ui';

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$api = Requests;
Vue.prototype.$storage = Storage;

Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
