//创建数据库
//引入creatStore
import { createStore } from 'redux';

//引入reducer方法作为参数
import reducer from './reducer.js';

//定义state的初始状态
var state = {
    open: false,
    
}

var store = createStore(reducer, state)


//暴露
export default store;