//创建reducer方法

function reducer(state, action) {
    switch (action.type) {
        //点击li或空余部分
        case "LEFT_NAV_APPEAR":
            var flag1 = state.open;
            return Object.assign({}, state, {
                open: !flag1,
            })
        //点击头部导航  
        case "LEFT_HEAD":
            var flag2 = state.open;
            // console.log(flag2)
            return Object.assign({}, state, {
                open: !flag2,
            })
        //请求数据前
        case "DATA_START":
           
            
            return Object.assign({}, state, {
               animating: true,
            })
         //轮播请求数据结束
        case "DATA_END":
           
            
            return Object.assign({}, state, {
               animating: false,
               data_carousel: action.data
            })
        //now请求数据结束
        case "NOW_DATA_END":
           
            
            return Object.assign({}, state, {
               animating: false,
               data_nowing: action.data
            })
        //coming请求数据结束
        case "COME_DATA_END":
           
            
            return Object.assign({}, state, {
               animating: false,
               data_coming: action.data
            })
        default:
            return state;
    }
}


//暴露
export default reducer;