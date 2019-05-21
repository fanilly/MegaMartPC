import config from '../../config/index.js';
import HTTPS from '../public.js';
const isDev = process.env.NODE_ENV === 'development';
const apiHost = isDev ? '/mobile/jiekou.php' : config.host + '/mobile/jiekou.php';

const REQUESTS = {
    // 获取首页轮播图数据
    getBanner() {
        return HTTPS.fetchGet(`${apiHost}?act=ad_list`)
    },
    // 获取分类页分类列表数据
    getCategoryList() {
        return HTTPS.fetchGet(`${apiHost}?act=category_list`)
    },
    // 获取首页分类数据
    getIndexCategory() {
        return HTTPS.fetchGet(`${apiHost}?act=index_category`)
    },
    // 获取首页分最新商品数据
    getIndexNewsGoods() {
        return HTTPS.fetchGet(`${apiHost}?act=new_goods`)
    },
    // 获取猜你喜欢商品数据
    getGuessGoods(data) {
        return HTTPS.fetchGet(`${apiHost}?act=guess_goods`,data)
    },
    // 获取商品列表
    getGoodsList(data) {
        return HTTPS.fetchGet(`${apiHost}?act=goods_list`,data)
    },
    // 获取商品详情
    getGoodsDetail(data) {
        return HTTPS.fetchGet(`${apiHost}?act=goods_details`,data)
    },
    // 获取评价列表
    getGoodsEvaluateList(data) {
        return HTTPS.fetchGet(`${apiHost}?act=GoodsEvaluateList`,data)
    },
    // 获取购物车列表
    getCartList(data) {
        return HTTPS.fetchGet(`${apiHost}?act=cart_list`,data)
    },
    // 更新购物车
    updateCart(data) {
        return HTTPS.fetchGet(`${apiHost}?act=update_cart`,data)
    },
    // 删除购物车
    deleteProductCart(data) {
        return HTTPS.fetchGet(`${apiHost}?act=DeleteProductCart`,data)
    },
    // 根据属性ID 获取价格
    getAttrPrice(data) {
        return HTTPS.fetchGet(`${apiHost}?act=get_attr`,data)
    },
    // 添加购物车
    flowUpdateCart(data) {
        return HTTPS.fetchGet(`${apiHost}?act=flow_update_cart`,data)
    },

    //get 请求
    // toggleCollectionStatus(data) {
    //     return HTTPS.fetchGet(`${apiHost}?act=ad_list`, data)
    // },
    //post 请求
    // addCart(data) {
    //     return HTTPS.fetchPost(`${apiHost}?act=ad_list`, data)
    // },
};

export default REQUESTS;
