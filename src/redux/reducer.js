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
        //------------------------------list/now请求数据前---------------------------------
        case "LIST_NOW_DATA_START":
            // console.log(1);
            return Object.assign({}, state, {
                animating: true,
                isLoading: true,
            })
        //------------------------------list/now请求数据结束---------------------------------
        case "LIST_NOW_DATA_END":
            var newData = state.data_list_now.slice();
            var length = action.data.length;
            for (var i = 0; i < length; i++) {
                newData.push(action.data[i])
            }
            // console.log(newData);
            return Object.assign({}, state, {
                animating: false,
                isLoading: false,
                data_list_now: newData,

            })
        //------------------------------list/comeing请求数据结束---------------------------------
        case "LIST_COME_DATA_END":
            var newData = state.data_list_coming.slice();
            var length = action.data.length;
            for (var i = 0; i < length; i++) {
                newData.push(action.data[i])
            }
            // console.log(newData);
            return Object.assign({}, state, {
                animating: false,
                isLoading: false,
                data_list_coming: newData,

            })
        //------------------------------请求影院数据结束---------------------------------
        case "CINEMA_DATA":

            return Object.assign({}, state, {
                animating: false,
                data_cinema: action.data,

            })
        //------------------------------请求详情数据结束---------------------------------
        case "DETAIL_DATA_END":
            var newData = state.data_detail.slice();
            newData.push(action.data);
            return Object.assign({}, state, {
                animating: false,
                data_detail: newData,

            })
        //------------------------------请求详情数据结束---------------------------------
        case "CHANGE_HEAD":
            
           
            return Object.assign({}, state, {
                data_head: action.data,

            })
        default:
            return state;
    }
}


//暴露
export default reducer;