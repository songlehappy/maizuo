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
        //确认点击首页、影片&
        // case "SURE_CLICK":
        //     console.log(flag3);
        //     var flag3 = state.open;
        //     return Object.assign({}, state, {
        //         open: !flag3,
        //     })
        default:
            return state;
    }
}


//暴露
export default reducer;