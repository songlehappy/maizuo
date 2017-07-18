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
    //轮播数据
    data_carousel: [],
    //正在热映数据
    data_nowing: [],
    //即将上映数据
    data_coming: [],

}

var store = createStore(reducer, state)


//暴露
export default store;