import axios from 'axios';
import { Notification } from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';
axios.defaults.timeout = 6000;              //超时默认值
// ajax请求回调之前拦截 对请求返回的信息做统一处理 比如error为401无权限则跳转到登陆界面
axios.interceptors.response.use(
    undefined,
    function(err) {
        if (err && err.response) {
            err.code = err.response.status;
            switch (err.response.status) {
                case 400: err.message = '请求错误(400)' ; break;
                case 401: err.message = '未授权，请重新登录(401)'; break;
                case 403: err.message = '拒绝访问(403)'; break;
                case 404: err.message = '请求出错(404)'; break;
                case 408: err.message = '请求超时(408)'; break;
                case 500: err.message = '服务器错误(500)'; break;
                case 501: err.message = '服务未实现(501)'; break;
                case 502: err.message = '网络错误(502)'; break;
                case 503: err.message = '服务不可用(503)'; break;
                case 504: err.message = '网络超时(504)'; break;
                case 505: err.message = 'HTTP版本不受支持(505)'; break;
                default: err.message = "连接出错(" + err.response.status +")!";
            }
        }else{
            err.code = '网路错误';
            err.message = '连接服务器失败,请检查网络连接!'
        }
        return Promise.reject(err);
    }
);

const publicRequests = {
    fetchGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then(res => {
                resolve(res);
            }).catch((err) => {
                Notification({
                    title: err.code,
                    message: err.message,
                    type: 'error',
                });
                reject(err);
            });
        });
    },
    fetchPost(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(res);
            }).catch(err => {
                Notification({
                    title: err.code,
                    message: err.message,
                    type: 'error',
                });
                reject(err);
            });
        });
    },
    fetchFilePost(url, params) {
        const instance = axios.create({
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return new Promise((resolve, reject) => {
            instance.post(url, params).then(res => {
                resolve(res);
            }).catch(err => {
                Notification({
                    title: err.code,
                    message: err.message,
                    type: 'error',
                });
                reject(err);
            });
        });
    }
};
export default publicRequests;
