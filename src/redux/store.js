//创建数据库
//引入creatStore
import { createStore } from 'redux';

//引入reducer方法作为参数
import reducer from './reducer.js';

//定义state的初始状态
var state = {
    //左边导航、遮罩的开关
    open: false,
    //活动指示器的开关
    animating: false,
    //loading指示器的开关
    isLoading: false,
    //轮播数据
    data_carousel: [],
    //正在热映数据
    data_nowing: [],
    //即将上映数据
    data_coming: [],
    //正在热映-------------列表数据
    data_list_now: [],
    //即将上映-------------列表数据
    data_list_coming: [],
    //-------------影院数据------------------
    data_cinema: [],
    //-------------影片详情数据------------------
    data_detail: [],
    //-------------头部文字数据------------------
    data_head: '',

}

var store = createStore(reducer, state)


//暴露
export default store;