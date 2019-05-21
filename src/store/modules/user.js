import { SET_USER_INFO, SET_USER_LOGIN_INFO } from '../mutation-type.js';
export default {
    state: {
        uid: 138,  //用户ID
        rank: 1, //用户等级
        userPhone: '18739037057'
    },

    getters: {},

    mutations: {
        //保存获取用户信息接口获取到的数据
        [SET_USER_INFO](state, payload) {
            console.log(state, payload)
        },

        //保存用户登录后获取到的用户数据
        [SET_USER_LOGIN_INFO](state, payload) {
            state.uid = payload.user_id;
            state.rank = payload.user_rank;
        }
    },

    actions: {}
}
